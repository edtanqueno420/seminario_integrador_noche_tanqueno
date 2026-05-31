print("Diccionario - Ficha de producto")
print("Crear diccionarios")

vacio = {}
producto = {"codigo": "PN-M8-HEX", "nombre": "Perno Hexagonal M8", "stock": 1500}
config = dict(linea="Corte", turno="Matutino", velocidad=120)

print(producto["codigo"])

producto["nombre"] = "Perno Hexagonal M8 Grado 8"
print(producto)
del producto["stock"]
print(producto)

print("codigo" in producto)
print("stock" in producto)

print(producto.keys())
print(producto.values())
print(producto.items())

for clave, valor in producto.items():
    print(f"{clave}: {valor}")
