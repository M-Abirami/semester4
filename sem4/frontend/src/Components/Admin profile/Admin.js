
import React from "react";
import { Row, Col } from "reactstrap";
import "../Admin profile/Admin.css"



const Admin = () => {
  
  return (
    
    <div style={{height:650,marginRight:50,marginBottom:50,width:1500,onBlur:"true"}}
    class="bg_img"
    
  >
<h2 style={{marginRight:"50",marginBottom:-10,marginLeft:550,color:"white"}}>ADMIN PROFILE</h2>
   <div >
    <div>
     
    
    
   
           
    <Row  style={{marginBottom:1000,width:1400,height:650,marginTop:-40}}>
  
      <Col lg={2} style={{color:"red"}} className="bg-light" >
      
        <ul className="text-white list-unstyled p-3" >
          <li style={{paddingBottom:30,paddingTop:35}}className="my-2">
            <a style={{marginBottom:4000}}
              href="/RegisterForm"
              className="text-black text-decoration-none fw-bold"
            >
              REGISTER
            </a>
          </li>
          <li style={{paddingBottom:30}} className="my-2">
            <a
              href="Update"
              className="text-black text-decoration-none fw-bold"
            >
              UPDATE
            </a>
          </li>
          
          <li style={{paddingBottom:30}} className="my-2">
            <a
              href="Event"
              className="text-black text-decoration-none fw-bold"
            >
              EVENT
            </a>
          </li>
          <li style={{paddingBottom:30}} className="my-2">
            <a
              href="Card"
              className="text-black text-decoration-none fw-bold"
            >
              CADET PROFILE
            </a>
          </li>
          <li style={{paddingBottom:30}} className="my-2">
            <a
              href="Logout"
              className="text-black text-decoration-none fw-bold"
            >
              LOGOUT
            </a>
          </li>
         
         
        </ul>
      </Col>
      <Col lg={8} className="p-3">
     
        
      </Col>
     
    
    </Row>
    
    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLHo2KWdGKbY4xBXBly6tKtOHx0S_RhTMmlA&usqp=CAU"
        width={290} style={{margin:'38px 65px'}}
          /> */}
            
    </div>
   
    </div>
  
    </div>
    
  );
};


export default Admin;



// import React, { useState, useEffect } from "react";
// import '../Admin profile/Admin.css'
// function  Admin() {
    
 
 
  

//   const menus = () => {
   
//     return (
       
//       <div
     
//         style={{
//           alignItems: "end",
//           marginRight: 40,
//           paddingRight: 3,
//           borderRadius: 50,
//           marginLeft: 40,
//           marginTop: 10,
//           marginBottom: -150,
//           paddingTop: 0,
//           marginBlockStart: -120,
         
//         }}
//       >
          
//         {" "}
//         <a
//           style={{
//             marginBottom: 500,
//             alignItems: "center",
//             // marginTop: 300,
//             // marginBottom: 50,
            
//           }}
         
//           className="nav_link"
//         >
        
//         </a>
//       </div>
//     );
//   };

//   const renderButtons = menus();
  
//   return (
//     <div
//         class="bg_image"
//       >
        
//     <div>
//       {/* Main Header */}
//       <div className="nav">
//       <a
//       href="/RegisterForm"
          
         
//           style={{
//             color: "white",marginBottom: -10, padding: 13,  marginLeft: 100, width: 250,marginTop: 50
//           }}
         
//         >
//           REGISTER
//         </a>
         
//       <a
//            href="/Update"
         
//           style={{
//             color: "white",marginBottom: -10, padding: 13,  marginLeft: 100, width: 250,marginTop: 50
//           }}
         
//         >
//           UPDATE
//         </a>
//         <a
//          href="/Event"
          
//           variant="default"
//           style={{
//             color: "white",marginBottom: -10, padding: 13,  marginLeft: 100, width: 250,marginTop: 50
//           }}
         
//         >
//           EVENT FORM
//         </a>
//         <a
//            href="/Slidebar"
//           variant="default"
//           style={{
//            color:"white",marginBottom: -10, padding: 13, marginTop: -40, marginLeft: 50, width: 230,marginTop: 50
//           }}
         
//         >
//           CADET LOGIN
//         </a>
        
       
//         {/* <Container> */}
//         <div className="nav_logo">
//           <a href="/" className="logo fw-bold fs-1 text-decoration-none">
//             <img
            
             
//             />
//           </a>
//         </div>
//         {renderButtons}

//         {/* </Container> */}
//       </div>

    
     
//     </div>
//    <h2 style={{padding:20,alignItems:"center",marginRight:"50",marginLeft:545}}>ADMIN PROFILE</h2>
//      </div>
     
//   );
// }

// export default Admin;




