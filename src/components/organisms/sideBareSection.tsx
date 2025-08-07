'use client'
import React, { useState } from 'react'
import HomeFeed from '../molecules/sideBaresections/homeFeed'
import UserHistory from '../molecules/sideBaresections/userHistory'
import Subscriptions from '../molecules/sideBaresections/subscriptions'
import YoutubeServices from '../molecules/sideBaresections/youtubeServices'

import { Icons } from '@/constants/Icons'
import Images from '@/constants/Images'

function SideBareSection() {
  const [activeIndex, setActiveIndex] = useState<number>(1)

  //home
  const HomeLinks = [
    {
      id: 1,
      name: 'Home',
      icon: Icons.LucideHome
    },
    {
      id: 2,
      name: 'Explore',
      icon: Icons.Compass
    },
    {
      id: 3,
      name: 'Subscriptions',
      icon: Icons.YoutubeIcon
    },
  ]

  //user history 
const userHistoryLinks = [
  {
    id: 5,
    name: 'Home',
    icon: Icons.Home
  },
  {
    id: 6,
    name: 'Explore',
    icon: Icons.Compass
  },
  {
    id: 7,
    name: 'Shorts',
    icon: Icons.PlaySquare
  },
  {
    id: 8,
    name: 'Subscriptions',
    icon: Icons.ListVideo
  },
  {
    id: 9,
    name: 'Library',
    icon: Icons.Video
  },
  {
    id: 10,
    name: 'History',
    icon: Icons.History
  },
  {
    id: 11,
    name: 'Your Videos',
    icon: Icons.Video
  },
  {
    id: 12,
    name: 'Watch Later',
    icon: Icons.Clock4
  },
  {
    id: 13,
    name: 'Liked Videos',
    icon: Icons.ThumbsUp
  },
  {
    id: 14,
    name: 'Your Channel',
    icon: Icons.User
  },
  {
    id: 15,
    name: 'Settings',
    icon: Icons.Settings
  },
  {
    id: 16,
    name: 'Help',
    icon: Icons.HelpCircle
  },
  {
    id: 17,
    name: 'Log out',
    icon: Icons.LogOut
  }
];


  //subscription linkls
 const SubscriptionLinks = [
  {
    id: 21,
    name: 'James Gouse',
    image: Images.STADIUM
  },
  {
    id: 22,
    name: 'Alan Cooper',
    image: Images.VEDIO_PLACEHOLDER
  },
  {
    id: 23,
    name: 'Marcus Levin',
    image:Images.FOOTBALL
  },
  {
    id: 24,
    name: 'Alexis Sears',
    image: Images.STADIUM
  },
  {
    id: 25,
    name: 'Jesica Lambert',
    image: Images.BASKETBALL
  },
  {
    id: 26,
    name: 'Show More',
    image: Images.VEDIO_PLACEHOLDER // fun avatar for "Show More"
  },
  {
    id: 27,
    name: 'Michael Smith',
    image: Images.BASKETBALL
  },
  {
    id: 28,
    name: 'Sophia Lee',
    image: Images.CAT
  },
  {
    id: 29,
    name: 'David Johnson',
    image: Images.FOOTBALL2
  },
  {
    id: 30,
    name: 'Emily Clark',
    image: Images.CAT
  }
]


  // youtube Services 
  const servicesLinks = [
  {
    id: 31,
    name: 'YouTube Premium',
    icon: Icons.Crown
  },
  {
    id: 32,
    name: 'Gaming',
    icon: Icons.Gamepad2
  },
  {
    id: 33,
    name: 'Live',
    icon: Icons.Radio
  },
  {
    id: 34,
    name: 'Sports',
    icon: Icons.Trophy
  },
  {
    id: 35,
    name: 'Music',
    icon: Icons.Music2
  },
  {
    id: 36,
    name: 'News',
    icon: Icons.Newspaper
  },
  {
    id: 37,
    name: 'Learning',
    icon: Icons.GraduationCap
  },
  {
    id: 38,
    name: 'Podcasts',
    icon: Icons.Mic2
  },
  {
    id: 39,
    name: 'Liked Videos',
    icon: Icons.ThumbsUp
  },
  {
    id: 40,
    name: 'Show More',
    icon: Icons.ChevronDown
  }
];

  return (
    <div className='w-full h-full '>
      <HomeFeed HomeLinks={HomeLinks} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <UserHistory userHistoryLinks={userHistoryLinks} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <Subscriptions SubscriptionLinks={SubscriptionLinks} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <YoutubeServices servicesLinks={servicesLinks} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
    </div>
  )
}

export default SideBareSection