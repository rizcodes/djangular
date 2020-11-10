from django.db import models

# Create your models here.
class TestModel(models.Model):
    firstname = models.CharField(max_length=128)
    lastname = models.CharField(max_length=128)
