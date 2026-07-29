print("Ciclos while")

contador=1
while contador<=5:
    print(contador)
    contador+=1

dato=""
while dato!="salir":
    dato=input("Escriba algo (o 'salir' para terminar): ")
    print("escribiste:", dato)

cantidad=int(input("Cuantos productos compro: "))
total=0
contador=1
while contador<=cantidad:
    precio = float(input("Precio del producto: {contador} "))
    total += precio
    contador += 1
print("El total es:", total)
if total>=100:
    print("Aplica Descuento")
else:
    print("No aplica Descuento")