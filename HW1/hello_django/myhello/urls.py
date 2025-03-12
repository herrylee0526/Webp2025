'''from django.urls import path
from . import views


#urlpatterns = [
   # path('', views.HelloApiView.as_view(), name='index'),
#]
urlpatterns = [
    path('add', views.add_post, name='add_post'),
    path('list', views.list_post, name='list_post'),
    #path('users', views.list_users, name='list_users'),
]

from django.urls import path
from .views import courselist, addcourse

urlpatterns = [
    path('courselist', courselist),
    path('addcourse', addcourse),
]'''
from django.urls import path
from . import views  # 匯入 views.py 內的所有函數

# 定義 urlpatterns，包含所有 API 路由
urlpatterns = [
    path('add', views.add_post, name='add_post'),
    path('list', views.list_post, name='list_post'),
    path('courselist', views.courselist, name='courselist'),
    path('addcourse', views.addcourse, name='addcourse'),
]
