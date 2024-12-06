import Link from 'next/link'
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import "../Style/nav.css"

const nav = () => {
  return(
    
    <div className="lowerHeader">
            <h3 className='font-bold h-[24px] w-[118px]'>Exclusive</h3>
            <Link href="/">Home</Link>
            <Link href="">About</Link>
            <Link href="">Contact</Link>
            <Link href="">SignUp</Link>
            <div className="search-bar">
              <input type="text" placeholder='what are you looking for?'/>
              <span><CiSearch /></span>
              <div className='icon'>
                <span><CiHeart /></span>
                <span><IoCartOutline /></span>
              </div>
            </div>
            </div>
            
  )
  
}

export default nav
