print("Diccionario")
print("Crear Diccionarios")
vacio={}
personas={"nombre": "Edison", "edad": 26, "ciudad": "Quito"}
config=dict(host="localhost", puerto=5432)

#acceso
print(personas["nombre"])

#modificar
personas["nombre"]="Jose"
print(personas)
del persona["edad"]
print(personas)

#verificar existencia
print("nombre" in personas)
print("ciudad" in personas)

#metodos escenciales
print(personas.keys())
print(personas.values())
print(personas.items())

#iterar
for clave, valor in personas.items():
    print(f"clave: {clave}, valor: {valor}")