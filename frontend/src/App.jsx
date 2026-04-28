import { useState } from 'react'

function App() {
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchHello = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/hello`)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const text = await res.text()
      setMessage(text)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 480, margin: '80px auto', textAlign: 'center' }}>
      <h1>React + Spring Boot</h1>
      <button onClick={fetchHello} disabled={loading} style={{ padding: '10px 24px', fontSize: 16, cursor: 'pointer' }}>
        {loading ? 'Loading…' : 'Call API'}
      </button>
      {message && <p style={{ color: 'green', marginTop: 24 }}>{message}</p>}
      {error && <p style={{ color: 'red', marginTop: 24 }}>Error: {error}</p>}
    </div>
  )
}

export default App
