'use client'
import { useState } from "react"
import HomeNavbare from "./navbare/Navbare"
import SideBare from "./sideBare/page"
import VedioCard from "./VideoCard/page"

const Home = () => {
  const [toggleMenu, settoggleMenu] = useState(true);
  const toggleSidebar = () => {
    settoggleMenu(!toggleMenu)
  }
  return (
    <div className='w-full  bg-white dark:bg-black         h-screen flex flex-col'>
      <div className="w-full h-14 bg-white dark:bg-[#303030]">
        <HomeNavbare toggleSidebar={toggleSidebar} />
      </div>

      <div className="flex flex-1 overflow-hidden ">
        {
          toggleMenu &&
          <div className="w-2/12  bg-[#f9fbff] dark:bg-[#212121]   h-full   hidden md:block overflow-y-auto scroll-smooth scrollbar-hide">
            <SideBare />
          </div>
        }
        <div className={`w-full overflow-y-auto scroll-smooth`}>
          <VedioCard />
        </div>
      </div>

    </div>
  )
}

export default Home
