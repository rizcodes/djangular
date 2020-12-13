from django.db import models

import uuid

# Create your models here.
class TestModel(models.Model):
    firstname = models.CharField(max_length=128)
    lastname = models.CharField(max_length=128)

    def __str__(self):
        return f'{self.firstname} {self.lastname}'
