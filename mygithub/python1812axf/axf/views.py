from re import M

from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from axf.models import Wheel, Nav, Mustbuy, Commodity, Mainshow, Foottypes, Goods


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


def market(request, childid='0', sortid='0'):
    foodtypes = Foottypes.objects.all()

    index = int(request.COOKIES.get('index', '0'))

    categoryid = foodtypes[index].typeid

    if childid == '0':
        goods = Goods.objects.filter(categoryid=categoryid)
    else:
        goods = Goods.objects.filter(categoryid=categoryid).filter(childcid=childid)

    if sortid == '1':
        goods = goods.order_by('-productnum')
    elif sortid == '2':
        goods = goods.order_by('price')
    elif sortid == '3':
        goods = goods.order_by('-price')


    childtypenames = foodtypes[index].childtypenames
    childtype_list = []

    for item in childtypenames.split('#'):
        item_arr = item.split(':')
        temp_dir = {
            'name': item_arr[0],
            'id': item_arr[1]
        }

        childtype_list.append(temp_dir)

    request_dir = {
        'foodtypes': foodtypes,
        'goods': goods,
        'childtype_list': childtype_list,
        'childid': childid
    }
    return render(request, 'market/market.html', request_dir)




def cart(request):
    return render(request, 'cart/cart.html')


def mine(request):
    return render(request, 'mine/mine.html')