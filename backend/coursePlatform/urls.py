from coursePlatform.views.courseListView import *

from django.urls import path

urlpatterns = [
    path('courses/', CourseList.as_view(), name='course-list'),
    path('course/<int:pk>/', CourseView.as_view(), name="course-view"),
    path('create/course/', CreateCourse.as_view(), name="create-course"),
    path('courses/<int:pk>/', CourseUpdateView.as_view(),name= 'course-update'),
    path('courses/<int:pk>/delete/', CourseDeleteView.as_view(), name='course-delete'),
    path('lessons/', LessonList.as_view(), name='lesson-list')
]