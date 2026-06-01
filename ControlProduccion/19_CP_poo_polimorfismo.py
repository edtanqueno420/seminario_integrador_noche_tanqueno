# polimorfismo.py

class ProcesoProduccion:

    def ejecutar(self):
        raise NotImplementedError()


class Corte(ProcesoProduccion):

    def ejecutar(self):
        return "✂️ Cortando materia prima"


class Soldadura(ProcesoProduccion):

    def ejecutar(self):
        return "🔥 Soldando piezas"


class Pintura(ProcesoProduccion):

    def ejecutar(self):
        return "🎨 Pintando producto"


class Empaque(ProcesoProduccion):

    def ejecutar(self):
        return "📦 Empacando producto terminado"


def ejecutar_produccion(procesos):
    for proceso in procesos:
        print(proceso.ejecutar())


linea_produccion = [
    Corte(),
    Soldadura(),
    Pintura(),
    Empaque()
]

ejecutar_produccion(linea_produccion)