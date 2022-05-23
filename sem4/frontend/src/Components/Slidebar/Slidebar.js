
import React from "react";
import { Row, Col } from "reactstrap";

const Sidebar = () => {
  
  return (
   <div style={{backgroundColor:"#66cc99"}}>
   
    <h2 style={{marginRight:"50",backgroundColor:"#66cc99",marginBottom:-10,marginLeft:550}}>ADMIN PROFILE</h2>
    
    <Row  style={{marginBottom:1000,width:1400,height:700,backgroundColor:"#66cc99",marginTop:-40}}>
  
      <Col lg={2} style={{color:"red"}} className="bg-success" >
      
        <ul className="text-white list-unstyled p-3" >
          <li style={{paddingBottom:30,paddingTop:35}}className="my-2">
            <a style={{marginBottom:4000}}
              href="/RegisterForm"
              className="text-white text-decoration-none fw-bold"
            >
              Register
            </a>
          </li>
          <li style={{paddingBottom:30}} className="my-2">
            <a
              href="Update"
              className="text-white text-decoration-none fw-bold"
            >
              Update
            </a>
          </li>
          <li style={{paddingBottom:30}} className="my-2">
            <a
              href="Event"
              className="text-white text-decoration-none fw-bold"
            >
              Event
            </a>
          </li>
          <li style={{paddingBottom:30}} className="my-2">
            <a
              href="/admin/updatewallet"
              className="text-white text-decoration-none fw-bold"
            >
              Update Wallet
            </a>
          </li>
         
         
        </ul>
      </Col>
      <Col lg={8} className="p-3">
     
        
      </Col>
     
    
    </Row>
   
    </div>
  );
};


export default Sidebar;
