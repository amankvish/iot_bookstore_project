from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title', 'author', 'publication_date', 'isbn', 'summary']
        
    # You can add custom validation if needed
    def validate_isbn(self, value):
        if len(value) > 17:
            raise serializers.ValidationError("ISBN should not exceed 17 characters.")
        return value
