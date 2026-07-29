import { useState, useMemo } from 'react'

interface Producto {
  id:       number
  name:     string
  category: string
  price:    number
  active:   boolean
  stock:    number
}

const CATALOGO: Producto[] = [
  { id:  1, name: 'Tornillo M8',         category: 'Ferretería', price:  0.15, active: true,  stock: 1500 },
  { id:  2, name: 'Tuerca hexagonal',    category: 'Ferretería', price:  0.12, active: true,  stock: 2000 },
  { id:  3, name: 'Arandela plana',      category: 'Ferretería', price:  0.05, active: false, stock:  0 },
  { id:  4, name: 'Retén de aceite',     category: 'Sellos',     price:  2.50, active: true,  stock: 350 },
  { id:  5, name: 'Correa de transmisión',category: 'Transmissiones',price:15.99,active:true, stock:  45 },
  { id:  6, name: 'Rodamiento 6205',     category: 'Rodamientos', price:  8.50, active: true,  stock: 120 },
  { id:  7, name: 'Engrane helicoidal', category: 'Transmisiones', price:22.00, active: false, stock:  0 },
  { id:  8, name: 'Filtro hidráulico',  category: 'Filtros',     price: 12.99, active: true,  stock:  85 },
  { id:  9, name: 'Válvula solenoide',  category: 'Válvulas',    price: 35.00, active: true,  stock:  30 },
  { id: 10, name: 'Sensor de temperatura',category:'Sensores',  price: 45.99, active: true,  stock:  15 },
]

type SortKey = 'name' | 'price' | 'stock'

export default function CP_CatalogoFiltradoProduccion() {
  const [search,    setSearch]    = useState('')
  const [onlyActive,setOnlyActive]= useState(true)
  const [category,  setCategory]  = useState('Todas')
  const [sortBy,    setSortBy]    = useState<SortKey>('name')

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return CATALOGO.filter(p =>
      (!onlyActive || p.active) &&
      (category === 'Todas' || p.category === category) &&
      (p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
    )
  }, [search, onlyActive, category])

  const sorted = useMemo(
    () => [...filtered].sort((a, b) =>
      sortBy === 'name'  ? a.name.localeCompare(b.name)  :
      sortBy === 'price' ? a.price - b.price              :
                           b.stock - a.stock
    ),
    [filtered, sortBy]
  )

  const categories = useMemo(
    () => ['Todas', ...new Set(CATALOGO.map(p => p.category))],
    []
  )

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 600, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Catálogo Filtrado de Producción</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        Dos <code>useMemo</code> encadenados: filtrar → ordenar.
      </p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Buscar pieza..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ flex: 1, minWidth: 140, padding: '6px 10px', border: '1px solid #ccc', borderRadius: 6 }}
        />
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 6 }}
        >
          {categories.map(c => <option key={c}>{c}</option>)}
        </select>
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value as SortKey)}
          style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 6 }}
        >
          <option value="name">A–Z</option>
          <option value="price">Precio ↑</option>
          <option value="stock">Stock ↓</option>
        </select>
        <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={onlyActive}
            onChange={e => setOnlyActive(e.target.checked)}
          />
          Solo activos
        </label>
      </div>

      <p style={{ fontSize: 13, color: '#888', marginBottom: 12 }}>
        {sorted.length} de {CATALOGO.length} piezas
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {sorted.map(p => (
          <div key={p.id} style={{
            display:        'flex',
            justifyContent: 'space-between',
            alignItems:     'center',
            padding:        '10px 14px',
            background:     p.active ? '#f9f9f9' : '#f0f0f0',
            borderRadius:   8,
            border:         '1px solid #e5e5e5',
            opacity:        p.active ? 1 : 0.6,
          }}>
            <div>
              <span style={{ fontWeight: 600, fontSize: 14 }}>{p.name}</span>
              <span style={{ marginLeft: 8, fontSize: 12, color: '#888' }}>{p.category}</span>
            </div>
            <div style={{ textAlign: 'right', fontSize: 13 }}>
              <div style={{ fontWeight: 700 }}>${p.price.toFixed(2)}</div>
              <div style={{ color: p.stock < 5 ? '#e00' : '#888' }}>
                Stock: {p.stock}
              </div>
            </div>
          </div>
        ))}
        {sorted.length === 0 && (
          <p style={{ textAlign: 'center', color: '#aaa', padding: 24 }}>
            Sin resultados.
          </p>
        )}
      </div>
    </div>
  )
}
