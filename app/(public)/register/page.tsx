import '@/styles/register-page.css'

import RegisterForm from '@/components/RegisterForm'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Registro',
  description: 'Registro na aplicacao',
  icons: {
    icon: '/login-back.webp',
  },
}

export default function RegisterPage() {
  return (
    <html lang="pt-BR">
      <body>
        <div className='c-page'>
          <div className="c-main">
            <img src="/register-back.webp"/>
            <div className='c-form'>
              <RegisterForm />
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}