from django.conf.urls import url

from glassesweb import views

urlpatterns =[
    url(r'^kede/$',views.kede,name='kede'),
    url(r'^logoin/$',views.logoin,name='logoin'),
    url(r'^register/$',views.register,name='register'),
]