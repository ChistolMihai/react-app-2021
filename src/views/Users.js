import { Container } from '@material-ui/core'
import React, { useState, useEffect } from 'react'

export default function Users() {

  useEffect(() => {
    fetchUsers()
  }, [])

  const [users, setUser] = useState([])

  const fetchUsers = async () => {
    const data = await fetch('https://gorest.co.in/public-api/users');
    const users = await data.json()
    setUser(users.data)
  }
  return (
    <Container>
      {
        users.map((user, index) => (
          <div key={index}>
            <h2>{user.email}</h2>
          </div>
        ))
      }
    </Container>
  )
}
