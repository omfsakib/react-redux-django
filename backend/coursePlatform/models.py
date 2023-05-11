from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.hashers import make_password

class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
        
class Address(BaseModel):
    detail_address = models.TextField(max_length=2000, blank=True, null=True)
    state = models.CharField(max_length=20, blank=True, null=True)
    city = models.CharField(max_length=20, blank=True, null=True)
    zip = models.CharField(max_length=20, blank=True, null=True)


class User(AbstractUser):
    ROLES = (
        ('teacher', 'Teacher'),
        ('student', 'Student'),
        ('admin', 'Admin'),
    )
    role = models.CharField(max_length=10, choices=ROLES, default='student')
    bio = models.TextField(blank=True)
    groups = models.ManyToManyField(Group, related_name='course_users', blank=True)
    user_permissions = models.ManyToManyField(Permission, related_name='course_users', blank=True)

    def __str__(self):
        return self.username
    
    def save(self, *args, **kwargs):
        if not self.pk:
            # If the user is being created (i.e. doesn't have a primary key), hash their password
            self.password = make_password(self.password)
        super().save(*args, **kwargs)
    
class UserProfile(Address):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    phone_number = models.CharField(max_length=20)
    dob = models.DateField()
    gender = models.CharField(max_length=10)
    profile_pic = models.ImageField(upload_to='profile_pics', blank=True)

    def __str__(self):
        return self.user.username


class Course(BaseModel):
    name = models.CharField(max_length=200)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    teacher = models.ForeignKey(User, on_delete=models.CASCADE, related_name='taught_courses',limit_choices_to={'role': 'teacher'})
    students = models.ManyToManyField(User, blank=True, related_name='enrolled_courses', limit_choices_to={'role': 'student'})


class Lesson(BaseModel):
    title = models.CharField(max_length=255)
    description = models.TextField()
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.title

class Enrollment(BaseModel):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    student = models.ForeignKey(User, on_delete=models.CASCADE)

class Quiz(BaseModel):
    title = models.CharField(max_length=255)
    description = models.TextField()
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.title

class Question(BaseModel):
    text = models.TextField()
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    
        
    def __str__(self):
        return self.text

class Answer(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    text = models.TextField()
    is_correct = models.BooleanField(default=False)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    
    @staticmethod
    def is_correct_answer(id):
        try:
            answer = Answer.objects.get(id=id)
            if answer.is_correct:
                return True
            else:
                return False
        except Answer.DoesNotExist:
            return False
    
    def __str__(self):
        return self.question.text