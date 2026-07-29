print("Monitoreo de produccion")

contador = 1
while contador <= 5:
    print(f"Lote #{contador} procesado")
    contador += 1

dato = ""
while dato != "salir":
    dato = input("Ingrese codigo de producto (o 'salir' para terminar): ")
    print("Producto ingresado:", dato)

cantidad = int(input("Cuantas piejas produjo hoy: "))
total = 0
contador = 1
while contador <= cantidad:
    peso = float(input(f"Peso de pieza #{contador} (kg): "))
    total += peso
    contador += 1
print("El peso total producido es:", total, "kg")
if total >= 100:
    print("Meta de produccion ALCANZADA")
else:
    print("Meta de produccion NO ALCANZADA")
