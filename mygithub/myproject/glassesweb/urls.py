from django.conf.urls import url

from glassesweb import views

urlpatterns =[
    url(r'^kede/$',views.kede,name='kede'),
    url(r'^dingdan/$',views.dingdan,name='dingdan'),
    url(r'^dingdan2/$',views.dingdan2,name='dingdan2'),
    url(r'^dingdan_axjs/(\d+)/$',views.dingdan_axjs,name='dingdan_axjs'),
    url(r'^logoin/$',views.logoin,name='logoin'),
    url(r'^register/$',views.register,name='register'),

]