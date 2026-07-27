print("Estados de orden de produccion")
estado = input("Estado (pendiente/en_proceso/completada/cancelada): ")
match estado:
    case "pendiente":
        print("Orden pendiente de asignacion a linea")
    case "en_proceso":
        print("Produccion en curso...")
    case "completada":
        print("Orden finalizada, pasar a control de calidad")
    case "cancelada":
        print("Orden cancelada")
    case _:
        print(f"Estado {estado} no valido")

print("Match - tipo de producto por codigo")
codigo = int(input("Ingrese codigo de producto (1-4): "))
match codigo:
    case n if n < 1:
        print(f"{n} no es un codigo valido")
    case 1:
        print("Categoria: Pernos y Tuercas")
    case n if n == 2:
        print("Categoria: Engranajes")
    case n if n == 3:
        print("Categoria: Ejes y Rodamientos")
    case n:
        print(f"Categoria {n}: Producto personalizado")
