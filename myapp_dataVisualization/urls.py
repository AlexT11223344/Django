from django.urls import path, re_path, include
from myapp import views
from djangoProject_2 import settings

urlpatterns = [
    path('', views.home, name='home'),
    path("info", views.get_drop_down_info, name='get_drop_down_info'),
    path('request_info', views.test_request, name='test_request'),
]