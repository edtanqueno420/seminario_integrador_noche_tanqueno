print("Funciones en control de produccion")
print("Funcion basica")

def iniciar_produccion():
    print("Produccion iniciada en Linea Principal")

iniciar_produccion()

print("Funcion con parametros")

def producir(producto, cantidad):
    print(f"Produciendo {cantidad} unidades de {producto}")

producir("Perno M8", 500)
producir("Tuerca M8", 1000)

print("Funcion que devuelve valor return")

def calcular_costo(cantidad, costo_unitario):
    return cantidad * costo_unitario

resultado = calcular_costo(500, 0.45)
print(f"Costo total: ${resultado:.2f}")

print("Funcion por posicion y por nombre")

def registrar_orden(producto, cantidad, linea):
    print(f"Orden: {producto} | Cantidad: {cantidad} | Linea: {linea}")

registrar_orden("Perno M8", 500, "Corte")
registrar_orden("Tuerca M10", 300, "Plegado")
registrar_orden(cantidad=200, producto="Arandela", linea="Empaque")

print("Funcion con valores por defecto")

def inspeccionar(pieza, estado="Pendiente", prioridad="Normal"):
    print(f"Pieza: {pieza} | Estado: {estado} | Prioridad: {prioridad}")

inspeccionar("Perno M8", "Aprobado")
inspeccionar("Tuerca M10", prioridad="Urgente")
inspeccionar("Eje 20mm", "Rechazado")

print("Funcion con parametros posicionales (*args)")

def sumar_produccion(*args):
    print(f"Lotes recibidos: {args}")
    return sum(args)

print(sumar_produccion(100, 200, 150))
print(sumar_produccion(50, 75, 100, 125, 60, 90))
print(sumar_produccion(500, 300, 250))

print("Funcion parametros combinados con posicionales")

def mostrar_materiales(titulo, *materiales):
    print(f"Materiales para {titulo}:")
    for material in materiales:
        print(f"  - {material}")

mostrar_materiales("Lote Acero", "Plancha 3mm", "Varilla 8mm", "Tornillos M6")

print("Funcion combinacion con todos los tipos")

def configurar_linea(maquina, *estaciones, debug=False, **opciones):
    print("Configuracion de linea")
    print(f"Maquina: {maquina}")
    print(f"Estaciones: {estaciones}")
    print(f"Debug: {debug}")
    print(f"Opciones: {opciones}")

configurar_linea("Prensa H-2000", 1, 2, 3, debug=True, velocidad="rapido", turno="nocturno")

print("Devolver multiples valores")

def minmax_produccion(numeros):
    return min(numeros), max(numeros)

minimo, maximo = minmax_produccion([150, 230, 456, 98, 120, 345])
print("Produccion minima:", minimo, "maxima:", maximo)

_, maximo = minmax_produccion([150, 230, 456, 98])
print("Maximo:", maximo)

minimo, _ = minmax_produccion([150, 230, 456, 98])
print("Minimo:", minimo)

print("Devolver diccionario con estadisticas de produccion")

def analizar_produccion(numeros):
    total = sum(numeros)
    n = len(numeros)
    return {
        "total": total,
        "promedio": total / n if n > 0 else 0,
        "minimo": min(numeros) if numeros else None,
        "maximo": max(numeros) if numeros else None,
        "count": n,
    }

datos = [120, 334, 200, 450, 180, 320]
stats = analizar_produccion(datos)
print(f"Total producido: {stats['total']}")
print(f"Promedio por lote: {stats['promedio']:.2f}")
print(f"Rango: {stats['minimo']} - {stats['maximo']}")

print("Funciones lambda")

def duplicar_produccion(numero):
    return numero * 2

duplicar = lambda x: x * 2
print(duplicar_produccion(500))
print(duplicar(300))
suma = lambda a, b: a + b
print(suma(450, 320))
