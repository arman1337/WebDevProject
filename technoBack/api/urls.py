from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
from api.views.views_generic import CategoryListAPIView, SaleListAPIView

urlpatterns = [
    path('categories/', CategoryListAPIView.as_view()),
    path('sales/', SaleListAPIView.as_view()),
    path('login/', obtain_jwt_token),
]