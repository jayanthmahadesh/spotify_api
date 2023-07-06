from django.urls import path
from .views import RoomView,CreateRoomView
urlpatterns = [
    path('home',RoomView.as_view()),
    path('createroom',CreateRoomView.as_view(),name="create room"),
]
