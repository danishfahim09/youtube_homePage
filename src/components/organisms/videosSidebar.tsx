'use client'
import { useState } from "react"
import HomeNavbare from "@/app/(home)/navbare/Navbare"
import SideBare from "@/app/(home)/sideBare/page"
import VedioCard from "@/components/organisms/vedioCard"
import { Sheet } from 'react-modal-sheet';
import SearchDrawer from "@/components/atoms/SearchDrawer"
import { ArrowLeft, ArrowUpLeft, Clock, Mic, } from "lucide-react"
import Image from "next/image"
import Images from "@/constants/Images"
import HomeTopBanner from "@/components/organisms/HomeTopBanner"

const VideosSidebar = () => {
  const [toggleMenu, settoggleMenu] = useState(true);
  const [isOpen, setOpen] = useState(false);

  const toggleSidebar = () => {
    settoggleMenu(!toggleMenu)
  }

  const searchHistory = [
    { id: 1, title: "Jaanan slow and reverb" },
    { id: 2, title: "Atif Aslam best songs" },
    { id: 3, title: "Pashto new song 2025" },
    { id: 4, title: "Lo-fi chill beats" },
    { id: 5, title: "Naat sharif emotional" },
    { id: 6, title: "English rap 2025" },
    { id: 7, title: "Punjabi dance song" },
    { id: 8, title: "Bollywood love songs" },
    { id: 9, title: "Instrumental relaxing music" },
    { id: 10, title: "Coke Studio season 15" },
  ];

  return (
    <div className='w-full bg-white dark:bg-black h-screen flex flex-col'>

      {/* ✅ Navbar only if Search is closed */}
      {!isOpen && (
        <div className="w-full h-14 bg-white dark:bg-[#303030]">
          <HomeNavbare toggleSidebar={toggleSidebar} open={isOpen} setOpen={setOpen} />
        </div>
      )}

      {/* ✅ Main content only if Search is closed */}
      {!isOpen && (
        <div className="flex flex-1 overflow-hidden">
          {toggleMenu && (
            <div className="w-2/12 bg-[#f9fbff] dark:bg-[#212121] h-full hidden md:block overflow-y-auto scroll-smooth scrollbar-hide">
              <SideBare />
            </div>
          )}
          <div className="w-full overflow-y-auto scroll-smooth z-30">
            <HomeTopBanner />
            <VedioCard />
          </div>
        </div>
      )}

      {/* ✅ Search Sheet when open */}
      {isOpen && (
        <Sheet isOpen={isOpen} onClose={() => setOpen(false)} className="bg-red-500 mt-0">
          <Sheet.Container className="!p-0 !m-0 !top-0 !h-screen !rounded-none bg-black">
            {/* <Sheet.Header /> */}
            <Sheet.Content className="bg-gray-200">



              <div className='flex gap-3 items-center mx-1 mt-3 '>
                <ArrowLeft className='text-center  shrink-0 w-6 h-6 p-1     cursor-pointer   text-textBase-light dark:text-black bg-gray-200 dark:bg-gray-300   rounded-full' />
                <SearchDrawer />
                <Mic className='text-center stroke-[2px]  shrink-0 w-6 h-6 p-1 sm:p-1 sm:h-6 hover:text-gray-400 cursor-pointer sm:w-6 md:h-8 lg:h-9 md:w-8  lg:w-9 text-textBase-light dark:text-black bg-gray-200 dark:bg-gray-300 md:p-2 lg:p-2 rounded-full' />

              </div>


              {searchHistory.map((item) => {
                return (
                  <div key={item.id} className="px-2 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Clock className='text-center  shrink-0 w-6 h-6 p-1   hover:text-gray-400 cursor-pointer dark:text-black rounded-full' />
                      <p className="text-gray-600 text-xs">{item.title}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Image width={40} height={30} alt="fdf" src={Images.STADIUM} className="" />
                      <ArrowUpLeft className='text-center stroke-[1px] shrink-0 w-7 h-7 p-1   hover:text-gray-400 cursor-pointer dark:text-black rounded-full' />
                    </div>
                  </div>
                )
              })}
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop />
        </Sheet>
      )}
    </div>
  )
}

export default VideosSidebar
