import React from 'react'
import "../Style/shop.css"
import Image from 'next/image'
import joystick from "../../Public/Images/joystick.png"
import keyboard from "../../Public/Images/keyboard.png"
import LCD from "../../Public/Images/LCD.png"
import chair from "../../Public/Images/chair.png"

const shop = () => {
  return (
    <div className='shop'>
      <div className="shopheader">
        <div className='shoptimings'>
            <div className="headings">
                <div className="today">
                <div className="red"></div>
                    <span className="Todays">Today's</span>
                </div>
                <div className="flash">
                    <p>Flash Sales</p>
                </div>
            </div>
            <div className="time">
            <div className="dayDiv">
                <span className="days">Days</span>
                <div className="Day">03</div>
            </div>
            <div className="HourDiv">
                <span className="Hours">Hours</span>
                <div className="hour">08</div>
            </div>
            <div className="MinutesDiv"> 
            <span className="minutes">Minutes</span>
                <div className="minute">16</div>
            </div>
            <div className="secondsDiv">
                <div className="Seconds">seconds</div>
                <div className="Second">40</div>
            </div>
            </div>
        </div>
      </div> 
      <div className="shopthings">
        <div className="firstThing">
          <div className="joystickDiv">
          <div className="priceCut">-40%</div>
            <div className="ImageDiv">
              <div className='JoystickImage'><Image src={joystick} alt='joystickPic' /></div>
            </div>
          </div>
          <div className="textdiv">
            <div className='joyName'>HAVIT HV-G92 Gamepad</div>
            <div className="joyPrice">
              <div className='pric'>
              <span className='now'>$120</span>
              <span className='before'>$160</span>
              </div>
            </div>
            <div className="fiveStar"> 
              <span className="star" data-value="1">&#9733;</span>
              <span className="star" data-value="2">&#9733;</span>
              <span className="star" data-value="3">&#9733;</span>
              <span className="star" data-value="4">&#9733;</span>
              <span className="star" data-value="5">&#9733;</span>
              <span className="numberDiv">(88)</span>
              </div> 
          </div>
        </div>
        <div className="secondThing">
        <div className="joystickDiv">
        <div className="pricedown">-40%</div>
            <div className="ImageDiv">
              <div className='JoystickImage'><Image src={keyboard} alt='joystickPic' /></div>
            </div>
          </div>
          <div className="textdiv">
            <span className='joyName'>AK-900 Wired Keyboard</span>
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
              <span className="numberDiv">(95)</span>
              </div> 
              </div>
        </div>
        <div className="thirdThing">
        <div className="joystickDiv">
        <div className="pricedec">-40%</div>
            <div className="ImageDiv">
              <div className='JoystickImage'><Image src={LCD} alt='joystickPic' /></div>
            </div>
          </div>
          <div className="textdiv">
            <span className='joyName'>IPS LCD Gaming Monitor</span>
            <div className="joyPrice">
              <span className='now'>$370</span>
              <span className='before'>$400</span>
              
            </div>
          
          <div className="fiveStar"> 
              <span className="star" data-value="1">&#9733;</span>
              <span className="star" data-value="2">&#9733;</span>
              <span className="star" data-value="3">&#9733;</span>
              <span className="star" data-value="4">&#9733;</span>
              <span className="star" data-value="5">&#9733;</span>
              <span className="numberDiv">(99)</span>
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
            <span className='joyName'>S-Series Comfort Chair </span>
            <div className="joyPrice">
              <span className='now'>$375</span>
              <span className='before'>$400</span>
              
            </div>
            <div className="fiveStar"> 
              <span className="star" data-value="1">&#9733;</span>
              <span className="star" data-value="2">&#9733;</span>
              <span className="star" data-value="3">&#9733;</span>
              <span className="star" data-value="4">&#9733;</span>
              <span className="star" data-value="5">&#9733;</span>
              <span className="numberDiv">(99)</span>
              </div> 
          </div>
          
        </div>
        
      </div>
      <div className="ButtonDiv">
        <button className="product-button">View all products</button>
        </div>
    </div>
    
  )
}

export default shop
