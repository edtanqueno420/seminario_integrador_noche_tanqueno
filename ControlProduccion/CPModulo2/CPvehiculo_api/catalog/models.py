from django.db import models

class Fabricante(models.Model):
    nombre = models.CharField(max_length=120, unique=True)

    def __str__(self):
        return self.nombre

class EquipoProduccion(models.Model):
    fabricante = models.ForeignKey(Fabricante, on_delete=models.PROTECT, related_name="equipos")
    modelo_equipo = models.CharField(max_length=120)
    ano_fabricacion = models.IntegerField()
    numero_serie = models.CharField(max_length=20, unique=True)
    estado = models.CharField(max_length=60, blank=True, default="")
    creado_en = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.fabricante.nombre} {self.modelo_equipo} ({self.numero_serie})"
