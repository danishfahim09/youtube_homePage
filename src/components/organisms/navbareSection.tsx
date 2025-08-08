'use client'
import SearchBar from '@/components/atoms/searchBare'
import {
  AlignJustify, Bell, EllipsisVertical, LayoutDashboard, Mic, Moon, Sun, UserPen, VideoIcon, CreditCard, Users, BadgeDollarSign, Settings, LogOut,
  EyeOff, Search
} from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import React, { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from '@/constants/Icons'
import Images from '@/constants/Images'
import ThemeToggle from '../ui/ThemeToggle'

interface NavbareProps {
  toggleSidebar: () => void;
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbare({ toggleSidebar, open, setOpen, }: NavbareProps) {
  const { theme, setTheme } = useTheme()

  const notifications = [
    {
      id: 1,
      profileImage: Images.FOOTBALL,
      thumbnail: Images.CAT,
      title: "RS 1313 SHORTS uploaded: Meri Kya Galti Thi 😳 | RS 1313 SHORTS | Ramneek Singh 1313",
      time: "2 hours ago",
    },
    {
      id: 2,
      profileImage: Images.FOOTBALL2,
      thumbnail: Images.STADIUM,
      title: "New video from Ramneek Singh 1313 | Emotional Reaction!",
      time: "1 hour ago",
    },
    {
      id: 3,
      profileImage: Images.STADIUM,
      thumbnail: Images.FOOTBALL2,
      title: "Live Stream Starting Soon | Join Now! dff",
      time: "30 minutes ago",
    },
  ];


  const profileMenuItems = [
    {
      id: 1,
      label: 'My Profile',
      icon: UserPen,
      href: '/account',
    },
    {
      id: 2,
      label: 'Balance',
      icon: CreditCard,
      href: '/billing',
    },
    {
      id: 3,
      label: 'Team',
      icon: Users,
      href: '/team',
    },
    {
      id: 4,
      label: 'Setting',
      icon: Settings,
      href: '/subscription',
    },
    {
      id: 5,
      label: 'Log Out',
      icon: LogOut,
      href: '/subscription',
    },
  ]



  const DropdownMenuMoreOptions = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <EllipsisVertical className='w-3  h-3 md:w-4 md:h-4 lg:w-4 lg:h-5 text-gray-600 dark:text-white cursor-pointer' />
        </DropdownMenuTrigger>
        <DropdownMenuContent className='mr-20'>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()} className='flex gap-4  '>

            <EyeOff width={22} height={22} className='hover:text-gray-400 stroke-[1px] text-textBase-light dark:text-textBase-dark w-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-4 lg:h-4 cursor-pointer  ' />
            Hide this notification
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()} className='flex gap-4  '>

            <Bell width={22} height={22} className='hover:text-gray-400 stroke-[1px] text-textBase-light dark:text-textBase-dark w-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-4 lg:h-4 cursor-pointer  ' />
            Turn off all from 🎧YR MUSIC🎧

          </DropdownMenuItem>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()} className='flex gap-4  '>

            <Bell width={22} height={22} className='hover:text-gray-400 stroke-[1px] text-textBase-light dark:text-textBase-dark w-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-4 lg:h-4 cursor-pointer  ' />
            Turn off all recommendation notifications
          </DropdownMenuItem>

        </DropdownMenuContent >
      </DropdownMenu>
    );
  };
  return (
    <div className='flex justify-between  h-full items-center mx-4 relative'>

      <div className="flex items-center gap-4">
        <AlignJustify className='w-5 h-5 lg:w-[20px] stroke-[1.5px] lg:h-[18px] hover:text-gray-400 cursor-pointer text-slate-600  dark:text-white' onClick={toggleSidebar} />
        <Image src='/assets/images/Youtube-Logo.png' width={90} height={20} alt='df' className='hidden xs:block w-20 h-5' />
      </div>
      <div className="items-center justify-center gap-1 lg:gap-1 hidden xs:flex">
        <SearchBar />
        <Mic className='text-center stroke-[1.5px] w-6 h-6 p-1 sm:p-1 sm:h-6 hover:text-gray-400 cursor-pointer sm:w-6 md:h-8 lg:h-9 md:w-8  lg:w-9 text-textBase-light dark:text-textBase-dark bg-gray-200 dark:bg-black md:p-2 lg:p-2 rounded-full' />
        <ThemeToggle />

      </div>
      <div className="  gap-2 sm:gap-2 md:gap-3 lg:gap-7 items-center flex">

        <Search onClick={() => setOpen(true)} width={22} height={22} className='stroke-[1.5px] hover:text-gray-400  text-textBase-light dark:text-textBase-dark w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer  xs:hidden' />



        <LayoutDashboard width={22} height={22} className='stroke-[1.5px] hover:text-gray-400   text-textBase-light dark:text-textBase-dark   cursor-pointer w-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6  ' />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Bell width={22} height={22} className='hover:text-gray-400 stroke-[1.5px] w-4 cursor-pointer text-textBase-light dark:text-textBase-dark  0 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6   ' />
          </DropdownMenuTrigger>

          <DropdownMenuContent className='w-[450px] mr-[70px]'>
            <DropdownMenuLabel className='flex items-center justify-between'>
              Notification
              <Icons.Settings className='hover:text-gray-400 stroke-[1px] cursor-pointer w-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ' />
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {notifications.map((item) => {
              return (
                <DropdownMenuItem key={item.id} className='flex flex-row justify-between my-2 items-start'>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 min-w-[40px]">
                      <Image
                        src={item.profileImage}
                        alt="User Avatar"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-medium text-xs text-black dark:text-gray-300">
                        {item.title}
                      </span>
                      <span className="text-xs text-gray-500">{item.time}</span>
                    </div>
                  </div>

                  <div className="flex flex-row items-center gap-2">
                    <div className="w-20 h-9">
                      <Image
                        src={item.thumbnail}
                        alt="User Avatar"
                        width={80}
                        height={50}
                        className="h-full rounded-sm "
                      />
                    </div>

                    <DropdownMenuMoreOptions />

                  </div>
                </DropdownMenuItem>
              )
            })}
          </DropdownMenuContent>
        </DropdownMenu>



        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Image src='/assets/images/User-Avatar.png' width={32} height={32} alt='df' className='cursor-pointer w-6 text-textBase-light dark:text-textBase-dark   sm:w-5 sm:h-5  md:w-6 md:h-6      lg:w-8 lg:h-8 rounded-full hover:border-spacing-4 hover:border-gray-600  ' />
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-52 mr-2'>
            <DropdownMenuLabel className='text-center'>
              Profile
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            {
              profileMenuItems.map((item) => {
                const Item = item
                return (
                  <DropdownMenuItem key={item.id}>
                    <div className="flex gap-5 p-0.5">
                      <Item.icon className='hover:text-gray-400 stroke-[1px] cursor-pointer w-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 ' />
                      {item.label}
                    </div>
                  </DropdownMenuItem>
                )
              })
            }
          </DropdownMenuContent>
        </DropdownMenu>


      </div>

      {/* <div className="flex gap-2 sm:gap-2 md:gap-3 lg:gap-7 items-center   xs:hidden">
        <Search width={22} height={22} className='hover:text-gray-400 cursor-pointer w-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ' />
        <Bell width={22} height={22} className='hover:text-gray-400 cursor-pointer w-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ' />
        <Image src='/assets/images/User-Avatar.png' width={32} height={32} alt='df' className='w-6  sm:w-5 sm:h-5  md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full hover:border-spacing-4 hover:border-gray-600 ' />
      </div> */}
    </div>
  )
}

export default Navbare