import React from 'react'
import Navbar from "@/app/(components)/Navbar/index";


const DashbordWrapper = ({children}: {children: React.ReactNode}) => {     

    return ( <div className='flex min-h-screen w-full bg-grey-50 text-white'>

        {/* Sidebar */}
        sidebar

           <Navbar />
        <main className={`flex w-full felx-col bg-grey-50 dark:bg-dark-bg md:pl-64`}>
            {children}
        </main>
    </div>
);
};

export default DashbordWrapper;