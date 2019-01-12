from django.shortcuts import render

# Create your views here.
from glassesweb.models import Wheel, Floor2


def kede(request):
    wheel = Wheel.objects.all()
    floor2 = Floor2.objects.all()

    data = {
        "wheel":wheel,
        'floor2':floor2,
    }
    return render(request,'kede.html',data)


def logoin(request):

    return render(request,'logoin.html')


def register(request):

    return render(request, 'register.html')