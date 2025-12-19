from django.urls import path
from .views import client_list, project_list, contact_create, subscribe

urlpatterns = [
    path('clients/', client_list),
    path('projects/', project_list),
    path('contact/', contact_create),
    path('subscribe/', subscribe),
]
