'use client'
import Navbare from '@/components/organisms/navbareSection'
import React from 'react'
interface NavbareProps {
  toggleSidebar: () => void
}
function HomeNavbare({ toggleSidebar }: NavbareProps) {
  return (
    <Navbare toggleSidebar={toggleSidebar} />
  )
}

export default HomeNavbare