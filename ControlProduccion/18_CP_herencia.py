# herencia.py

class Empleado:

    def __init__(self, nombre, salario):
        self.nombre = nombre
        self.salario = salario

    def trabajar(self):
        return f"{self.nombre} está trabajando"

    def __str__(self):
        return f"{self.nombre} - ${self.salario}"


class Operario(Empleado):

    def __init__(self, nombre, salario, maquina):
        super().__init__(nombre, salario)
        self.maquina = maquina

    def trabajar(self):
        return f"{self.nombre} opera la máquina {self.maquina}"


class Supervisor(Empleado):

    def __init__(self, nombre, salario, area):
        super().__init__(nombre, salario)
        self.area = area

    def trabajar(self):
        return f"{self.nombre} supervisa el área {self.area}"


operario = Operario("Juan", 900, "MC-01")
supervisor = Supervisor("Carlos", 1500, "Producción")

print(operario.trabajar())
print(supervisor.trabajar())

print(isinstance(operario, Empleado))
print(isinstance(supervisor, Empleado))