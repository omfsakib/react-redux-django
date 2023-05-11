from coursePlatform.views.courseListView import CourseList

from django.urls import path

urlpatterns = [
    path('courses/', CourseList.as_view(), name='course-list'),
]