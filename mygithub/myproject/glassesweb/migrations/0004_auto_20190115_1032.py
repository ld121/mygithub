# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-01-15 10:32
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('glassesweb', '0003_auto_20190115_0935'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='token',
            field=models.CharField(max_length=250),
        ),
    ]
