from rest_framework import generics
from coursePlatform.models import Course
from coursePlatform.serializers.courseSerializer import CourseSerializer

class CourseList(generics.ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer