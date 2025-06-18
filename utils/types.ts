// Payloads (request)
export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  userName: string
  profileName: string
  email: string
  password: string
  birthDate: string
}

// Respostas (response)
export interface LoginResponse {
  userId: string
}

export interface RegisterResponse {
  message: string
}
