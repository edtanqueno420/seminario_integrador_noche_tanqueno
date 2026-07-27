import CP_ContadorDigitalProduccion from './use-state/CP_ContadorDigitalProduccion'
import CP_FormularioPerfilOperario from './use-state/CP_FormularioPerfilOperario'
import CP_GestorTareasProduccion from './use-state/CP_GestorTareasProduccion'
import CP_TituloDocumentoProduccion from './use-effect/CP_TituloDocumentoProduccion'
import CP_ObtenerOperario from './use-effect/CP_ObtenerOperario'
import CP_FormularioEnfoqueAutoProduccion from './use-ref/CP_FormularioEnfoqueAutoProduccion'
import CP_EditorLineaProduccion from './use-ref/CP_EditorLineaProduccion'
import CP_ContadorBasicoProduccion from './use-reducer/CP_ContadorBasicoProduccion'
import CP_FormularioRegistroProduccion from './use-reducer/CP_FormularioRegistroProduccion'
import CP_FormularioAccesoPlanta from './use-context/CP_FormularioAccesoPlanta'
import CP_InsigniaOperario from './use-context/CP_InsigniaOperario'
import CP_CabeceraPlanta from './use-context/CP_CabeceraPlanta'
import { useAuth } from './context/CP_ContextoAuthPlanta'
import { CP_TemaProvider } from './context/CP_ContextoTemaPlanta'
import CP_CribaProduccion from './use-memo/CP_CribaProduccion'
import CP_CatalogoFiltradoProduccion from './use-memo/CP_CatalogoFiltradoProduccion'
import CP_ListaOptimizadaProduccion from './use-callback/CP_ListaOptimizadaProduccion'
import CP_BusquedaConSCADA from './use-callback/CP_BusquedaConSCADA'
import CP_SelectorTemaPlanta from './customhooks/CP_SelectorTemaPlanta'

import Mp_UserGreeting from './ejemplos_mp/components/mp_UserGreeting'
import Mp_WelcomeBanner from './ejemplos_mp/components/mp_WelcomeBanner'
import Mp_DigitalCounter from './ejemplos_mp/use-state/mp_DigitalCounter'
import Mp_UserProfileForm from './ejemplos_mp/use-state/mp_UserProfileForm'
import Mp_TaskManager from './ejemplos_mp/use-state/mp_TaskManager'
import Mp_DocumentTitle from './ejemplos_mp/use-effect/mp_DocumentTitle'
import Mp_FetchUser from './ejemplos_mp/use-effect/mp_FetchUser'
import Mp_AutoFocusForm from './ejemplos_mp/use-ref/mp_AutoFocusForm'
import Mp_InlineEditor from './ejemplos_mp/use-ref/mp_InlineEditor'
import Mp_BasicCounter from './ejemplos_mp/use-reducer/mp_BasicCounter'
import Mp_RegistrationForm from './ejemplos_mp/use-reducer/mp_RegistrationForm'
import { AuthProvider as MpAuthProvider } from './ejemplos_mp/use-context/mp_AuthContext'
import Mp_UserBadge from './ejemplos_mp/use-context/mp_UserBadge'
import Mp_LoginForm from './ejemplos_mp/use-context/mp_LoginForm'
import Mp_AppHeader from './ejemplos_mp/use-context/mp_AppHeader'
import Mp_PrimeSieve from './ejemplos_mp/use-memo/mp_PrimeSieve'
import Mp_FilteredCatalog from './ejemplos_mp/use-memo/mp_FilteredCatalog'
import Mp_MemoizedList from './ejemplos_mp/use-callback/mp_MemoizedList'
import Mp_SearchWithFetch from './ejemplos_mp/use-callback/mp_SearchWithFetch'
import Mp_ThemeSelector from './ejemplos_mp/customhooks/mp_ThemeSelector'
import { EjemploUso as Mp_UseLocalStorage } from './ejemplos_mp/hooks/mp_useLocalStorage'

const PASO: number = 92


export default function CP_App() {
  const { state } = useAuth()
  const content =
    PASO === 1 ? <Mp_UserGreeting name="Operario" role="supervisor" /> :
    PASO === 2 ? <Mp_WelcomeBanner title="Control de Produccion" subtitle="Panel principal" /> :

    PASO === 20 ? <CP_ContadorDigitalProduccion initialValue={10} step={3} label="Unidades por lote" /> :
    PASO === 21 ? <CP_FormularioPerfilOperario /> :
    PASO === 22 ? <CP_GestorTareasProduccion /> :
    PASO === 23 ? <Mp_DigitalCounter /> :
    PASO === 24 ? <Mp_UserProfileForm /> :
    PASO === 25 ? <Mp_TaskManager /> :

    PASO === 30 ? <CP_TituloDocumentoProduccion /> :
    PASO === 31 ? <CP_ObtenerOperario /> :
    PASO === 32 ? <Mp_DocumentTitle /> :
    PASO === 33 ? <Mp_FetchUser /> :

    PASO === 40 ? <CP_FormularioEnfoqueAutoProduccion /> :
    PASO === 41 ? <CP_EditorLineaProduccion /> :
    PASO === 42 ? <Mp_AutoFocusForm /> :
    PASO === 43 ? <Mp_InlineEditor /> :

    PASO === 50 ? <CP_ContadorBasicoProduccion /> :
    PASO === 51 ? <CP_FormularioRegistroProduccion /> :
    PASO === 52 ? <Mp_BasicCounter /> :
    PASO === 53 ? <Mp_RegistrationForm /> :

    PASO === 60 ? <CP_TemaProvider><CP_InsigniaOperario /></CP_TemaProvider> :
    PASO === 61 ? <CP_InsigniaOperario /> :
    PASO === 62 ? <CP_FormularioAccesoPlanta /> :
    PASO === 63 ? <CP_CabeceraPlanta /> :
    PASO === 64 ? <MpAuthProvider><Mp_UserBadge /></MpAuthProvider> :
    PASO === 65 ? <MpAuthProvider><Mp_LoginForm /></MpAuthProvider> :
    PASO === 66 ? <MpAuthProvider><Mp_AppHeader /></MpAuthProvider> :

    PASO === 70 ? <CP_CribaProduccion /> :
    PASO === 71 ? <CP_CatalogoFiltradoProduccion /> :
    PASO === 72 ? <Mp_PrimeSieve /> :
    PASO === 73 ? <Mp_FilteredCatalog /> :

    PASO === 80 ? <CP_ListaOptimizadaProduccion /> :
    PASO === 81 ? <CP_BusquedaConSCADA /> :
    PASO === 82 ? <Mp_MemoizedList /> :
    PASO === 83 ? <Mp_SearchWithFetch /> :

    PASO === 90 ? <CP_SelectorTemaPlanta /> :
    PASO === 91 ? <Mp_ThemeSelector /> :
    PASO === 92 ? <Mp_UseLocalStorage /> :

    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {PASO === 66 ? content : (
        <>
          {state.user && (
            <p style={{ marginBottom: 16, fontSize: 14, color: '#6b7280' }}>
              Sesion activa: <strong>{state.user.name}</strong>
            </p>
          )}
          {content}
        </>
      )}
    </main>
  )
}
