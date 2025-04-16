import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { User } from '@prisma/client'
import React from 'react'
import SearchBar from './search-bar'
import ThemeSwitcher from '../mode-toggle'
import { Button } from '@/components/ui/button'
import { Upload } from 'lucide-react'
import NewProjectButton from './new-project-button'

type Props = {
    user: User
}

const UpperInfoBar = ({ user }: Props) => {
    return (
        <header className='sticky top-0 z-[10] flex justify-between flex-wrap gap-2 items-center bg-background p-4'>
            <div className='flex justify-between items-center w-2/3'>
                <SidebarTrigger className='-ml-1 border-2 border-background-80' />
                <Separator orientation='vertical'
                    className='m-4 h-4' />
                <div className='w-full max-h-[95%] flex items-center justify-between gap-4'>
                    <SearchBar />
                </div>
            </div>
            <div className='flex gap-4 items-center justify-end'>
                <Button className="bg-primary-80 rounded-lg hover:bg-background-80 text-primary font-semibold cursor-not-allowed">
                    <Upload />
                    Import
                </Button>
                <NewProjectButton user={user} />
                <ThemeSwitcher />
            </div>
        </header>
    )
}

export default UpperInfoBar