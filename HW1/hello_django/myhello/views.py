#from django.shortcuts import render
#from django.http import HttpResponse
# Create your views here.
#def myIndex(request):
 #   my_name = request.GET.get('name' , "CGU")
  #  return HttpResponse(f"Hello {my_name}!")
'''from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class HelloApiView(APIView):
    def get(self, request):
        my_name = request.GET.get('name' , None)
        if my_name:
            retValue = {}
            retValue['data'] = "Hello " + my_name
            return Response(retValue, status=status.HTTP_200_OK)
        else:
            return Response(
                {"res": "parameter: name is None"},
                status=status.HTTP_400_BAD_REQUEST
            )'''

'''from rest_framework import status
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.core.serializers.json import DjangoJSONEncoder
import json
import logging

from .models import Post

logger = logging.getLogger('django')

@api_view(['GET'])
def add_post(request):
    title = request.GET.get('title' , '')
    content = request.GET.get('content' , '')
    photo = request.GET.get('photo' , '')
    location = request.GET.get('location' , '')

    new_post = Post()
    new_post.title = title
    new_post.content = content
    new_post.photo = photo
    new_post.location = location
    new_post.save()
    logger.debug(" ************** myhello_api: " + title)
    if title:
        return Response({"data": title + " insert!"}, status=status.HTTP_200_OK)
    else:
        return Response(
            {"res": "parameter: name is None"},
            status=status.HTTP_400_BAD_REQUEST
        )




@api_view(['GET'])
def list_post(request):
    posts = Post.objects.all().values()
    return JsonResponse(list(posts), safe=False)

    from rest_framework.decorators import api_view
    from rest_framework.response import Response
    from .models import Course
    from .serializers import CourseSerializer

    @api_view(['GET'])
    def courselist(request):
        courses = Course.objects.all()
        serializer = CourseSerializer(courses, many=True)
        return Response(serializer.data)

    @api_view(['POST'])
    def addcourse(request):
        serializer = CourseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "課程已新增"}, status=201)
        return Response(serializer.errors, status=400)'''



    #return Response({"data":
                     #json.dumps(
                         #list(posts),
                         #sort_keys = True,
                         #indent = 1,
                         #cls = DjangoJSONEncoder)},
                     #status=status.HTTP_200_OK)
'''from .models import User
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
@api_view(['GET'])
def list_users(request):
    page = request.GET.get('page', 1)
    users = User.objects.all().values()
    
    paginator = paginator(users, 10)
    try:
        users = paginator.page(page)
    except PageNotAnInteger:
        users = paginator.page(1)
    except EmptyPage:
        users = paginator.page(paginator.num_pages)
        
    return JsonResponse(list(user), safe=False)'''
from rest_framework import status
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.core.serializers.json import DjangoJSONEncoder
import json
import logging

from .models import Post, Course  # 確保引入 Post 和 Course
from .serializers import CourseSerializer  # 確保引入 serializers.py

logger = logging.getLogger('django')


@api_view(['GET'])
def add_post(request):
    title = request.GET.get('title', '')
    content = request.GET.get('content', '')
    photo = request.GET.get('photo', '')
    location = request.GET.get('location', '')

    if not title:
        return Response(
            {"res": "parameter: title is missing"},
            status=status.HTTP_400_BAD_REQUEST
        )

    new_post = Post(title=title, content=content, photo=photo, location=location)
    new_post.save()

    logger.debug("************** myhello_api: " + title)
    return Response({"data": title + " insert!"}, status=status.HTTP_200_OK)


@api_view(['GET'])
def list_post(request):
    posts = Post.objects.all().values()
    return JsonResponse(list(posts), safe=False)


@api_view(['GET'])
def courselist(request):
    courses = Course.objects.all()
    serializer = CourseSerializer(courses, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def addcourse(request):
    serializer = CourseSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "課程已新增"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
