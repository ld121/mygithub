from django.conf.urls import url

from axf import views

urlpatterns=[
    url(r'^home/$', views.home, name='home'),  # 首页
    url(r'^market/$', views.market, name='marketbase'),  # 闪购超市
    url(r'^market/(?P<childid>\d+)/(?P<sortid>\d+)/$', views.market, name='market'),
    url(r'^cart/$', views.cart, name='cart'),  # 购物车
    url(r'^mine/$', views.mine, name='mine'),  # 我的
]