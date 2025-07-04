'use client'

import '@/styles/footer.css'

export default function Footer(){
    return(
        <footer>
            <div className='c-links'>
                <a href='https://github.com/rootape' target='_blank'>Github</a>
                <a href='https://linkedin.com/in/joaopacc' target='_blank'>Linkedin</a>
                <a href='https://github.com/rootape' target='_blank'>Portfolio</a>
            </div>
            <div className='c-sign'>
                <span>© 2025 Rootape.</span>
            </div>
        </footer>
    )
}