export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="p-4">
          <h1 className="text-xl font-bold mb-4">Área Privada</h1>
          {children}
        </div>
      </body>
    </html>
  )
}