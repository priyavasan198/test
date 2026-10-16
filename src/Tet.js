import {React,useState} from 'react'
import axios from 'axios'
function Tet() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username === 'gmailTest' && password === 'admin123') {
      axios.get('https://dummyjson.com/c/e2d7-5698-4370-bbf7')
        .then((response) => {
          alert('Login Successful!')
        })

    }
     else {
      alert('Login Failed!')
    }
  }

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <br />
        <div>
          Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
export default Tet
