'use client'

import { SessionProvider } from 'next-auth/react'
import { MsalProvider } from '@azure/msal-react'
import { PublicClientApplication } from '@azure/msal-browser'

const msalConfig = {
  auth: {
    clientId: process.env.NEXT_PUBLIC_AZURE_CLIENT_ID!,
    authority: `https://login.microsoftonline.com/${process.env.NEXT_PUBLIC_AZURE_TENANT_ID}`,
    redirectUri: process.env.NEXT_PUBLIC_NEXTAUTH_URL || 'http://localhost:3000',
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
}

const msalInstance = new PublicClientApplication(msalConfig)

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <MsalProvider instance={msalInstance}>
        {children}
      </MsalProvider>
    </SessionProvider>
  )
}

