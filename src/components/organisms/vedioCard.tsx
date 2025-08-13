'use client'

import Images from '@/constants/Images'
import videos from '@/constants/Vedios'
import Image from 'next/image' 
import React, { useRef } from 'react'
import { useRouter } from 'next/navigation' 

export interface vedioHub {
  id: number,
  src: string,
  poster: string,
  avatar: string,
  title: string,
  author: string,
  views: string,
  time: string,
}

function VedioCard() {
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({}) 
  const router = useRouter()

  const videoCardData = [
    {
      id: 1,
      src: videos.HOME_CARD_VEDIO,
      poster: Images.VEDIO_PLACEHOLDER,
      avatar: '/assets/images/User-Avatar.png',
      title: 'Lorem ipsum dolor sit amet, consecte adipiscing elit.',
      author: 'James Gouse',
      views: '15K Views',
      time: '1 week ago',
    },
    {
      id: 2,
      src: videos.HOME_CARD_VEDIO,
      poster: Images.BASKETBALL,
      avatar: '/assets/images/User-Avatar.png',
      title: 'Another great video title goes here.',
      author: 'Sarah Johnson',
      views: '32K Views',
      time: '2 days ago',
    },
    {
      id: 3,
      src: videos.HOME_CARD_VEDIO,
      poster: Images.CAT,
      avatar: '/assets/images/User-Avatar.png',
      title: 'Another great video title goes here.',
      author: 'Sarah Johnson',
      views: '32K Views',
      time: '2 days ago',
    },
    {
      id: 4,
      src: videos.HOME_CARD_VEDIO,
      poster: Images.FOOTBALL,
      avatar: '/assets/images/User-Avatar.png',
      title: 'Learn Flexbox in 5 Minutes!',
      author: 'Quick Code',
      views: '44K Views',
      time: '4 days ago',
    },
    {
      id: 5,
      src: videos.HOME_CARD_VEDIO,
      poster: Images.VEDIO_PLACEHOLDER,
      avatar: '/assets/images/User-Avatar.png',
      title: 'CSS Grid Mastery for Beginners',
      author: 'Design Gurus',
      views: '18K Views',
      time: '6 hours ago',
    },
    {
      id: 6,
      src: videos.HOME_CARD_VEDIO,
      poster: Images.STADIUM,
      avatar: '/assets/images/User-Avatar.png',
      title: 'Ultimate UI Animation Tutorial',
      author: 'UI Ninja',
      views: '27K Views',
      time: '1 month ago',
    },
    {
      id: 8,
      src: videos.HOME_CARD_VEDIO,
      poster: Images.FOOTBALL2,
      avatar: '/assets/images/User-Avatar.png',
      title: 'Ultimate UI Animation Tutorial',
      author: 'UI Ninja',
      views: '27K Views',
      time: '1 month ago',
    },
  ]

  const handleMouseEnter = (id: number) => {
    const video = videoRefs.current[id]
    if (video) {
      video.currentTime = 0
      video.play()
    }
  }

  const handleMouseLeave = (id: number) => {
    const video = videoRefs.current[id]
    if (video) {
      video.pause()
      video.currentTime = 0
      video.load() // ✅ this brings back the poster!
    }
  }

  // const router = useRouter()
  const handleVideoClick = (video: vedioHub) => {
    localStorage.setItem("selectedVideo", JSON.stringify(video)); // single clicked video
    localStorage.setItem("allVideos", JSON.stringify(videoCardData)); // all videos array
    router.push("/videoHub"); // navigate to next page
  };

  return (
    <div className=''>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7 w-full p-2">
        {videoCardData.map((item) => {
          return (
            <div
              key={item.id}
              className="cursor-pointer rounded-b-sm overflow-hidden group"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
              onClick={() => handleVideoClick(item)}
            >
              <video
                ref={(el) => {
                  videoRefs.current[item.id] = el
                }}
                src={item.src}
                poster={item.poster}
                muted
                className="w-full h-[300px] object-cover rounded-md transition-all duration-300"
              />

              <div className="flex flex-row gap-3 mt-3">
                <div>
                  <Image
                    width={36}
                    height={36}
                    src={item.avatar}
                    alt="User avatar"
                    className="w-9 h-9 object-cover rounded-full"
                  />
                </div>

                <div className="flex flex-col">
                  <h2 className="text-xs font-bold text-black dark:text-white">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">{item.author}</p>
                  <p className="text-xs text-gray-500 font-normal dark:text-gray-400">{item.views} • {item.time}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default VedioCard
