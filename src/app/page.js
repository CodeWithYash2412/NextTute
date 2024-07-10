'use client'

import React, { useState } from 'react'

const page = () => {
  const [shows, setShows] = useState(true)

  const show = () => {
    setShows(!shows)
  }

  return (
    <div>
      <h1> My Name is Yash </h1>
      {shows ? <h2> I Am Web Developer </h2> : <h2>Hidden Data</h2>}
      <button onClick={() => alert("Clicked")}> Click </button>
      <button onClick={() => show()}> Show / Hide </button>
    </div>
  )
}

export default page