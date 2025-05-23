export const dynamic = 'force-dynamic'; //This page must be recreated on each user request. Because user-specific data (auth/session) is required
import { onAuthenticateUser } from '@/actions/user'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = { children: React.ReactNode }

const Layout = async ({ children }: Props) => {
    const auth = await onAuthenticateUser();
    if(!auth.user){
        redirect('/sign-in');
    }
  return (
    <div className='w-full min-h-screen overflow-x-clip'>
        {children}
    </div>
  )
}

export default Layout