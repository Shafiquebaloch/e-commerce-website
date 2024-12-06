import React from 'react'
import "@/Style/footer.css"


const Footer = () => {
  return (
    <div>

      <div className="footer">
        <div className="subscribe">
          <h3>
            Exclusive
          </h3>
          <p>
            Subscribe
          </p>
          <p>
            Get 10% off your first order
          </p>
          <div>
            <input placeholder="Enter your email" type="email"/>
            <button>
              <i className="fas fa-paper-plane">
              </i>
            </button>
          </div>
        </div>
        <div className="support">
          <h3>
            Support
          </h3>
          <p>
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p>
            exclusive@gmail.com
          </p>
          <p>
            +88015-88888-9999
          </p>
        </div>
        <div className="account">
          <h3>
            Account
          </h3>
          <p>
            <a href="#">
              My Account
            </a>
          </p>
          <p>
            <a href="#">
              Login / Register
            </a>
          </p>
          <p>
            <a href="#">
              Cart
            </a>
          </p>
          <p>
            <a href="#">
              Wishlist
            </a>
          </p>
          <p>
            <a href="#">
              Shop
            </a>
          </p>
        </div>
        <div className="quick-link">
          <h3>
            Quick Link
          </h3>
          <p>
            <a href="#">
              Privacy Policy
            </a>
          </p>
          <p>
            <a href="#">
              Terms Of Use
            </a>
          </p>
          <p>
            <a href="#">
              FAQ
            </a>
          </p>
          <p>
            <a href="#">
              Contact
            </a>
          </p>
        </div>
        <div className="download-app">
          <h3>
            Download App
          </h3>
          <p>
            Save $3 with App New User Only
          </p>
          <div className="qr-code">
            <img alt="QR code for app download" height="100" src="https://storage.googleapis.com/a1aa/image/ZTNuyqqieWzsB6hecjh0wa0tWj1wZdxUcOXEov1UEexDjVwnA.jpg" width="100"/>
            <div>
              <img alt="Google Play Store badge" height="50" src="https://storage.googleapis.com/a1aa/image/mkxaeXOv6v2gGisG3q4ceeueOUIVd9p15RPYfL1TJgJ8LWBfE.jpg" width="150"/>
              <img alt="Apple App Store badge" height="50" src="https://storage.googleapis.com/a1aa/image/udVHn1USbEpaFZhhdGlQu0u9EDRsqvtOKk8TIwJLqJaXsCeJA.jpg" width="150"/>
            </div>
          </div>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f">
              </i>
            </a>
            <a href="#">
              <i className="fab fa-twitter">
              </i>
            </a>
            <a href="#">
              <i className="fab fa-instagram">
              </i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in">
              </i>
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>
            © Copyright Rimel 2022. All right reserved
          </p>
        </div>
      </div>

    </div>
  )
}

export default Footer
