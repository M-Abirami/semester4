import React from 'react'

const Footer = () => {
  return (
   
    <div className="row" style={{marginBottom:'1%',backgroundColor:'#16334C',color:'#fff'}}>
                <div className="col-sm-3">
                 
                  {/* <img src={Logo} style={{height:'70px',marginLeft:'5%'}}/> */}
                </div>
                <div className="col">
                
                  <ul>
                  <h6>Quick Links</h6>
                    <li><a href='/'>HOME</a></li>
                    <li>About us</li>
                    <li><a href='/galllery'>Gallery</a></li>
                    <li>Halls</li>
                    <li>Contact us</li>
                  </ul>
                </div>
                <div className="col">
                  <h6>Social Networks</h6>
                  <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Linked in</li>
                  </ul>                  
                </div>
              </div>
  )
}

export default Footer;