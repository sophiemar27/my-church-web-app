# mount_tsion_app/urls.py
from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()

router.register('user', views.UserView)
router.register('event', views.EventView)
router.register('register', views.RegisterView)
router.register('course', views.CourseView)


urlpatterns = [
    path('', include(router.urls))
]
