import { useEffect } from 'react'

export default function CP_TituloDocumentoProduccion() {
  useEffect(() => {
    document.title = 'Control de Producción - Planta Activa'
    return () => {
      document.title = 'Sistema de Producción'
    }
  }, [])

  return (
    <p style={{ fontSize: 14, color: '#6b7280' }}>
      El título de la pestaña cambió al Planta de Producción Activa.
    </p>
  )
}
