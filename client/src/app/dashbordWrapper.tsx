import React from 'react'
import Navbar from "@/app/(components)/Navbar/index";
import Sidebar from "@/app/(components)/Sidebar/";

const DashbordWrapper = ({children}: {children: React.ReactNode}) => {     

    return ( 
    <div className='flex min-h-screen w-full bg-grey-50 text-white'>

    <Sidebar />

        <main className={`dark:bg-dark-bg flex w-full flex-col bg-grey-50 md:pl-64`}>
           <Navbar />
            {children}
        </main>
    </div>
);
};

export default DashbordWrapper;