import React from 'react'
import "../Style/hero.css"
import Image from 'next/image'
import { SlArrowRight } from "react-icons/sl";
import Img from "../../Public/Images/1.jpeg"
import appleImg from "../../Public/Images/apple.png"

const Hero = () => {
  return (
    
  <div>
      <div className="items">
      <div className="flex flex-row items-start p-0 gap-[51px] w-[217px] h-[24px]">
      Woman's Fashion
      <span><SlArrowRight /></span>
     </div>
     <div className="flex flex-row items-start p-0 gap-[75px] w-[217px] h-[24px]">
       Men's Fashion
      <span><SlArrowRight /></span>
     </div>
      <p>Electronics</p>
      <p>Home & Lifestyle</p>
      <p>Medicine</p>
      <p>Sports & outdoor</p>
      <p>Babys & Toys</p>
      <p>Groceries & Pets</p>
      <p>Health & beauty</p>
  </div>
  <div className="picture">
    <div className='appleDiv'>
      <Image src={appleImg} alt='appple img' width={40} height={49} className='apple'/>
      </div>
      <p className="iphone">iPhone 14 Series</p>
    
      
      <h2 className="iphonedes">Up to 10% off Voucher</h2>
      <h4 className="icon">Shop Now</h4>
      <div className="img">
          <Image src={Img} alt='Iphone Pic' width={496} height={320}/>
  </div>
  </div>
  </div> 
    
  )
}

export default Hero


{/* <div>
<div className="items">
      <p>Womans Fashion</p>
      <p>Mens' Fashion</p>
      <p>Electronics</p>
      <p>Home & Lifestyle</p>
      <p>Medicine</p>
      <p>Sports & outdoor</p>
      <p>Baby's & Toys</p>
      <p>Groceries & Pets</p>
      <p>Health & beauty</p>
  </div>
  <div className="picture">
      <p className="iphone">iPhone 14 Series</p>
      <h2 className="iphonedes">Up to 10% off Voucher</h2>
      <h4 className="icon">Shop Now</h4>
      <div className="img">
          {/* <Image src={Img} alt='Iphone Pic'> */}
  /*</div>
  </div>
  </div> }*/