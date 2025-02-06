from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request, 'profiling/index.html')

def about(request):
    return render(request, 'profiling/about.html')

def projects(request):
    return render(request, 'profiling/projects.html')

def experience(request):
    return render(request, 'profiling/experience.html')

def contact(request):
    return render(request, 'profiling/contact.html')