from re import M

from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from axf.models import Wheel, Nav, Mustbuy, Commodity, Mainshow


def home(request):
    wheels = Wheel.objects.all()
    navs = Nav.objects.all()
    mustbuys = Mustbuy.objects.all()

    commoditys = Commodity.objects.all()
    commodity0 = commoditys[0]
    commodity1s = commoditys[1:3]
    commodity2s = commoditys[3:7]
    commodity3s = commoditys[7:11]

    mainshows = Mainshow.objects.all()
    request_dir = {
        'wheels':wheels,
        'navs':navs,
        'mustbuys':mustbuys,
        'commodity0':commodity0,
        'commodity1s': commodity1s,
        'commodity2s': commodity2s,
        'commodity3s': commodity3s,
        'mainshows':mainshows
    }
    return render(request, 'home/home.html',request_dir)


def market(request):
    return render(request, 'market/market.html')


def cart(request):
    return render(request, 'cart/cart.html')


def mine(request):
    return render(request, 'mine/mine.html')