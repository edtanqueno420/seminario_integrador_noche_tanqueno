from types import NoneType

STOCK_MAXIMO = 500
nombre_producto = "Perno Hexagonal M8"
cantidad = 1500
costo_unitario = 0.45
en_produccion = True
lote_actual = None

print(nombre_producto, "tipo", type(nombre_producto))
print(cantidad, "tipo", type(cantidad))
print(costo_unitario, "tipo", type(costo_unitario))
print(en_produccion, "tipo", type(en_produccion))
print(lote_actual, "tipo", type(lote_actual))

codigo_pieza: str = "PN-M8-HEX"
unidades_producidas: int = 1500
peso_unitario: float = 0.025
inspeccion_ok: bool = True
defecto: NoneType = None

print(codigo_pieza, "tipo", type(codigo_pieza))
print(unidades_producidas, "tipo", type(unidades_producidas))
print(peso_unitario, "tipo", type(peso_unitario))
print(inspeccion_ok, "tipo", type(inspeccion_ok))
print(defecto, "tipo", type(defecto))
