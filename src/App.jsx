import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { apiRequest } from './api/api'
import Toast from './components/Toast'

function App() {
  const [count, setCount] = useState(0)
  const [toast, setToast] = useState({ message: '', type: 'success' })
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])

  const showToast = (message, type = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast({ message: '', type }), 3000)
  }

  const fetchUser = async () => {
    try {
      const data = await apiRequest('http://localhost:4000/api/user/1', {}, showToast)
      setUser(data)
    } catch {}
  }

  const fetchUsers = async () => {
    try {
      const data = await apiRequest('http://localhost:4000/api/users', {}, showToast)
      setUsers(data)
    } catch {}
  }

  return (
    <>
      <Toast message={toast.message} type={toast.type} onClose={() => setToast({ message: '', type: toast.type })} />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={fetchUser} style={{ marginLeft: 8 }}>Fetch User</button>
        <button onClick={fetchUsers} style={{ marginLeft: 8 }}>Fetch Users</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        {user && <pre>User: {JSON.stringify(user, null, 2)}</pre>}
        {users.length > 0 && <pre>Users: {JSON.stringify(users, null, 2)}</pre>}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
