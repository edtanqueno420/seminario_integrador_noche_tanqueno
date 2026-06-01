print("Match - case")
comando=input("Comando iniciar/parar/reiniciar")
match comando:
    case "iniciar":
        print("Sistema Iniciando......")
    case "parar":
        print("Sistema Deteniendose......")
    case "reiniciar":
        print("Sistema Reiniciando......")
    case _:
        print("Comando {comando} no valido")

print("match - con condiciones")
numero=int(input("Incluya un numero"))
match numero:
    case n if n<0:
        print(f"{n} es negativo")
    case "0":
        print("Es cero")
    case n if n%2==0:
        print(f"el numero {n} es positivo y par")
    case n:
        print(f"El numero {n} es positivo e impar")


        