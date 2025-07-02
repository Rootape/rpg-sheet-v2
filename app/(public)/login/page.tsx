import '@/styles/globals.css'

import LoginForm from '@/components/LoginForm'

export default function LoginPage() {
  return (
    <html lang="pt-BR">
      <body>
        <div className='c-page'>
          <div className="c-main">
            <div className='c-img'>
              <img src="/i-back.webp"/>
            </div>
            <div className='c-form'>
              <LoginForm />
            </div>
          </div>
          <div className='c-footer'>
            <div className='c-links'>
              <a href='https://github.com/rootape'>Github</a>
              <a href='https://github.com/rootape'>Linkedin</a>
              <a href='https://github.com/rootape'>Portfolio</a>
            </div>
            <div className='c-sign'>
              <span>© 2025 Rootape.</span>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}