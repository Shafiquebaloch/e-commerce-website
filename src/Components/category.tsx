import React from 'react'
import "../Style/category.css"
import Image from 'next/image'
import speaker from "../../Public/Images/speaker.png"

const category = () => {
  return (
    <div className="Category2">
        <div className="litleheading">
            <span>Categories</span>
        </div>
        <div className="mainHeading">
            Enhance Your Music Experience
        </div>
        <div className="circles">
            <div className="circle1">
                <div className="mytextdiv">
                    <div className="num">23</div>
                    <div className="time-div">Hours</div>
                </div>
            </div>
            <div className="circle2">
                <div className="mytextdiv">
                    <div className="num">5</div>
                    <div className="time-div">days</div>
                </div>
            </div>
            <div className="circle3">
                <div className="mytextdiv">
                    <div className="num">59</div>
                    <div className="time-div">Minutes</div>
                </div>
            </div>
            <div className="circle4">
                <div className="mytextdiv">
                    <div className="num">35</div>
                    <div className="time-div">Seconds</div>
                </div>
            </div>
        </div>
      <div className="MyImgDiv">
        <Image src={speaker} alt="speaker pic"/>
      </div>
      <div className="buttonShop">
        <button className="text-white">Buy Now !</button>
      </div>
    </div>
  )
}

export default category
