'use client'
import React from 'react'
import Marquee from 'react-fast-marquee'

function TextMarqueeBanner() {
    const carouselData = [
        {
            id: 1,
            name: 'Carousel One'
        },
        {
            id: 2,
            name: 'Carousel Two'
        },
        {
            id: 3,
            name: 'Carousel Three'
        },
        {
            id: 4,
            name: 'Carousel Four'
        },
        {
            id: 5,
            name: 'Carousel Five'
        },
        {
            id: 6,
            name: 'Carousel Six'
        },
        {
            id: 7,
            name: 'Carousel Seven'
        },
        {
            id: 8,
            name: 'Carousel Eight'
        },
        {
            id: 9,
            name: 'Carousel Nine'
        },
        {
            id: 10,
            name: 'Carousel Ten'
        },
        {
            id: 11,
            name: 'Carousel Eleven'
        },
        {
            id: 12,
            name: 'Carousel Twelve'
        },
    ];
    return (
        <div className="fixed  z-10 h-10 dark:bg-neutral-800 bg-gray-100 sm:py-1 sm:h-10 lg:py-2 lg:h-14 flex items-center cursor-default ">
            <Marquee speed={40} gradient={false} pauseOnHover={true}  >
                {
                    carouselData.map((item) => (
                        <h3 key={item.id} className="text-xs sm:text-sm rounded-full py-1 px-2 sm:py-1.5 sm:px-2 lg:py-2.5 lg:px-3   bg-gray-200 dark:bg-[#303030] font-roboto text-textBase-light dark:text-textBase-dark  mx-3">
                            {item.name}
                        </h3>
                    ))
                }
            </Marquee>
        </div>
    )
}

export default TextMarqueeBanner
