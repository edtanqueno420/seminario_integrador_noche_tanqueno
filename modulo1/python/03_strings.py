cadena_string = "Hola", "Desde", "La", "UTE"
print(cadena_string)
print("Hola", "Desde", "La", "UTE")
print("Hola", "Desde", "La", "UTE", sep=", ")
print("Uno", "Dos", "Tres", "4", sep=" - ")
print("Uno", "Dos", "Tres", "4", end="")
print("Uno", "Dos", "Tres", "4", sep=" - ")
print("Uno", "Dos", "Tres", "4", end=" | ")
print("Uno", "Dos", "Tres", "4", end=" | ")

nombre = "Edison"
edad = 28
print(nombre, edad)
nombre_edad=f"Nombre: {nombre}, {edad}"
print(nombre_edad)
print(f"Nombre: {nombre}, {edad}")
print(f"Doble de edad: {edad} es {edad*2}")
print(f"{'Maria':>10}") #Alineado a la derecha
pi = 3.14159
print(f"{pi:.2f}") #Formateo de float con 2 decimales
print(f"{10000000:,}") #Formateo de int con separador de miles
