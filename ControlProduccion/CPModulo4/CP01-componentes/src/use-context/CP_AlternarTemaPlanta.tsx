import { useTheme } from '../context/CP_ContextoTemaPlanta'

export default function CP_AlternarTemaPlanta() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '8px 16px',
        borderRadius: 20,
        border: '1px solid #d1d5db',
        background: theme === 'dark' ? '#1f2937' : '#f9fafb',
        color:      theme === 'dark' ? '#f9fafb' : '#1f2937',
        cursor: 'pointer',
        fontWeight: 500,
        fontSize: 14,
      }}
    >
      {theme === 'light' ? 'Modo Noche' : 'Modo Día'}
    </button>
  )
}
