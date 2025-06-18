import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from './types'
import { setCookies } from './auth'

const API_URL = 'http://localhost:8080/user-handler/v1'

const headers = new Headers()
headers.set('Authorization', 'Basic ' + btoa('user:PJADMIN'))
headers.set('Content-Type', 'application/json')

export async function loginUser(data: LoginRequest, remember: boolean): Promise<LoginResponse> {
  const res = await fetch(`${API_URL}/account/login/user`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.message || 'Erro ao logar')
  }

  const responseBody: LoginResponse = await res.json()

  setCookies(responseBody.userId, remember)

  return responseBody
}

export async function registerUser(data: RegisterRequest) {
  const res = await fetch(`${API_URL}/account/register/user`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.message || 'Erro ao registrar')
  }

  return null
}