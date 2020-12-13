from django.urls import path, include
from rest_framework import routers
from myapp import views

router = routers.DefaultRouter()
router.register(r'test', views.TestViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls',
                              namespace='rest_framework'))
]
