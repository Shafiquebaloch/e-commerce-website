import React from 'react'
import "../Style/categories.css"
import Link from 'next/link'
import { BiRightArrowAlt } from "react-icons/bi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";
const icons = () => {
  return (
    <div className="Myicons">
      <div className="categoryItem">
        <div className="categoryHeading">
        <div className="today">
                    <div className="red"></div>
                    <span className="categoriesText">Categories</span>
                </div>
                <div className="flash">
                    <p>Browse By Category</p>
                </div>
        </div>
        <div className="arrows">
        <span className="leftArrow"><BiLeftArrowAlt /></span>
          <span className="rightArrow"><BiRightArrowAlt />
          </span>
        </div>
      </div>
      <div className="pics">
        <div className="firsticon">
          <div className="phoneicon">
            <span className="iconSize"><IoIosPhonePortrait /></span>
            
          </div>
          <div className="vectorText">
          <span className="text">Phones</span>
          </div>
      </div>
      <div className="secondIcon">
      <div className="phoneicon">
            <span className="iconSize"><HiOutlineComputerDesktop /></span>
            
          </div>
          <div className="vectorText">
          <span className="text">Computers</span>
          </div>
      </div>
      <div className="thirdIcon">
      <div className="phoneicon">
            <span className="iconSize"><BsSmartwatch /></span>
            
          </div>
          <div className="vectorText">
          <span className="text">SmartWatch</span>
          </div>
      </div>
      <div className="fourthIcon">
      <div className="phoneicon">
            <span className="iconSize"><IoCameraOutline />
            </span>
            
          </div>
          <div className="vectorText">
          <span className="text">Camera</span>
          </div>
      </div>
      <div className="fifthIcon">
      <div className="phoneicon">
            <span className="iconSize"><CiHeadphones /></span>
            
          </div>
          <div className="vectorText">
          <span className="text">Headphones</span>
          </div>
      </div>
      <div className="sixthIcon">
      <div className="phoneicon">
            <span className="iconSize"><LuGamepad /></span>
            
          </div>
          <div className="vectorText">
          <span className="text">Gaming</span>
          </div>
      </div>
        </div>
        
        
        
    </div>
  )
}

export default icons
