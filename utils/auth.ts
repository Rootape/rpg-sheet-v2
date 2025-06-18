'use server'

import { cookies } from 'next/headers'

export async function setCookies(usrID: string, remember: boolean) {
  const cookieStore = await cookies()
  const options = remember
    ? {} // sem expiracao
    : { maxAge: 60 * 60 * 24 * 7 } // 7 dias

  cookieStore.set('usrID', usrID, options)

  if (remember) {
    cookieStore.set('rememberUsr', 'true')
  }
}
