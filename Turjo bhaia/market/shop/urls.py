from django.urls import path

from . import views 

urlpatterns = [  
    path('', views.index, name='shop'),
    path('<int:product_id>', views.shop , name='shop'),
    path('', views.index, name='product'),
    path('product', views.product , name='product'),

    
]
