# mount_tsion_app/urls.py
from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()

router.register('User', views.UserView)
router.register('Event', views.EventView)
router.register('Register', views.RegisterView)
router.register('Course', views.CourseView)


urlpatterns = [
    path('', include(router.urls))
]
