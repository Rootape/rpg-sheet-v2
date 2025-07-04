'use client'

import '@/styles/login.css'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { loginUser } from '@/utils/api'
import { LoginRequest } from '@/utils/types'

import Link from 'next/link'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState('')
  const [emailError, setEmailError] = useState<string | null>(null)
  const [passwordError, setPasswordError] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    setEmailError(null)
    if (!email) {
      setEmailError('Email é obrigatório.')
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Formato de email inválido.')
    }

    setPasswordError(null)
    if (!password) {
      setPasswordError('Senha é obrigatória.')
    } else if (password.length < 6) {
      setPasswordError('Senha deve ter ao menos 6 caracteres.')
    }

    // Form válido se não há erros
    setIsFormValid(!emailError && !passwordError && email.length>1 && password.length>1)
  }, [email, password])

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
    <div className='wrapper'>
      <form onSubmit={handleSubmit} className="f-login">
        <h2>Login</h2>
        {error && <p className="text-red-600">{error}</p>}
        <div className="c-input">
          <div className='c-input-box'>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <i className='bx bxs-user'></i>
          </div>
          <div className='c-input-box'>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <i className='bx bxs-lock-alt' ></i>
          </div>
        </div>
        <div className="c-remember">
          <label>
            <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} />
            Lembrar de mim
          </label>
        </div>
        <button type="submit">Entrar</button>
      </form>
      <hr/>
      <div className="c-register">
        <p>Não é cadastrado? <Link href="/register" className=''>Registrar</Link></p>
      </div>
    </div>
  )
}