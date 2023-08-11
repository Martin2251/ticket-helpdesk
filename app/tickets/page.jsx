import React from 'react'
import TicketList from './TicketList'

const Tickets = () => {
  return (
    <main>
        <nav>
            <div>
                <h2>Tickets</h2>
                <p><small>Currently Open tickets</small></p>
            </div>
        </nav>
        <TicketList  />

    </main>
  )
}

export default Tickets