import { useState, useEffect } from 'react'
import '../src/App.scss'
const url = 'https://api.github.com/users'

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(url)
        const responce = await data.json()
        setUsers(responce)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='main_container'>
      <h2>GitHub Authenticated Users:</h2>
      <div className='container'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url, followers_url } = user
          return (
            <div className='user' key={id}>
              <img src={avatar_url} alt={login} />
              <div className='details'>
                <h4>{login.toUpperCase()}</h4>
                <a href={html_url}>GitHub</a>
                <a href={followers_url}>Followers</a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
