from rest_framework import viewsets
from django.views.generic import TemplateView
from django.http import HttpResponse, JsonResponse

from myapp.serializers import TestModelSerializer
from myapp.models import TestModel

# Create your views here.
class IndexView(TemplateView):
    template_name = "index.html"

class TestViewSet(viewsets.ModelViewSet):
    queryset = TestModel.objects.all().order_by('firstname')
    serializer_class = TestModelSerializer

def myapp(request):
    return HttpResponse("MYAPP PAGE")
