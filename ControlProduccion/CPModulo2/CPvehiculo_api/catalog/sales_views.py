from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['POST'])
def promedio_produccion(request):
    try:
        equipos = request.data.get('equipos')

        if not equipos or not isinstance(equipos, list):
            return Response(
                {
                    'error': 'Debe enviar un arreglo de equipos'
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        total_produccion = 0

        for equipo in equipos:

            produccion = float(equipo.get('produccion', 0))

            total_produccion += produccion

        promedio = total_produccion / len(equipos)

        return Response({
            'cantidad_equipos': len(equipos),
            'total_produccion': total_produccion,
            'promedio_produccion': promedio
        })

    except Exception as e:
        return Response(
            {
                'error': str(e)
            },
            status=status.HTTP_400_BAD_REQUEST
        )
