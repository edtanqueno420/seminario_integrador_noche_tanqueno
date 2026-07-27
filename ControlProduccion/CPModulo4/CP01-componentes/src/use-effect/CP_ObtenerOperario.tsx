import { useState, useEffect } from 'react'

interface Maquina {
  id:       number
  name:     string
  modelo:    string
  estado:   string
  planta: {
    nombre: string
  }
}

export default function CP_ObtenerOperario() {
  const [userId,  setUserId]  = useState(1)
  const [user,    setUser]    = useState<Maquina | null>(null)
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchMaquina() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        )
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`)

        const data: Maquina = await res.json()

        if (!cancelled) setUser(data)
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Error desconocido')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchMaquina()

    return () => { cancelled = true }
  }, [userId])

  return (
    <div style={{ maxWidth: 360 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {[1, 2, 3].map((id) => (
          <button
            key={id}
            onClick={() => setUserId(id)}
            style={{
              padding: '6px 14px',
              borderRadius: 6,
              border: '1px solid #d1d5db',
              background: userId === id ? '#27ae60' : '#fff',
              color:      userId === id ? '#fff'    : '#333',
              cursor: 'pointer',
              fontWeight: userId === id ? 600 : 400,
            }}
          >
            Máquina {id}
          </button>
        ))}
      </div>

      {loading && (
        <p style={{ color: '#6b7280', fontSize: 14 }}>Cargando datos de planta...</p>
      )}
      {error && (
        <p style={{ color: '#991b1b', fontSize: 14 }}>Error: {error}</p>
      )}
      {user && !loading && (
        <div style={{ padding: 14, border: '1px solid #e5e7eb', borderRadius: 8 }}>
          <p style={{ margin: '0 0 4px', fontWeight: 600 }}>{user.name}</p>
          <p style={{ margin: '0 0 4px', fontSize: 13, color: '#6b7280' }}>
            Modelo: {user.modelo}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            {user.estado} — {user.planta.nombre}
          </p>
        </div>
      )}
    </div>
  )
}
