import React from 'react'
import ProjectLayout from '@/components/ProjectsLayout'
import 'src/app/projects/page.css'


function page() {
  return (
    <ProjectLayout>
        <div className='background h-screen w-screen'>
            <p className='text-white'>hello</p>
        </div>
    </ProjectLayout>
  )
}

export default page