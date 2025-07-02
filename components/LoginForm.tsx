'use client'

import '@/styles/globals.css'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { loginUser } from '@/utils/api'
import { LoginRequest } from '@/utils/types'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const payload: LoginRequest = {
      email,
      password
    }

    try {
      const { userId } = await loginUser(payload, remember)
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="f-login">
      <h2>Login</h2>
      {error && <p className="text-red-600">{error}</p>}
      <div className="c-input">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="i-login"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="i-login"
        />
      </div>
      <div className="c-remember">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} />
          Lembrar de mim
        </label>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Entrar</button>
    </form>
  )
}