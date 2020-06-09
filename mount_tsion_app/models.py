from django.db import models

# Create your models here.
class User(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zip_code = models.CharField(max_length=255)
    age = models.CharField(max_length=255)
    gender = models.CharField(max_length=255)
    grade = models.CharField(max_length=255)

    def __str__(self):
        return self.full_name

class Enrollment(models.Model):
    course = models.CharField(max_length=255)
    date = models.CharField(max_length=255)
    how_often = models.CharField(max_length=255)
    time = models.CharField(max_length=255)

    def __str__(self):
        return self.course

class Event(models.Model):
    image_url = models.TextField()
    type_of_event = models.CharField(max_length=255)
    event_date = models.CharField(max_length=255)
    description = models.TextField()
    event_cost = models.CharField(max_length=255)

    def __str__(self):
        return self.type_of_event
    
