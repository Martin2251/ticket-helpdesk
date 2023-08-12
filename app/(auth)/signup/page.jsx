
"use client"
import React from 'react'
import AuthForm from '../AuthForm'

export default function Signup() {

  const handleSubmit = async (e,email,password) => {
    e.preventDefaul ()
  
    console.log('user signup',email,password)
  }
  return (
<main>
    <h2 className="text-center">Sign Up</h2>
    <AuthForm handleSubmit={handleSubmit} />


</main>
  )
}
