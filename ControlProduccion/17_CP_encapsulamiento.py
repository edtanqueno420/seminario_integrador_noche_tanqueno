# encapsulamiento.py

class InventarioMateriaPrima:

    def __init__(self, material, stock_inicial):
        self.material = material
        self.__stock = stock_inicial
        self.__movimientos = []

    @property
    def stock(self):
        return self.__stock

    @property
    def movimientos(self):
        return list(self.__movimientos)

    def ingresar(self, cantidad):
        if cantidad <= 0:
            raise ValueError("Cantidad inválida")

        self.__stock += cantidad
        self.__registrar(f"Ingreso: +{cantidad}")

    def consumir(self, cantidad):
        if cantidad > self.__stock:
            raise ValueError("Stock insuficiente")

        self.__stock -= cantidad
        self.__registrar(f"Consumo: -{cantidad}")

    def __registrar(self, movimiento):
        self.__movimientos.append(movimiento)

    def __str__(self):
        return f"{self.material}: {self.__stock} unidades"


# Uso

acero = InventarioMateriaPrima("Acero", 1000)

acero.ingresar(500)
acero.consumir(300)

print(acero)
print("Stock actual:", acero.stock)

for mov in acero.movimientos:
    print(mov)