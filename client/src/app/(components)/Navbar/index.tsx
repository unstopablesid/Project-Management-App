import React from 'react';
import {Search } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='flex item-center justify-center bg-white px-4 py3 dark:bg-black dark:px-4 dark:py-3 '>
      <div className='relative flex h-min w-[200px]'>
        <Search className='absolute left left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white'/>
        <input type="search" />
      </div>
     </div>
  )
}

export default Navbar