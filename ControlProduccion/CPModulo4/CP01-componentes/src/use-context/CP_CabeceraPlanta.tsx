import { useTheme } from '../context/CP_ContextoTemaPlanta'
import { useAuth }  from '../context/CP_ContextoAuthPlanta'
import CP_AlternarTemaPlanta  from './CP_AlternarTemaPlanta'
import CP_InsigniaOperario    from './CP_InsigniaOperario'

export default function CP_CabeceraPlanta() {
  const { theme }        = useTheme()
  const { state: auth }  = useAuth()

  return (
    <header style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '12px 24px',
      background: theme === 'dark' ? '#111827' : '#fff',
      borderBottom: '1px solid #e5e7eb',
    }}>
      <div>
        <h1 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>
          Control de Producción
        </h1>
        {auth.user && (
          <p style={{ margin: 0, fontSize: 12, color: '#9ca3af' }}>
            Panel de {auth.user.role}
          </p>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <CP_AlternarTemaPlanta />
        <CP_InsigniaOperario />
      </div>
    </header>
  )
}
