# orden_produccion.py

class OrdenProduccion:
    # Atributo de clase
    estado_defecto = "Pendiente"

    def __init__(self, codigo, producto, cantidad):
        self.codigo = codigo
        self.producto = producto
        self.cantidad = cantidad
        self.estado = OrdenProduccion.estado_defecto

    def iniciar(self):
        self.estado = "En Producción"
        print(f"Orden {self.codigo} iniciada.")

    def finalizar(self):
        self.estado = "Finalizada"
        print(f"Orden {self.codigo} finalizada.")

    def __str__(self):
        return f"OP-{self.codigo} | {self.producto} | {self.cantidad} unidades | {self.estado}"

    def __repr__(self):
        return (f"OrdenProduccion("
                f"codigo={self.codigo!r}, "
                f"producto={self.producto!r}, "
                f"cantidad={self.cantidad!r})")

# Uso
op1 = OrdenProduccion("001", "Mesa de madera", 100)
op2 = OrdenProduccion("002", "Silla metálica", 50)

print(op1)
op1.iniciar()
op1.finalizar()

print(op1)
print(op2)