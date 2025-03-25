from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    publication_date = models.DateField()
    isbn = models.CharField(max_length=17)  # ISBN should be max 17 to allow ISBN with dashes
    summary = models.TextField()

    def __str__(self):
        return self.title
