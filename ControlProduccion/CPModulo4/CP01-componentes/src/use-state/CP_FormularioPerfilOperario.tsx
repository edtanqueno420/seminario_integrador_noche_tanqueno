import { useState } from 'react'

interface PerfilOperario {
  name: string
  email: string
  badge: number
}

export default function CP_FormularioPerfilOperario() {
  const [profile, setProfile] = useState<PerfilOperario>({
    name: '',
    email: '',
    badge: 0,
  })

  function handleChange(field: keyof PerfilOperario, value: string | number) {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 320 }}>
      <input
        placeholder="Nombre del operario"
        value={profile.name}
        onChange={(e) => handleChange('name', e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Email"
        type="email"
        value={profile.email}
        onChange={(e) => handleChange('email', e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Número de gafete"
        type="number"
        value={profile.badge}
        onChange={(e) => handleChange('badge', Number(e.target.value))}
        style={inputStyle}
      />

      <div style={{ marginTop: 8, padding: 12, background: '#f5f5f5', borderRadius: 6 }}>
        <p style={{ margin: 0, fontSize: 13 }}>
          <strong>{profile.name || '—'}</strong> · {profile.email || '—'} · Gafete: {profile.badge || '—'}
        </p>
      </div>
    </form>
  )
}

const inputStyle = {
  padding: '8px 12px',
  border: '1px solid #ddd',
  borderRadius: 6,
  fontSize: 14,
}
