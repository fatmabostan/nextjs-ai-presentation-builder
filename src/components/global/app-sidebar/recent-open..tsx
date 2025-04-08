import { Button } from '@/components/ui/button'
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { Project } from '@prisma/client'
import React from 'react'

type Props = {
    recentProjects: Project[]
}

const RecentOpen = ({recentProjects}: Props) => {
  return (
    <SidebarGroup>
        <SidebarGroupLabel>Recently Opened
        </SidebarGroupLabel>
        <SidebarMenu>
            { recentProjects.length > 0 ? ( <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip={"TEST"}
                className={`hover:bg-primary-80`}>
                    <Button variant={'link'}
                    className={`text-xs items-center justify-start`}>
                        <span>Testing</span>
                    </Button>
                </SidebarMenuButton>
            </SidebarMenuItem>) : " " }
        </SidebarMenu>
    </SidebarGroup>
  )
}

export default RecentOpen