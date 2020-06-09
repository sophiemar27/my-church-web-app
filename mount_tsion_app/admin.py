from django.contrib import admin
from .models import Event, User, Register, Course

# Register your models here.
admin.site.register(Event)
admin.site.register(User)
admin.site.register(Register)
admin.site.register(Course)
