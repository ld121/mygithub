from django.shortcuts import render

# Create your views here.
from glassesweb.models import Wheel


def kede(request):
    wheel = Wheel.objects.all()
    data = {
        "wheel":wheel,
    }
    return render(request,'kede.html',data)


def logoin(request):

    return render(request,'logoin.html')


def register(request):

    return render(request, 'register.html')