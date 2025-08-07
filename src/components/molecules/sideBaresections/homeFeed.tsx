'use client'
import React from 'react'

type Item = {
    id: number,
    name: string,
    icon: React.ElementType
}

interface HomeLinkProps {
    HomeLinks: Item[],
    activeIndex: number,
    setActiveIndex: (id: number) => void,
}


function HomeFeed({ HomeLinks, activeIndex, setActiveIndex }: HomeLinkProps) {

    return (
        <div className='pt-0.5 pb-1  border-b  border-gray-200 dark:border-[#303030] sm:mr-1 lg:mr-3  '>
            {
                HomeLinks.map((item) => {
                    const Item = item
                    return (
                        <div key={item.id}
                            className={`flex items-center gap-2 text-xs md:gap-3  lg:gap-7 w-full pl-7 cursor-pointer px-3 py-2  rounded font-sans ${activeIndex === item.id ? 'bg-gray-300 dark:bg-[#303030]' : ''}`}
                            onClick={() => setActiveIndex(item.id)}>
                            <Item.icon className=' w-3 h-3  stroke-[1.5px] md:w-4 md:h-4  lg:w-4 lg:h-5 text-gray-600  dark:text-white' />
                            <h3
                                className={`text-xs lg:text-sm font-roboto  text-gray-600  ${activeIndex === item.id ? 'text-textBase-light dark:text-textBase-dark' : 'dark:text-white text-textBase-light'}`}
                            >
                                {item.name}
                            </h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HomeFeed