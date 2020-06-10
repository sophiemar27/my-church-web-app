from rest_framework import serializers

from .models import Event, User, Register, Course


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Register
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'
