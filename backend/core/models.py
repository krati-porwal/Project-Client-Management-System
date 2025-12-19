from django.db import models

# Create your models here.
#Projects Table 
class Projects(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='project_images/')

    def __str__(self):
        return self.name

#Clients Table
class Clients(models.Model):
    name = models.CharField(max_length=100)
    designation = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='client_images/')

    def __str__(self):
        return self.name

#Contact Table
class Contact(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    mobile_number = models.CharField(max_length=15)
    city = models.CharField(max_length=100)

    def __str__(self):
        return self.full_name

#Subscriber Table
class Subscriber(models.Model):
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.email