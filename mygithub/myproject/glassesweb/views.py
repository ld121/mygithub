from django.shortcuts import render, redirect

# Create your views here.
from glassesweb.models import Wheel, Floor2, User


def kede(request):
    wheel = Wheel.objects.all()
    f2show1 = Floor2.objects.all()[0:6]
    f2show2 = Floor2.objects.all()[6:]

    data = {
        "wheel":wheel,
        'f2show1':f2show1,
        'f2show2': f2show2,
    }
    return render(request,'kede.html',data)


def logoin(request):
    if request.method == 'GET':
        return render(request, 'logoin.html')
    elif request.method == 'POST':
        pass



def register(request):
    if request.method == 'GET':
        return render(request, 'register.html')
    elif request.method == 'POST':
        user = User()
        user.name = request.POST.get("UserName")
        user.passwd = request.POST.get("Password")
        user.save()
        return redirect('glassesweb:kede')


def dingdan(request):

    return render(request,'dingdan.html')


def dingdan2(request):

    return render(request,'dingdan2.html')


def dingdan_axjs(request,id):

    return render(request,'dingdan_axjs.html')

