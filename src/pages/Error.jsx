import React from 'react'
import { HomeIcon } from '@heroicons/react/24/outline'
import { DocumentTextIcon } from '@heroicons/react/24/outline'

function Error() {
  return (
    <div>
      <div className='shadow-md w-full'>
        <div className='md:px-10 py-4 px-7'>
          <div className='flex text-2xl cursor-pointer items-center gap-5'>
            <HomeIcon className='w-7 h-7 text-black-600'/>
            <a href="/">
            <span className='text-black-600 hover:text-blue-700 hover:bg-gray-200 rounded-lg'>Home</span>
            </a>
            <div className='flex text-2xl cursor-pointer items-center gap-5'>
            <DocumentTextIcon className='w-7 h-7 text-black-600'/>
            <a href="/docs">
            <span className='text-black-600 hover:text-blue-700 hover:bg-gray-200 rounded-lg'>Documentation</span>
            </a>
          </div>
          </div>
        </div>
      </div>
      <div className='pt-12'>
      <div className='flex-none shadow-2xl md:mx-40 p-5 rounded-xl'>
        <span className='text-2xl text-red-600'>Error! <div>You probably mispelled something in the URL :/</div> </span>
        <img src="https://blog.andreas-stricker.at/wp-content/uploads/2021/05/404_error.png"/>
      </div>
      </div>
    </div>
  )
}

export default Error