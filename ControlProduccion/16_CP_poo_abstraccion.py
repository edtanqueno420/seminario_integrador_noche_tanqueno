# abstraccion.py

from abc import ABC, abstractmethod

class Maquina(ABC):

    def __init__(self, codigo):
        self.codigo = codigo

    @abstractmethod
    def producir(self):
        pass

    @abstractmethod
    def mantenimiento(self):
        pass

    def estado(self):
        return f"Máquina {self.codigo} operativa"


class MaquinaCorte(Maquina):

    def producir(self):
        return "Realizando corte de material"

    def mantenimiento(self):
        return "Lubricación de cuchillas"


class MaquinaSoldadura(Maquina):

    def producir(self):
        return "Realizando soldadura"

    def mantenimiento(self):
        return "Revisión de electrodos"


maquinas = [
    MaquinaCorte("MC-01"),
    MaquinaSoldadura("MS-01")
]

for maquina in maquinas:
    print(maquina.estado())
    print(maquina.producir())
    print(maquina.mantenimiento())