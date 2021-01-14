from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from myapp.serializers import TestModelSerializer
from myapp.models import TestModel


# Create your views here.
class TestViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)

    queryset = TestModel.objects.all().order_by('firstname')
    serializer_class = TestModelSerializer 
