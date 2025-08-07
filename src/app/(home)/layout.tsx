'use client'  
const HomeLayout = ({ children }: { children: React.ReactNode }) => { 
  return ( 
    <div className='w-full min-h-screen bg-white dark:bg-black '>
      {children}
    </div>
  )
}

export default HomeLayout
