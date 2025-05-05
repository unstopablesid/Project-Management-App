"use client"

import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { LockIcon } from 'lucide-react'



const index = () => {
  const [showProjects , setShoowProjects] = useState(true);
  const [showPriority , setShowPriority] = useState(true);

  const  sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white w-64 `;
  return (
    <div className={sidebarClassNames}>
      <div className='flex h-[100%] w-full flex-col justify-start'>
        {/* TOP LOGO */}
        <div className='z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black '>
          <div className='text-xl font-bold text-grey-800 dark:text-white'>
            EDLIST
          </div>
        </div>
        {/* TEAM*/}
        <div className='flex items-center gap-5 border-y-[1.5px] border-grey-200 px-8 py-4 dark:bg-grey-700'>
          <Image src="/logo.png" alt='logo' width={40} height={40}/>
          <div>
            <h3 className='text-md font-bold tracking-wide dark:text-grey-200'>
              EDROD TEAM
            </h3>
            <div className='mt-1 flex items-start gap-2'>
              <LockIcon className='mt-[0.1rem] h-3 w-3 text-grey-400'/>
              <p className='text-xs text-grey-500'> Private</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index;