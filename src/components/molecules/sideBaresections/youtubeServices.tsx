'use client'
import { ChevronDown, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'

type Items = {
  id: number,
  name: string,
  icon: React.ElementType
}

interface ServicesLinksProps {
  servicesLinks: Items[]
  activeIndex: number,
  setActiveIndex: (id: number) => void,
}

function YoutubeServices({ servicesLinks, activeIndex, setActiveIndex }: ServicesLinksProps) {
  const [showMore, setshowMore] = useState(false);

  const visibleLinks = showMore ? servicesLinks : servicesLinks.slice(0, 5)
  return (
    <div className='border-b border-gray-200 dark:border-[#303030] sm:mr-1 lg:mr-3'>
      <h4 className='mt-2 mb-1  dark:text-textBase-dark text-textBase-light ml-8 sm:text-xs  lg:text-sm  font-bold  shrink-0 '>MORE FROM YOUTUBE</h4>
      {
        visibleLinks.map((item) => {
          const Item = item
          return (
            <div key={item.id}
              className={`flex items-center gap-2 sm:gap-2 w-full pl-7 cursor-pointer px-3 py-2  rounded font-sans text-white 
              ${activeIndex === item.id ? 'bg-gray-300 dark:bg-[#303030]' : ''}
            `}

              onClick={() => setActiveIndex(item.id)}>
              <Item.icon className='w-3 h-3 stroke-[1.5px] md:w-4 sm:h-4 lg:w-4 lg:h-5 text-textBase-light  dark:text-textBase-dark' />
              <h3 className={`sm:text-xs lg:text-sm font-roboto   ${activeIndex === item.id ? 'text-textBase-light dark:text-textBase-dark' : 'dark:text-textBase-dark text-textBase-light'}`}
              >
                {item.name}
              </h3>
            </div>
          )
        })
      }

      <div
        onClick={() => setshowMore(!showMore)}
        className={`flex items-center gap-2 sm:gap-2 lg:gap-7 w-full pl-7 cursor-pointer px-3 py-2  rounded font-sans text-textBase-dark
              `}>
                {
                  showMore ? <ChevronDown className='w-3 h-3 md:w-4 md:h-4 lg:w-4 lg:h-5 text-textBase-light  dark:text-textBase-dark' /> : <ChevronRight className='w-3 h-3 md:w-4 md:h-4 lg:w-4 lg:h-5 text-textBase-light  dark:text-textBase-dark' />
                }
        

        <h3 className={`sm:text-xs lg:text-sm font-roboto    dark:text-white text-textBase-light`}
        >
          {showMore ? 'show less' : 'show more'}
        </h3>
      </div>
    </div>
  )
}

export default YoutubeServices