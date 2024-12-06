import React from 'react'
import Link from 'next/link'
import "../Style/best.css"
import Image from 'next/image'
import shirt from "../../Public/Images/myShirt.jpeg"
import bag from "../../Public/Images/bag.jpeg"
import speaker from "../../Public/Images/speaker.jpeg"
import chair from "../../Public/Images/chair.jpeg"

const bestProducts = () => {
  return (
    <div className="main-div">
         <div className="bestHeader">
        <div className='subHeader'>
            <div className="headings">
                <div className="today">
                <div className="red"></div>
                    <div className="Todays">This Month</div>
                </div>
                <div className="selling">
                    <p>Best Selling Products</p>
                </div>
            </div>
          
        </div>
        <div className="headerButton">
            <button>View all</button>
        </div>
      </div> 
      <div className="shoppingDiv">
      <div className="firstThing">
          <div className="joystickDiv">
          <div className="priceCut">-40%</div>
            <div className="ImageDiv">
              <div className='JoystickImage'><Image src={shirt} alt='joystickPic' /></div>
            </div>
          </div>
          <div className="textdiv">
            <div className='joyName'>coat</div>
            <div className="joyPrice">
              <div className='pric'>
              <span className='now'>$260</span>
              <span className='before'>$360</span>
              </div>
            </div>
            <div className="fiveStar"> 
              <span className="star" data-value="1">&#9733;</span>
              <span className="star" data-value="2">&#9733;</span>
              <span className="star" data-value="3">&#9733;</span>
              <span className="star" data-value="4">&#9733;</span>
              <span className="star" data-value="5">&#9733;</span>
              <span className="numberDiv">(65)</span>
              </div> 
          </div>
        </div>
        <div className="secondThing">
        <div className="joystickDiv">
        <div className="pricedown">-40%</div>
            <div className="ImageDiv">
              <div className='JoystickImage'><Image src={bag} alt='joystickPic' /></div>
            </div>
          </div>
          <div className="textdiv">
            <span className='joyName'>Gucci duffle bag</span>
            <div className="joyPrice">
              <span className='now'>$960</span>
              <span className='before'>$1160</span> 
            </div>
          
          <div className="myStars"> 
              <span className="star" data-value="1">&#9733;</span>
              <span className="star" data-value="2">&#9733;</span>
              <span className="star" data-value="3">&#9733;</span>
              <span className="star" data-value="4">&#9733;</span>
              <span className="star" data-value="5">&#9733;</span>
              <span className="numberDiv">(65)</span>
              </div> 
              </div>
        </div>
        <div className="thirdThing">
        <div className="joystickDiv">
        <div className="pricedec">-40%</div>
            <div className="ImageDiv">
              <div className='JoystickImage'><Image src={speaker} alt='joystickPic' /></div>
            </div>
          </div>
          <div className="textdiv">
            <span className='joyName'>RGB liquid CPU Cooler</span>
            <div className="joyPrice">
              <span className='now'>$160</span>
              <span className='before'>$170</span>
              
            </div>
          
          <div className="fiveStar"> 
              <span className="star" data-value="1">&#9733;</span>
              <span className="star" data-value="2">&#9733;</span>
              <span className="star" data-value="3">&#9733;</span>
              <span className="star" data-value="4">&#9733;</span>
              <span className="star" data-value="5">&#9733;</span>
              <span className="numberDiv">(65)</span>
              </div> 
              </div>
        </div>
        <div className="fourthThing">
        <div className="joystickDiv">
            <div className="lastPrice">-25%</div>
            <div className="ImageDiv">
              <div className='JoystickImage'><Image src={chair} alt='joystickPic' /></div>
            </div>
          </div>
          <div className="textdiv">
            <span className='joyName'>Small BookSelf </span>
            <div className="joyPrice">
              <span className='now'>$360</span>
              
            </div>
            <div className="fiveStar"> 
              <span className="star" data-value="1">&#9733;</span>
              <span className="star" data-value="2">&#9733;</span>
              <span className="star" data-value="3">&#9733;</span>
              <span className="star" data-value="4">&#9733;</span>
              <span className="star" data-value="5">&#9733;</span>
              <span className="numberDiv">(65)</span>
              </div> 
          </div>
          
        </div>
      
        
      </div>
      </div>
    
  )
}

export default bestProducts
