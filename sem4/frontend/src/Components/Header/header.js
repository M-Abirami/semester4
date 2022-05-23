import React, { useState, useEffect } from "react";
//  import { useNavigate  } from 'react-router-dom'
import { Carousel } from "react-bootstrap";

import {
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import PrimaryButton, { SecondaryButton } from "../Buttons/CustomButton";

import "./style.css";



function Header() {
  // const navigate  = useNavigate ()
  const [loginModal, setloginModal] = useState(false);
  const [signupModal, setsignUpModal] = useState(false);

  const menus = () => {
    return (
      <div
        style={{
          alignItems: "end",
          marginRight: 40,
          paddingRight: 3,
          borderRadius: 50,
          marginLeft: 400,
          marginTop: 20,
          marginBottom: -20,
          paddingTop: 5,
          marginBlockStart: -120,
        }}
      >
        {" "}
        <a
          style={{
            marginBottom: 500,
            alignItems: "center",
            marginTop: 3000,
            marginBottom: 90,
          }}
          onClick={() => setloginModal(true)}
          className="nav_link"
        >
          Signin
        </a>
      </div>
    );
  };

  const renderButtons = menus();
  
  return (
    <div >
      {/* Main Header */}
      <div className="navbar">
        {/* <Container> */}
        <div className="nav_logo">
          <a href="/" className="logo fw-bold fs-1 text-decoration-none">
            <img
              src="logo.png" 
              alt="logo"
            />
          </a>
        </div>
        {renderButtons}

        {/* </Container> */}
      </div>

     
      <Modal isOpen={loginModal} toggle={() => setloginModal(false)}>
        <a
          href="/SignInForm"
          variant="default"
          style={{
            color: "white",
            background: "silver",
            alignItems: "center",
            marginBottom: 50,
            padding: 15,
            marginTop: 40,
            marginLeft: 100,
            width: 250,
            borderRadius:15
          }}

          // onClick={()=>onClickAdmin()}
        >
          ADMIN LOGIN
        </a>
        <a
          href="/cadit"
          variant="default"
          style={{
            color: "white",
            background: "silver",
            marginBottom: 70,
            padding: 13,
            marginTop: -40,
            marginLeft: 100,
            width: 250,
            borderRadius:15
          }}
          // onClick={()=>onClickCadit()}
        >
          CADET LOGIN
        </a>
             </Modal>
     
     
    </div>
   

  );
}

export default Header;




