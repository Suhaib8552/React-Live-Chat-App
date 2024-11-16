import React from 'react'

function Footer() {
  return (
    <div className="footer">
        <div className="contact">
            <p>Contact us:</p>
            <p>suhaibmirza715@gmail.com</p>
            <p>7017640024</p>
        </div>
        <div className="copyright">@Copyright{new Date().getFullYear()}</div>
    </div>
  )
}

export default Footer;