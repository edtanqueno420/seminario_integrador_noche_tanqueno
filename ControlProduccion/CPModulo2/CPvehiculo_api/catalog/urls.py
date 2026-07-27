from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import FabricanteViewSet, EquipoProduccionViewSet
from .calculos_views import calcular_area_triangulo
from .sales_views import promedio_produccion

router = DefaultRouter()
router.register(r"fabricantes", FabricanteViewSet, basename="fabricantes")
router.register(r"equipos", EquipoProduccionViewSet, basename="equipos")

urlpatterns = [

    path(
        'triangle/area/',
        calcular_area_triangulo,
        name='triangle-area'
    ),
    path(
        'products/promedio-produccion/',
        promedio_produccion,
        name='promedio-produccion'
    ),


]
urlpatterns += router.urls
