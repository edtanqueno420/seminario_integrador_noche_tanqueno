import { useAlmacenamientoLocal } from '../hooks/CP_useAlmacenamientoLocal'

export default function CP_SelectorTemaPlanta() {
  const [theme, setTheme] = useAlmacenamientoLocal<'light' | 'dark'>('tema-planta', 'light')

  return (
    <div style={{ display: 'flex', gap: 8 }}>
      {(['light', 'dark'] as const).map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          style={{
            padding: '6px 14px', borderRadius: 6,
            border: '1px solid #d1d5db',
            background: theme === t ? '#27ae60' : '#fff',
            color:      theme === t ? '#fff'    : '#333',
            cursor: 'pointer',
          }}
        >
          {t === 'light' ? 'Modo Día' : 'Modo Noche'}
        </button>
      ))}
    </div>
  )
}
