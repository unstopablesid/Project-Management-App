import React from 'react';
import {Search,Settings} from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex item-center justify-center bg-white px-4 py3 dark:bg-black dark:px-4 dark:py-3 '>
      {/* search bar */}
      <div className='flex items-center gap-8'>
      <div className='relative flex h-min w-[200px]'>
        <Search className='absolute left left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white'/>
        <input className='w-full rounded border-none bg-grey-100 p-2 pl-8 placeholder-gret-500 focus:border-transparent focus:outliner-none dark:bg-grey-700 dark:text-white dark:placeholder-white'  type='search' placeholder='Search...'/>
      </div>
      </div>
      {/* icons */}
      <div className='flex items-center '>
        <Link 
        href="/settings"
        className='h-min w-min rounded p-2 hover:bg-grey-100 '>
          <Settings className='h-6 w-6 cursor-pointer dark:text-white'/>
        </Link>
        <div className='ml-2 mr-5 hidden min-h-[2rem] w-[0.1rem] bg-grey-200 md:inline-block ' ></div>
      </div>
     </div>
  )
}

export default Navbar;