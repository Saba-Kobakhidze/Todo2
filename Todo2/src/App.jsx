import { useState, useEffect } from 'react'
import './App.css'
import Add from './components/Add'

function App() {
  const [user, setUser] = useState([])
  const jsonlink = ("https://jsonplaceholder.typicode.com/todos")

  useEffect (() => {
    fetch(jsonlink)
    .then((respone) => respone.json())
    .then((data) => setUser(data))
  }, [])

  const handleAddUser  = async () =>{
     await fetch (jsonlink , {
      method: 'Post',
    })
    .then ((respond) => respond.json)
    .then ((data) => {
      setUser((users) => [...users, data])
    }) 
  }
  const handleDeleteUser = async () => {
    fetch (jsonlink + `/${id}`, {
      method: 'delete',
    })
    .then ((respond) => respond.json)
  }

  return (
    <div className="App">
        <Add onAdd ={handleAddUser} />
    </div>
  )
}

export default App
