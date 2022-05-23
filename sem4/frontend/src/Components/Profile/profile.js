import React, { useState } from 'react';
// import { ScrollView } from '@aws-amplify/ui-react';
import { useNavigate  } from "react-router-dom";


const Profile = props => {
  let navigate = useNavigate(); 
  const  Homepage= () => {
    let path = `/`; 
    navigate(path);
  }
  
  
  const [profileState, setProfileState] = useState(props);
  
  return (
    <div style={{backgroundColor:"#66cc99",height:3000,paddingTop:60}}>
    {/* <div style={{padding:'0px 300px',backgroundColor: "pink",marginLeft:"100",width:20,marginLeft:300}}> */}
    <div style={{alignItems:"center",backgroundColor:'white',marginLeft:170,marginRight:170,width:1000,height:1200,borderRadius:20,marginBlockStart:100}}> 
        <h3 style={{justifyContent:"center",alignItems:"center",marginBottom:30,paddingTop:40,marginLeft:400}}>CADET PROFILE</h3>
       
        <h4 style={{justifyContent:"center",alignItems:"center",marginBottom:30,marginLeft:40}}>PERSONEL DETAILS</h4>
        <p>
        <strong style={{marginLeft:140}}>Name:Abirami</strong>
        {profileState.Name}
      </p>
      <p>
        <strong style={{marginLeft:140}}>Batch: 1</strong>
        {profileState.batch}
      </p>
      <p>
        <strong style={{marginLeft:140}}>dateofEntrollment:    10.06.2020</strong>
        {profileState.dateofEntrollment}
      </p>
      <p>
        <strong style={{marginLeft:140}}>EntrollingOfficer:    s.manikandan</strong>
        {profileState.entrollingOfficer}
      </p>
      <p>
        <strong style={{marginLeft:140}}>RegimentNo:   1</strong>
        {profileState.regimentNo}
      </p>
      <p>
        <strong style={{marginLeft:140}}>Rank:   3</strong>
        {profileState.rank}
      </p>
      <p>
        <strong style={{marginLeft:140}}>Incharge:   venkat</strong>
        {profileState.incharge}
      </p>
      <p>
        <strong style={{marginLeft:140}}>Address:   santhosh nagar,kaniyur</strong>
        {profileState.address}
      </p>
      <p>
        <strong style={{marginLeft:140}}>Fathername:    B.manikandan</strong>
        {profileState.fathername}
      </p>
      <p>
        <strong style={{marginLeft:140}}>MotherName:    S.geetha</strong>
        {profileState.motherName}
      </p>
      <p>
        <strong style={{marginLeft:140}}>Dob:     20.04.1999</strong>
        {profileState.dob}
      </p>
      <p>
        <strong style={{marginLeft:140}}>Mobileno:     23456789</strong>
        {profileState.mobileno}
      </p>
      <p>
        <strong style={{marginLeft:140}}>Bloodgroup:   B+</strong>
        {profileState.bloodgroup}
      </p>
      <p>
        <strong style={{marginLeft:140}}>VegorNonveg:    Nonveg</strong>
        {profileState.vegornonveg}
      </p>
      <h4 style={{marginBottom:30,paddingTop:40,marginLeft:40}}>BANK DETAILS</h4>
      <p>
        <strong style={{marginLeft:140}}>HolderName:     M.Abirami</strong>
        {profileState.holderName}
      </p>
      <p>
        <strong style={{marginLeft:140}}>Accountnumber:     1ETY45678999990</strong>
        {profileState.Accountnumber}
      </p>
      <p>
        <strong style={{marginLeft:140}}>Branch:      kaniyur</strong>
        {profileState.branch}
      </p>
      <p>
        <strong style={{marginLeft:140}}>Ifsc code:     34BNCE5</strong>
        {profileState.ifsccode}
      </p>
      <button 
        onClick={Homepage}
      style={{width:150,height:40,marginRight:40,marginLeft:400,marginTop:39,borderRadius:15,backgroundColor:"#66cc99"}}>Back</button>
    </div>
    </div>
  );
};

export default Profile;
