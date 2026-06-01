print("Control de inventario con listas")
print("Crear lista de productos")

vacia = []
print(vacia)

codigos = [101, 102, 103, 104, 105]
print(codigos)

productos = ["Perno M8", "Tuerca M10", "Arandela"]
print(productos)

mixta = [101, "Perno M8", 0.45, True]
print(mixta)

anidada = [[101, 102, 103], [201, 202, 203]]
print(anidada)

print("Acceso a elementos del inventario")
print(productos[1])
print(productos[-1])
print(productos[1:3])
print(productos[::-1])

print("CRUD de almacen")
materiales = ["Acero", "Aluminio", "Cobre"]
print(materiales)

materiales.insert(1, "Hierro")
print(materiales)
materiales.append("Plastico")
print(materiales)
materiales.extend(["Bronce", "Titanio"])

materiales[0] = "Acero Inoxidable"
print(materiales)

materiales.remove("Acero Inoxidable")
print(materiales)
eliminado = materiales.pop()
print(materiales)
print("Material eliminado:", eliminado)
eliminado = materiales.pop(2)
print(materiales)
del materiales[0]
print(materiales)

print("Buscar materiales en almacen")
print("Bronce" in materiales)
print(materiales.index("Bronce"))
print(materiales.count("Bronce"))

print("Ordenar inventario")
stock_desordenado = [30, 200, 95, 150, 45, 10]
print(stock_desordenado)

stock_desordenado.sort()
print(stock_desordenado)

stock_desordenado.sort(reverse=True)
print(stock_desordenado)

ordenada = sorted(stock_desordenado)
print(ordenada)
print(stock_desordenado)
