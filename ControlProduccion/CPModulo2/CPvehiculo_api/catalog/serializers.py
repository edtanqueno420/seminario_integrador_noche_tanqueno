from rest_framework import serializers
from .models import Fabricante, EquipoProduccion

class FabricanteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fabricante
        fields = ["id", "nombre"]

class EquipoProduccionSerializer(serializers.ModelSerializer):
    fabricante_nombre = serializers.CharField(source="fabricante.nombre", read_only=True)

    class Meta:
        model = EquipoProduccion
        fields = ["id", "fabricante", "fabricante_nombre", "modelo_equipo", "ano_fabricacion", "numero_serie", "estado", "creado_en"]
