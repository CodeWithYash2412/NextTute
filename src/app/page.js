'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const router = useRouter()
  return (
    <div>
      <h1>this is page 1</h1>
      <h2> <Link href="/about"> second page </Link> </h2>
      <h2> <Link href="/blog/522"> dynamic routing </Link> </h2>


      <p>Routing can be done bothway by using Link and useRouter</p>

      <button onClick={() => router.push('/about')}> second page </button>
    </div>
  )
}

export default page