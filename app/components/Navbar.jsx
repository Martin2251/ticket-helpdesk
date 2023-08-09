import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <nav><h1>Helpdesk</h1>
    <Link href="/">Home</Link>
    <Link href="/tickets">Tickets</Link>
    </nav>
  )
}

export default Navbar