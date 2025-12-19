from django.contrib import admin
from .models import Client, Project, Contact, Subscriber


@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ('name', 'designation')
    search_fields = ('name', 'designation')
    list_filter = ('designation',)


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'client')
    search_fields = ('name',)
    list_filter = ('client',)


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'mobile_number', 'city')
    search_fields = ('full_name', 'email', 'mobile_number', 'city')


@admin.register(Subscriber)
class SubscriberAdmin(admin.ModelAdmin):
    list_display = ('email',)
    search_fields = ('email',)
