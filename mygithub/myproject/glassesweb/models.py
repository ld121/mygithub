from django.db import models

# Create your models here.
class Bass(models.Model):
    img = models.CharField(max_length=200)
    name = models.CharField(max_length=100)
    trackid = models.CharField(max_length=10)

    class Meta:
        abstract = True

class Wheel(Bass):
    bgcolor = models.CharField(max_length=50)
    class Meta:
        db_table= 'bg_lunbotu'

class Floor2(Bass):

    price = models.CharField(max_length=50)
    sales = models.CharField(max_length=50)
    class Meta:
        db_table='floor_2tu'




