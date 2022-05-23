import React from 'react'
import Header from '../Components/Header/header'
import { Carousel } from 'react-bootstrap';

const Home = () => {
  return (
   <div >
       <Header />
   <div style={{marginBottom:40,marginTop:30}}>
    <div className='container-fluid' >
    <div className="row">
        <div className="col-sm-12">
            <h3>NCC CADET</h3>
        </div>
    </div>
    <div className="row">
        <div className="col-12">
            <Carousel>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrfty8AnWDw81I-9gW1mncTTmOqPokzFZlBw&usqp=CAU"
                        alt="First slide"
                        height="350"
                        width="100"
                        marginLeft="500"
                        marginTop="100"
                    />
                                                  </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTypbDopjNcTTIWfXYJ8U4wsyuOpp5eqBH5CA&usqp=CAU"
                        alt="Second slide"
                        height="350"
                    />

                   
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCPSzhjPz4g-jhRcVv7oHtGWuAeNkrqi7YQ&usqp=CAU"
                        alt="Third slide"
                        height="350"
                    />
                  
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtb1zP-n2tHTwhVQISvNiFR94VNwk-wG4WjA&usqp=CAU"
                        alt="Third slide"
                        height="350"
                    />
                  
                </Carousel.Item>

            </Carousel>
            <h3 style={{paddingTop:20}}>ACHIEVEMENT BANNER</h3>
            <div style={{padding:'1px 2px',marginBottom:50,marginTop:-40}}className="App">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8XL3Um9TqaOGBS4LUOqt7oxUmpQP_Zh7O-g&usqp=CAU"
        width={400} style={{margin:'50px 80px',paddingTop:50,marginRight:50}}
          />
           
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-o9X9D5TXMP3Dm3bHYgHjWWjW03EnAd_zqQ&usqp=CAU"
        width={380} style={{margin:'50px 80px',paddingTop:50,marginRight:50}}
          />
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpmmKe0iLPTuniTP29AwcxRP79t6Is5P2w8w&usqp=CAU"
        width={380} style={{margin:'50px 80px',paddingTop:50,marginRight:100}}
          />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4WuRZ8ierydk1fFLUvrFVf_-uqFV-EtCpw&usqp=CAU"
        width={380} style={{margin:'50px 80px',paddingTop:50,marginRight:80}}
          />
          
          </div>
        </div>
    </div>
</div>
</div>
<div className="row" style={{marginBottom:'1%',backgroundColor:' #7f000e',color:'#fff'}}>
                <div className="col-sm-3">
                 
                  {/* <img src={Logo} style={{height:'70px',marginLeft:'5%'}}/> */}
                </div>
                <div className="col">
                
                  <ul>
                  <h6>Quick Links</h6>
                   
                    <li>About us</li>
                    <li>Email</li>
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

</div>
  )
}

export default Home