import React from 'react'
import Link from 'next/link'
// import { IconName } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";

const topHeader = () => {
  return (
    <div className='flex items-center justify-evenly bg-black text-white w-[1440px] h-[48px]'>
      
      <div className="flex">
      <p>Summer Sale For All Swim Suits And Free Express Delivery-OFF 50%!</p>
        <Link href="" className='ml-3 underline'>Shopnow</Link>
        

        

      </div>
      <div className='flex'>
        <span>English</span>
        <span className='mt-1 ml-1'><SlArrowDown /></span>
        
      </div>

    </div>
  )
}

export default topHeader
