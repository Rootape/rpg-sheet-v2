'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { registerUser } from '@/utils/api'
import type { RegisterRequest } from '@/utils/types'

export default function RegisterForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [profileName, setProfname] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const payload: RegisterRequest = {
      userName,
      profileName,
      email,
      password,
      birthDate,
    }
    try {
      await registerUser(payload)
      router.push('/login')
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold">Registrar</h2>
        {error && <p className="text-red-600">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="block border p-2 w-full"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="block border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Nome de Usuário"
          value={userName}
          onChange={e => {setUserName(e.target.value); setProfname(e.target.value)}}
          className="block border p-2 w-full"
        />
        <input
          type="date"
          placeholder="Data de aniversario"
          value={birthDate}
          onChange={e => setBirthDate(e.target.value)}
          className="block border p-2 w-full"
        />
      <button type="submit" className="bg-green-500 text-white px-4 py-2">Registrar</button>
    </form>
  )
}