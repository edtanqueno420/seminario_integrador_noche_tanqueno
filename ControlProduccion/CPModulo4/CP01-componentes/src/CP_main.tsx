import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './CP_index.css'
import CP_App from './CP_App.tsx'
import { CP_TemaProvider } from './context/CP_ContextoTemaPlanta.tsx'
import { CP_AuthProvider }  from './context/CP_ContextoAuthPlanta.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CP_TemaProvider>
      <CP_AuthProvider>
        <CP_App />
      </CP_AuthProvider>
    </CP_TemaProvider>
  </StrictMode>,
)
