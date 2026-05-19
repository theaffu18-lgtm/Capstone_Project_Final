import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AdminDashboard() {

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalAuthors: 0,
    totalAdmins: 0
  })

  const getStats = async () => {

    try {

      const res = await axios.get(
        `http://localhost:4000/admin-api/stats`
      )
      console.log(res.data)

     setStats({
  totalUsers: res.data.totalUsers,
  totalAuthors: res.data.totalAuthors,
  totalAdmins: res.data.totalAdmins
})

    } catch (error) {

      console.log(error)

    }

  }

  useEffect(() => {

    getStats()

  }, [])

  return (

    <div className="p-5">

      <h1 className="text-3xl font-bold mb-5">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-5">

        <div className="bg-blue-200 p-5 rounded">
          <h2 className="text-xl font-bold">Users</h2>
          <p className="text-3xl">{stats.totalUsers}</p>
        </div>

        <div className="bg-green-200 p-5 rounded">
          <h2 className="text-xl font-bold">Authors</h2>
          <p className="text-3xl">{stats.totalAuthors}</p>
        </div>

        <div className="bg-red-200 p-5 rounded">
          <h2 className="text-xl font-bold">Admins</h2>
          <p className="text-3xl">{stats.totalAdmins}</p>
        </div>

      </div>

    </div>

  )

}

export default AdminDashboard