'use client'
import Navbare from '@/components/organisms/navbareSection'
import React from 'react'
interface NavbareProps {
  toggleSidebar: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean
}
function HomeNavbare({toggleSidebar, open, setOpen }: NavbareProps) {
  return (
    <Navbare toggleSidebar={toggleSidebar} open={open} setOpen={setOpen}
    />)
};

export default HomeNavbare