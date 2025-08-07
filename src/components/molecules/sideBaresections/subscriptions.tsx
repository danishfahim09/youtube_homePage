'use client'
import { ChevronDown, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'



type Item = {
    id: number,
    name: string,
    icon?: React.ElementType
    image?: string
}

interface subscriptionLinksProps {
    SubscriptionLinks: Item[],
    activeIndex: number,
    setActiveIndex: (id: number) => void,
}


function Subscriptions({ setActiveIndex, activeIndex, SubscriptionLinks }: subscriptionLinksProps) {
    const [showMore, setshowMore] = useState(false);

    const visibleLinks = showMore ? SubscriptionLinks : SubscriptionLinks.slice(0, 5)
    return (
        <div className='border-b border-gray-200 dark:border-[#303030] sm:mr-1 lg:mr-3  '>
            <h4 className='  dark:text-textBase-dark text-textBase-light ml-8 sm:text-xs  lg:text-sm  font-bold  shrink-0 my-2'>SUBSCRIPTIONS</h4>
            {
                visibleLinks.map((item) => {
                    return (
                        <div key={item.id}
                            className={`flex items-center sm:gap-3  lg:gap-7 w-full pl-7 cursor-pointer px-3  py-2  rounded font-sans
              ${activeIndex === item.id ? 'bg-gray-300 dark:bg-[#303030]' : ''}
            `}

                            onClick={() => setActiveIndex(item.id)}>
                            <Image width={24} height={24} alt='f' src={item.image || 'https://www.shutterstock.com/shutterstock/photos/1734036632/display_1500/stock-vector-picture-icon-graphic-design-template-vector-isolated-photography-vector-icon-picture-coming-soon-1734036632.jpg'} className='w-6 h-6 rounded-full' />

                            <h3 className={`sm:text-xs lg:text-sm font-roboto ${activeIndex === item.id ? 'text-textBase-light dark:text-textBase-dark' : 'dark:text-white text-textBase-light'}`}>
                                {item.name}
                            </h3>
                        </div>
                    )
                })
            }

            <div
                onClick={() => setshowMore(!showMore)}
                className={`flex items-center ml-1 gap-2 sm:gap-2 lg:gap-8 w-full pl-7 cursor-pointer px-3 py-2  rounded font-sans text-textBase-dark
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

export default Subscriptions