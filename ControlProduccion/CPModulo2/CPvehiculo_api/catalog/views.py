from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from .models import Fabricante, EquipoProduccion
from .serializers import FabricanteSerializer, EquipoProduccionSerializer
from .permissions import IsAdminOrReadOnly

class FabricanteViewSet(viewsets.ModelViewSet):
    queryset = Fabricante.objects.all().order_by("id")
    serializer_class = FabricanteSerializer
    permission_classes = [IsAdminOrReadOnly]
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    search_fields = ["nombre"]
    ordering_fields = ["id", "nombre"]

class EquipoProduccionViewSet(viewsets.ModelViewSet):
    queryset = EquipoProduccion.objects.select_related("fabricante").all().order_by("-id")
    serializer_class = EquipoProduccionSerializer
    permission_classes = [IsAdminOrReadOnly]
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ["fabricante"]
    search_fields = ["modelo_equipo", "numero_serie", "estado", "fabricante__nombre"]
    ordering_fields = ["id", "ano_fabricacion", "modelo_equipo", "numero_serie", "creado_en"]

    def get_queryset(self):
        qs = super().get_queryset()
        ano_min = self.request.query_params.get("ano_min")
        ano_max = self.request.query_params.get("ano_max")
        if ano_min:
            qs = qs.filter(ano_fabricacion__gte=int(ano_min))
        if ano_max:
            qs = qs.filter(ano_fabricacion__lte=int(ano_max))
        return qs

    def get_permissions(self):
        if self.action == "list":
            return [AllowAny()]
        return super().get_permissions()
