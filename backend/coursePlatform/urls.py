from coursePlatform.views.courseListView import CourseList

from django.urls import path

urlpatterns = [
    path('courses/', CourseList.as_view(), name='course-list'),
    path('courses/<int:pk>/', CourseList.as_view(), name='course-detail'),
    path('courses/<int:pk>/delete/', CourseList.as_view(), name='course-delete'),
]