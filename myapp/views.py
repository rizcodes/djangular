from django.shortcuts import render, HttpResponseRedirect
from django.views.generic import TemplateView
from django.http import HttpResponse, JsonResponse

from myapp.models import TestModel
from myapp.serializers import TestModelSerializer

# Create your views here.
class IndexView(TemplateView):
    template_name = "index.html"

def myapp(request):
    return HttpResponse("MYAPP PAGE")
