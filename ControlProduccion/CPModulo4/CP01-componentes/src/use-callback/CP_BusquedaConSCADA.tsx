import { useState, useEffect, useCallback } from 'react'

interface Post {
  id:    number
  title: string
  body:  string
}

export default function CP_BusquedaConSCADA() {
  const [query,   setQuery]   = useState('')
  const [posts,   setPosts]   = useState<Post[]>([])
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState<string | null>(null)

  const fetchPosts = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const url = query.trim()
        ? `https://jsonplaceholder.typicode.com/posts?_limit=5&title_like=${encodeURIComponent(query)}`
        : 'https://jsonplaceholder.typicode.com/posts?_limit=5'
      const res  = await fetch(url)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data: Post[] = await res.json()
      setPosts(data)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Error desconocido')
    } finally {
      setLoading(false)
    }
  }, [query])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 540, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Búsqueda con SCADA</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        <code>useCallback</code> estabiliza la función de fetch en las deps de <code>useEffect</code>.
      </p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Buscar en datos SCADA..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{
            flex:    1,
            padding: '8px 12px',
            border:  '1px solid #ccc',
            borderRadius: 8,
            fontSize: 14,
          }}
        />
        <button
          onClick={fetchPosts}
          style={{
            padding:      '8px 16px',
            borderRadius: 8,
            border:       '1px solid #27ae60',
            background:   '#27ae60',
            color:        'white',
            cursor:       'pointer',
            fontSize:     14,
          }}
        >
          Buscar
        </button>
      </div>

      {error && (
        <div style={{
          padding:      12,
          background:   '#fef2f2',
          border:       '1px solid #fca5a5',
          borderRadius: 8,
          color:        '#dc2626',
          fontSize:     14,
          marginBottom: 16,
        }}>
          {error}
        </div>
      )}

      {loading ? (
        <div style={{ textAlign: 'center', padding: 32, color: '#aaa' }}>Cargando datos SCADA...</div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {posts.map(post => (
            <div key={post.id} style={{
              padding:      '12px 16px',
              background:   '#f9f9f9',
              borderRadius: 8,
              border:       '1px solid #eee',
            }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>
                {post.title}
              </div>
              <div style={{ fontSize: 13, color: '#666', lineHeight: 1.5 }}>
                {post.body.slice(0, 100)}…
              </div>
            </div>
          ))}
          {posts.length === 0 && !loading && (
            <p style={{ textAlign: 'center', color: '#aaa' }}>Sin resultados.</p>
          )}
        </div>
      )}
    </div>
  )
}
