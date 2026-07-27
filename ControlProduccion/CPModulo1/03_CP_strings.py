cadena_produccion = "Orden", "De", "Produccion", "Nro", "001"
print(cadena_produccion)
print("Orden", "De", "Produccion", "Nro", "001")
print("Orden", "De", "Produccion", "Nro", "001", sep=" - ")
print("Lote", "A", "Lote", "B", "Lote", "C", sep=" - ")
print("Lote", "A", "Lote", "B", "Lote", "C", end="")
print("Lote", "A", "Lote", "B", "Lote", "C", sep=" - ")
print("Lote", "A", "Lote", "B", "Lote", "C", end=" | ")
print("Lote", "A", "Lote", "B", "Lote", "C", end=" | ")

producto = "Perno M8"
cantidad = 1500
print(producto, cantidad)
info_produccion = f"Producto: {producto}, Cantidad: {cantidad}"
print(info_produccion)
print(f"Producto: {producto}, Cantidad: {cantidad}")
print(f"Doble de cantidad: {cantidad} es {cantidad * 2}")
print(f"{'Prensa #1':>15}")
pi = 3.14159
print(f"{pi:.2f}")
print(f"{10000000:,}")
