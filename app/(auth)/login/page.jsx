import React from 'react'
import AuthForm from '../AuthForm'
import { Passero_One } from 'next/font/google'

const handleSubmit = async (e,email,password) => {
  e.preventDefaul ()

  console.log(email,password)
}
export default function Login() {
  return (
<main>
    <h2 className="text-center">Log In</h2>
<AuthForm  />

</main>
  )
}
