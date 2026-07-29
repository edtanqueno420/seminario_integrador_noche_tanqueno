import { useRef, useEffect } from 'react'

export default function CP_FormularioEnfoqueAutoProduccion() {
  const nameRef  = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    nameRef.current?.focus()
  }, [])

  function handleNameKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault()
      emailRef.current?.focus()
    }
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 300 }}>
      <input
        ref={nameRef}
        placeholder="Número de serie"
        onKeyDown={handleNameKeyDown}
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <input
        ref={emailRef}
        type="email"
        placeholder="Operario responsable"
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <button
        type="submit"
        style={{ padding: '8px', background: '#27ae60', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
      >
        Registrar
      </button>
    </form>
  )
}
