from django.shortcuts import render

def index(request):
    return render(request,'shop/shop.html')

def shop(request):
    return render(request,'shop/shop.html')



def product(request):
    return render(request,'shop/product.html')    


