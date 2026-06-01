print("Control de produccion")
print("If simple")

stock = 3
if stock > 0:
    print("El producto tiene stock disponible")
print("if else - dos caminos")
stock_minimo = 25
if stock >= stock_minimo:
    print(" Stock suficiente, no es necesario producir")
else:
    print("Stock por debajo del minimo, producir urgente")

print("if multiples condiciones")
temperatura_horno = 25
if temperatura_horno < 100:
    print("Horno en precalentamiento")
elif temperatura_horno > 250:
    print("Horno sobrecalentado")
else:
    print("Temperatura operativa normal")

print("if condiciones anidadas")
maquina_encendida = True
calibracion_ok = False
if maquina_encendida:
    if calibracion_ok:
        print("Maquina lista para producir")
    else:
        print("Calibracion pendiente")
else:
    print("Maquina apagada")

print("if con operadores logicos")
material_listo = True
personal_listo = True
if material_listo and personal_listo:
    print("Produccion puede iniciar")

es_urgente = False
tiene_prioridad = True
if es_urgente or tiene_prioridad:
    print("Orden entra a produccion inmediata")

bloqueado = False
if not bloqueado:
    print("Linea de produccion habilitada")
