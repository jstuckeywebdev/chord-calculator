from django.db import models

# Create your models here.
class Song(models.Model):
    chords = []
    tempo = models.IntegerField
    keySignature = models.CharField