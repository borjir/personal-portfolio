from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),  # View for item categories index
    path('about/', views.about, name='about'),  # View for item categories index
    path('projects/', views.projects, name='projects'),  # View for item categories index
    path('experience/', views.experience, name='experience'),  # View for item categories index
    path('contact/', views.contact, name='contact'),  # View for item categories index
]