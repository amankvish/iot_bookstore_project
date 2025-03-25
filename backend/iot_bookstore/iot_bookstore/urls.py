from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('books.urls')),  # Link the books app's URLs
    path('api/auth/', include('users.urls')),
]
