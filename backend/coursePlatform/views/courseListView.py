from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from coursePlatform.models import *
from coursePlatform.serializers.courseSerializer import *

class CourseBase(generics.GenericAPIView):
    queryset = Course.objects.all().order_by('created_at')
    serializer_class = CourseSerializer
    
class CreateCourse(CourseBase, generics.CreateAPIView):
    pass
    
class CourseView(CourseBase, generics.RetrieveAPIView):
    pass
    
class CourseList(CourseBase, generics.ListAPIView):
    pass

class CourseUpdateView(CourseBase,generics.UpdateAPIView):
    pass

class CourseDeleteView(CourseBase,generics.DestroyAPIView):
    pass

class LessonBase(generics.GenericAPIView):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

class LessonList(LessonBase ,generics.ListAPIView):
    pass

class LessonView(LessonBase, generics.RetrieveAPIView):
    pass
    
    