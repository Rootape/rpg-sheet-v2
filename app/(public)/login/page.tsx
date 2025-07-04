import '@/styles/login-page.css'

import LoginForm from '@/components/LoginForm'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Login',
  description: 'Login na aplicacao',
  icons: {
    icon: '/login-back.webp',
  },
}

export default function LoginPage() {
  return (
    <html lang="pt-BR">
      <body>
        <div className='c-page'>
          <div className="c-main">
            <div className='c-img'>
              <img src="/login-back.webp"/>
            </div>
            <div className='c-form'>
              <LoginForm />
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}