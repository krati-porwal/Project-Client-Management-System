from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Client,Project,Contact,Subscriber
import json

def client_list(request):
    clients = Client.objects.all()
     
    client_data = []
    for client in clients:
        client_data.append({
          "id": client.id,
          "name": client.name,
          "designation": client.designation,
          "description": client.description,
          "image": client.image.url if client.image else ""
        })

    return JsonResponse(client_data, safe=False)

def project_list(request):
    projects = Project.objects.select_related('client').all()

    project_data = []
    for project in projects:
        project_data.append({
            "id": project.id,
            "name": project.name,
            "description": project.description,
            "image": project.image.url if project.image else "",
            "client": project.client.name
        })

    return JsonResponse(project_data, safe=False)

@csrf_exempt
def contact_create(request):
    if request.method == "POST":
        data = json.loads(request.body)

        Contact.objects.create(
            full_name=data.get("full_name"),
            email=data.get("email"),
            mobile_number=data.get("mobile_number"),
            city=data.get("city")
        )

        return JsonResponse({
            "message": "Contact saved successfully"
        })

    return JsonResponse({
      "error": "Only POST method allowed"
      }, status=400)


@csrf_exempt
def subscribe(request):
    if request.method == "POST":
        data = json.loads(request.body)
        email = data.get("email")

        if Subscriber.objects.filter(email=email).exists():
            return JsonResponse({
                "message": "Email already subscribed"
            }, status=400)

        Subscriber.objects.create(email=email)

        return JsonResponse({
            "message": "Subscribed successfully"
        })

    return JsonResponse({
        "error": "Only POST method allowed"
    }, status=400)
