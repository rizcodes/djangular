from rest_framework import serializers
from myapp.models import TestModel

class TestModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestModel
        fields = ('id', 'firstname', 'lastname')
