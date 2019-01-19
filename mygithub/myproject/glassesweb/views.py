import hashlib
import uuid

from django.http import JsonResponse
from django.shortcuts import render, redirect

# Create your views here.
from glassesweb.models import Wheel, Floor2, User, F2zhi


def kede(request):
    wheel = Wheel.objects.all()
    f2show1 = Floor2.objects.all()[0:6]
    f2show2 = Floor2.objects.all()[6:10]
    f1show1 = Floor2.objects.all()[11:17]
    f1show2 = Floor2.objects.all()[11:]


    token = request.session.get('token')
    if token:
        user = User.objects.get(token=token)
        username = user.name
    else:
        username = None
    data = {
        "wheel":wheel,
        'f1show1': f1show1,
        'f1show2': f1show2,
        'f2show1': f2show1,
        'f2show2': f2show2,
        'user' : username,
    }
    return render(request,'kede.html',data)



def logoin(request):

    if request.method == 'GET':
        return render(request, 'logoin.html')
    elif request.method == 'POST':
        username = request.POST.get('UserName')
        passwd = request.POST.get('Password')
        try:
            user = User.objects.get(name=username)
            if user.passwd != passwd:    # 密码错误
                return render(request, 'logoin.html',{'error': '密码错误!'})
            else:
                user.token = str(uuid.uuid5(uuid.uuid4(), 'login'))
                user.save()
                request.session['token'] = user.token
                return redirect('glassesweb:kede')

        except:
            return render(request, 'logoin.html',{'error':'用户名有误，请检查后输入!'} )

def logout(request):
    request.session.flush()
    return redirect('glassesweb:logoin')


def register(request):
    if request.method == 'GET':
        return render(request, 'register.html')
    elif request.method == 'POST':
        user = User()
        user.name = request.POST.get("UserName")
        user.passwd = request.POST.get("Password")
        user.token = str(uuid.uuid5(uuid.uuid4(), 'login'))
        user.save()
        request.session['token'] = user.token
        return redirect('glassesweb:kede')


def dingdan(request,id):
    if int(id) > 13:
        id = "12"
    showzhi = F2zhi.objects.get(trackid=id)
    f1show = Floor2.objects.get(trackid=id)

    data={
        'showzhi': showzhi,
        'f1show': f1show,
    }
    return render(request,'dingdan.html',data)


def dingdan2(request):

    return render(request,'dingdan2.html')


def dingdan_axjs(request,id):

    return render(request,'dingdan_axjs.html')


def cart(request):
    token = request.GET.get("token")
    if token:

        return render(request,'cart.html')
    else:
        return render(request,'logoin.html')



def checkemail(request):
    email = request.GET.get("emaildata")
    userdb = User.objects.filter(name = email)
    if userdb.exists() :
        return JsonResponse({'error':'账号已被注册','status':0})
    else:
        return JsonResponse({'ok':'账号可以使用','status':1})


def appendCart(request):
    return None