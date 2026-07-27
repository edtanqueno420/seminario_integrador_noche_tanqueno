from django.http import JsonResponse


def calcular_area_triangulo(request):
    try:
        base = float(request.GET.get('base'))
        altura = float(request.GET.get('altura'))

        area = (base * altura) / 2

        return JsonResponse({
            'base': base,
            'altura': altura,
            'area': area
        })

    except (TypeError, ValueError):
        return JsonResponse({
            'error': 'Debe enviar base y altura validas'
        }, status=400)
