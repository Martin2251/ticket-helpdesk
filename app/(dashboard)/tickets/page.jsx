import React from 'react'
import { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../loading'

export const metadata = {
  title: 'Helpdesk | Tickets',
  
}

const Tickets = () => {
  return (
    <main>
        <nav>
            <div>
                <h2>Tickets</h2>
                <p><small>Currently Open tickets</small></p>
            </div>
        </nav>
        <Suspense fallback={<Loading  />}>
        <TicketList  />
        </Suspense>

    </main>
  )
}

export default Tickets