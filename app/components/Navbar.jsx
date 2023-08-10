import Image from 'next/image'
import Link from 'next/link'
import Logo from './dojo-logo.png'

function Navbar() {
  return (
    <nav>
    <Image src={Logo} alt="logo" width={70} placeholder='blur' />
    <h1>Helpdesk</h1>
    <Link href="/">Home</Link>
    <Link href="/tickets">Tickets</Link>
    </nav>
  )
}

export default Navbar