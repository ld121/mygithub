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
        db_table= 'glasses_lunbotu'

class Floor2(Bass):

    price = models.CharField(max_length=50)
    sales = models.CharField(max_length=50)
    class Meta:
        db_table='glasses_floor2tu'

class F2zhi(Bass):
    img1 = models.CharField(max_length=200)
    img2 = models.CharField(max_length=200)
    img3 = models.CharField(max_length=200)
    img4 = models.CharField(max_length=200)
    class Meta:
        db_table='glasses_floor2zhi'

class User(models.Model):
    name = models.CharField(max_length=20)
    passwd = models.CharField(max_length=30)
    token = models.CharField(max_length=250)
    class Meta:
        db_table='glasses_user'

class Cart(models.Model):
    numb = models.IntegerField()

    user = models.ForeignKey(User)
    goods = models.ForeignKey(Floor2)
    class Meta:
        db_table='glasses_cart'