from django.db import models

# 基础模板
class Bass(models.Model):
    img = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    truckid = models.CharField(max_length=10)

    class Meta:
        abstract = True

#轮播图
class Wheel(Bass):
    class Meta:
        db_table = 'axf_wheel'

#导航栏
class Nav(Bass):
    class Meta:
        db_table = 'axf_nav'

#每日必购
class Mustbuy(Bass):
    class Meta:
        db_table = 'axf_mustbuy'

#部分商品
class Commodity(Bass):
    class Meta:
        db_table = 'axf_commodity'

class Mainshow(models.Model):
    trackid = models.CharField(max_length=10)
    name = models.CharField(max_length=100)
    img = models.CharField(max_length=100)
    categoryid = models.CharField(max_length=10)
    brandname = models.CharField(max_length=100)

    img1 = models.CharField(max_length=100)
    childcid1 = models.CharField(max_length=10)
    productid1 = models.CharField(max_length=10)
    longname1 = models.CharField(max_length=100)
    price1 = models.CharField(max_length=10)
    marketprice1 = models.CharField(max_length=10)

    img2 = models.CharField(max_length=100)
    childcid2 = models.CharField(max_length=10)
    productid2 = models.CharField(max_length=10)
    longname2 = models.CharField(max_length=100)
    price2 = models.CharField(max_length=10)
    marketprice2 = models.CharField(max_length=10)

    img3 = models.CharField(max_length=100)
    childcid3 = models.CharField(max_length=10)
    productid3 = models.CharField(max_length=10)
    longname3 = models.CharField(max_length=100)
    price3 = models.CharField(max_length=10)
    marketprice3 = models.CharField(max_length=10)

    class Meta:
        db_table = 'axf_mainshow'