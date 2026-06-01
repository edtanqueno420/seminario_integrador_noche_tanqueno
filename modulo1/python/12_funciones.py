print("Funciones con Python")
print("Funciones basicas")
def saludar():
    print("Hola desde la UTE")
saludar()

print("Funciones con parametros")
def saludar_nombre(nombre):
    print(f"Hola {nombre}, Que tal")
saludar_nombre("Juan")
saludar_nombre("Edison")

print("Funcion que devuelve valor return")
def sumar(a, b):
    return a + b
resultado = sumar(5, 3)

print("fuincion por posicion y por nombre")
def saludar_edad(nombre, edad, ciudad):
    print(f"Señor(a) {nombre}, tienes {edad} años y vive en {ciudad}")
saludar_edad("Juan", 25, "Guayaquil")
saludar_edad("Edison", 28, "Quito")
saludar_edad(edad=40, nombre="Maria", ciudad="Guayaquil")

print("funcion con valores de parametros y por defecto")
def saludo_valores(nombre, saludo="Hola", puntuacion="!"):
    print(saludo, nombre, puntuacion)  
saludo_valores("Edison", "Buenos dias, ")
saludo_valores("Juan", puntuacion="....")
saludo_valores("Carlos", "Buenas noches")

print("Fucnion con parametros posicionales")
def sum_todos(*args):
    print(f"Parametros recibidos {args}")
    return sum(args)
print(sum_todos(1, 2, 3))
print(sum_todos(1, 2, 3, 4, 5, 6, 7))
print(sum_todos(10, 20, 30))

print("Fucnion parametros combinados con posicionales")
def mostrar_info(titulo,*datos):
    print(f"Parametros recibidos{datos} {titulo}")
    print(titulo)
    for dato in datos:
        print(f"- {dato}")
mostrar_info("frutas","naranja","pera","manzana")

print("Fucnion parametros combinacion con todos los tipos")
def configurar(host, *puertos, debug=False, **opciones):
    print("Configuracion")
    print(f"Host: {host}")
    print(f"Puertos: {puertos}")
    print(f"Debug: {debug}")
    print(f"Opciones: {opciones}")
configurar("localhost", 80, 443,8080, debug=True, ssl=True, timeout=30)

print("Devolver multiples valores")
def minmax(numeros):
    return min(numeros), max(numeros)
minimo, maximo= minmax([3,23,45654,3,2,3,45])
print("minimo:", minimo, "maximo", maximo)
_, maximo= minmax([3,23,4,5,654,45])
print("maximo", maximo)
minimo, _= minmax([3,23,4,5,65,4,45])
print("minimo", minimo)

print("Devolver diccionario en el caso de muchos valores")
def analizar(numeros):
    total=sum(numeros)
    n=len(numeros)
    return {
        "total":total,
        "media":total/n if n>0 else 0,
        "minimo": min(numeros) if numeros else None,
        "maximo": max(numeros) if numeros else None,
        "count": n,
    }
datos = [12, 334, 2, 4, 4453, 3, 2, 3]
stas = analizar(datos)
print(f"Total: {stas['total']}")
print(f"Media: {stas['media']}")
print(f"Rango: {stas['minimo']} - {stas['maximo']}")

print("Funciones lambda")
def doble(numero):
    return numero*2
duplicar=lambda x: x*2
print(doble(2))
print(duplicar(3))
suma = lambda a,b: a+b
print(suma(4,5))

