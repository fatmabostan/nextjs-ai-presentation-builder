import { getAllProjects } from '@/actions/project';
import NotFound from '@/components/global/not-found';
import React from 'react'

const DashboardPage = async () => {
    const allProjects = await getAllProjects();
  return (
    <div className='w-full flex flex-col gap-6 relative mt-4 ml-4'>
        <div className='flex flex-col-reverse items-start w-full gap-6 sm:flex-row sm:justify-between sm:items-center'>
            <div className='flex flex-col items-start'>
                <h1 className='text-2xl font-semibold text-primary backdrop-blur-lg'>
                    Projects
                </h1>
                <p className='text-base font-normal text-secondary'>
                    All of your work in one place
                </p>
            </div>
        </div>
    {/* <NotFound /> */}
    </div>
  )
}

export default DashboardPage