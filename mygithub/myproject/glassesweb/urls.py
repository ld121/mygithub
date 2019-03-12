from django.conf.urls import url

from glassesweb import views

urlpatterns =[
    #首页子路由
    url(r'^kede/$',views.kede,name='kede'),
    #第二楼商品列表子路由
    url(r'^dingdan/(\d+)/$',views.dingdan,name='dingdan'),
    #第三楼商品列表子路由
    url(r'^dingdan2/$',views.dingdan2,name='dingdan2'),
    #第四楼商品列表子路由
    url(r'^dingdan_axjs/(\d+)/$',views.dingdan_axjs,name='dingdan_axjs'),
    #登录子路由
    url(r'^logoin/$',views.logoin,name='logoin'),
    # 退出子路由
    url(r'^logout/$', views.logout, name='logout'),
    #注册子路由
    url(r'^register/$',views.register,name='register'),
    #验证邮件子路由
    url(r'^checkemail/$',views.checkemail,name='checkemail'),
    #购物车子路由
    url(r'^cart/$',views.cart,name='cart'),
    #添加购物车子路由
    url(r'^appendCart/$',views.appendCart,name='appendCart'),
    # 购物车子路由
    url(r'^cart/$', views.cart, name='cart'),
    # 点击付款子路由
    url(r'^buy/$', views.buy, name='buy'),
    # 点击减少商品
    url(r'^minus/$', views.minus, name='minus'),
    # 点击增加商品
    url(r'^plus/$', views.plus, name='plus'),
    # 点击删除商品
    url(r'^delgoods/$', views.delgoods, name='delgoods'),
    # 商品订单
    url(r'^order/$', views.order, name='order'),
    # 生成商品订单
    url(r'^addorder/$', views.addorder, name='addorder'),

]