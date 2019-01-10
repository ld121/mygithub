from django.conf.urls import url

from glassesweb import views

urlpatterns =[
    url(r'^kede/$',views.kede,name='kede')
]