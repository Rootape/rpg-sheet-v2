// Payloads (request)
export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  userName: string
  email: string
  password: string
}

// Respostas (response)
export interface LoginResponse {
  userId: string
}

export interface RegisterResponse {
  message: string
}
