'use client'
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
 } from '@/components/ui/sidebar'
import { Project, User } from '@prisma/client'
import { Avatar } from '@radix-ui/react-avatar'
import React from 'react'
import NavMain from './nav-main'
import { data } from '@/lib/constants'
import RecentOpen from './recent-open.'

type Props = {
  recentProjects: Project[],
  user: User
  props?: React.ComponentProps<typeof Sidebar>
}

const AppSidebar = ( {recentProjects, user, ...props}: Props) => {
  return (
    <Sidebar collapsible='icon' 
      className='max-w-[212px] bg-background-90'
      {...props}>
      <SidebarHeader className='pt-6 px-3 pb-0'>
        <SidebarMenuButton size={'lg'}
        className='data-[state=open]:text-slidebar-accent-foreground'>
          <div className='flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground'>
              <Avatar className='h-9 w-9 rounded-full'>
             <AvatarImage src={"logo.png"} alt="logo" /> 
              <AvatarFallback className='rounded-lg'>
                SG
              </AvatarFallback>
              </Avatar>
          </div>
          <span className='truncate text-2xl font-semibold'>SlideGenius</span>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent className='px-3 mt-10 gap-y-6'>
         <NavMain items={data.navMain}/> 
         <RecentOpen recentProjects={recentProjects} />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar