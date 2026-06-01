print("Manipulacion de Listas ")
print("Craer Lista")
vacia=[]
print(vacia)
numeros=[1,2,3,4,5]
print(numeros)
nombres=["Juan","Maria","Pedro"]
print(nombres)
mixta=[1,"Juan",2.5,True]
print(mixta)
anidada=[[1,2,3],[4,5,6]]
print(anidada)

print("Acceso a los elementos de una lista")
print(nombres[1])
print(nombres[-1])
print(nombres[1:3])
print(nombres[::-1])

print("CRud de una lista")
frutas=["manzana","banana","cereza"]
print(frutas)
#Agregar
frutas.insert(1, "pera")
print(frutas)
frutas.append("uva")
print(frutas)
frutas.extend(["kiwi", "mango"])
#modificar
frutas[0]="naranja"
print(frutas)
#eliminar elemntos
frutas.remove("naranja")
print(frutas)
eliminado=frutas.pop()
print(frutas)
print("Elemento eliminado:", eliminado)
eliminado=frutas.pop(2)
print(frutas)
del frutas[0]
print(frutas)

print("Buscar valores en los elementos de una Lista")
print("kiwi" in frutas)
print(frutas.index("kiwi"))
print(frutas.count("kiwi"))

print("Ordenar una Lista")
numeros_desordenados=[3,2,9,5,4,1]
print(numeros_desordenados)

numeros_desordenados.sort()
print(numeros_desordenados)

numeros_desordenados.sort(reverse=True)
print(numeros_desordenados)

ordenada=sorted(numeros_desordenados)
print(ordenada)
print(numeros_desordenados)