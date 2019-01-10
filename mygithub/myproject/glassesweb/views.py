from django.shortcuts import render

# Create your views here.



def kede(request):

    return render(request,'kede.html')


def logoin(request):

    return render(request,'logoin.html')


def register(request):

    return render(request, 'register.html')