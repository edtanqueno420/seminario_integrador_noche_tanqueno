print("Ciclo for en produccion")
print("for basico - estaciones de trabajo")

for i in range(1, 6):
    print(f"Estacion {i}")

lineas = ["Corte", "Plegado", "Soldadura", "Pintura", "Empaque"]
for linea in lineas:
    print(f"Linea: {linea}")

print("Control de calidad - muestreo")
for i in range(1, 10):
    if i == 3:
        continue
    if i == 7:
        break
    print(f"Pieza #{i} inspeccionada")
else:
    print("Muestreo completado")

print("for con range step - cada 2 estaciones")
for i in range(1, 10, 2):
    print(f"Estacion {i}")

print("for con range regresivo - cuenta regresiva produccion")
for i in range(10, 0, -1):
    print(f"Faltan {i} segundos para iniciar")

print("for con range enumerate")
maquinas = ["Prensa A", "Torno B", "Fresadora C", "Taladro D"]
for indice, maquina in enumerate(maquinas):
    print(f"Maquina {indice}: {maquina}")

print("for con zip")
rendimientos = [95.5, 88.3, 92.1, 97.8]
for maquina, rendimiento in zip(maquinas, rendimientos):
    print(f"{maquina}: {rendimiento}%")

print("For anidados - matriz de produccion")
for i in range(1, 4):
    for x in range(1, 4):
        print(f"Lote {i}, Producto {x}")

cantidad = int(input("Ingrese cantidad de piezas a inspeccionar: "))
suma = 0
for i in range(1, cantidad + 1):
    medida = float(input(f"Medida pieza {i} (mm): "))
    suma += medida
promedio = suma / cantidad
print("Promedio de medidas:", promedio)
if promedio >= 9.5 and promedio <= 10.5:
    print("Lote dentro de tolerancia - APROBADO")
else:
    print("Lote fuera de tolerancia - RECHAZADO")
