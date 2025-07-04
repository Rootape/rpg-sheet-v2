'use client'

import '@/styles/register.css'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { registerUser } from '@/utils/api'
import type { RegisterRequest } from '@/utils/types'

import Link from 'next/link'

export default function RegisterForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const payload: RegisterRequest = {
      userName,
      email,
      password,
    }
    try {
      await registerUser(payload)
      router.push('/login')
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit} className="f-register">
        <h2>Registrar</h2>
        <div className="c-input">
          <div className='c-input-box'>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="block border p-2 w-full"
            />
          </div>
          <div className='c-input-box'>
            <input
              type="text"
              placeholder="Nome de Usuário"
              value={userName}
              onChange={e => setUserName(e.target.value)}
              className="block border p-2 w-full"
            />
          </div>
          <div className='c-input-box'>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="block border p-2 w-full"
            />
          </div>
        </div>
        <button type="submit">Registrar</button>
        {error && <p className="text-red-600">{error}</p>}
      </form>
      <hr/>
      <div className="c-login">
        <p>Já possui conta? <Link href="/login" className=''>Login</Link></p>
      </div>
    </div>
  )
}