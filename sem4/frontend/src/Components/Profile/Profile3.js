import React, { useState } from 'react';
// import { ScrollView } from '@aws-amplify/ui-react';
import { useNavigate  } from "react-router-dom";



const Profile3 = props => {
    let navigate = useNavigate(); 
    const  page= () => {
      let path = `/`; 
      navigate(path);
    }
  
  
  const [profileState, setProfileState] = useState(props);
  
  return (
    <div style={{backgroundColor:"#66cc99",height:3000,paddingTop:60}}>
    {/* <div style={{padding:'0px 300px',backgroundColor: "pink",marginLeft:"100",width:20,marginLeft:300}}> */}
    <div style={{alignItems:"center",backgroundColor:'white',marginLeft:170,marginRight:170,width:1000,height:1150,borderRadius:20,marginBlockStart:100}}> 
        <h3 style={{justifyContent:"center",alignItems:"center",marginBottom:30,paddingTop:40,marginLeft:400}}>CADET PROFILE</h3>
        <h4 style={{justifyContent:"center",alignItems:"center",marginBottom:30,marginLeft:40}}>PERSONEL DETAILS</h4>
        <p>
        <strong style={{marginLeft:140}}>Name:Priya</strong>
        {profileState.Name}
      </p>
      <p>
        <strong style={{marginLeft:140}}>Batch: 2</strong>
        {profileState.batch}
      </p>
      <p>
        <strong style={{marginLeft:140}}>dateofEntrollment:    20.07.2004</strong>
        {profileState.dateofEntrollment}
      </p>
      <p>
        <strong style={{marginLeft:140}}>EntrollingOfficer:    M.karthik</strong>
        {profileState.entrollingOfficer}
      </p>
      <p>
        <strong style={{marginLeft:140}}>RegimentNo:   3</strong>
        {profileState.regimentNo}
      </p>
      <p>
        <strong style={{marginLeft:140}}>Rank:   10</strong>
        {profileState.rank}
      </p>
      <p>
        <strong style={{marginLeft:140}}>Incharge:   arun</strong>
        {profileState.incharge}
      </p>
      <p>
        <strong style={{marginLeft:140}}>Address:  murugan nagar,coimbatore</strong>
        {profileState.address}
      </p>
      <p>
        <strong style={{marginLeft:140}}>Fathername:   D.Ranganathan</strong>
        {profileState.fathername}
      </p>
      <p>
        <strong style={{marginLeft:140}}>MotherName:    S.geetha</strong>
        {profileState.motherName}
      </p>
      <p>
        <strong style={{marginLeft:140}}>Dob:     10.03.2001</strong>
        {profileState.dob}
      </p>
      <p>
        <strong style={{marginLeft:140}}>Mobileno:     3456789456</strong>
        {profileState.mobileno}
      </p>
      <p>
        <strong style={{marginLeft:140}}>Bloodgroup:   A+</strong>
        {profileState.bloodgroup}
      </p>
      <p>
        <strong style={{marginLeft:140}}>VegorNonveg:    Veg</strong>
        {profileState.vegornonveg}
      </p>
      <h4 style={{marginBottom:30,paddingTop:40,marginLeft:40}}>BANK DETAILS</h4>
      <p>
        <strong style={{marginLeft:140}}>HolderName:     S.priya</strong>
        {profileState.holderName}
      </p>
      <p>
        <strong style={{marginLeft:140}}>Accountnumber:     1ETY45678999990</strong>
        {profileState.Accountnumber}
      </p>
      <p>
        <strong style={{marginLeft:140}}>Branch:      gandhipuram</strong>
        {profileState.branch}
      </p>
      <p>
        <strong style={{marginLeft:140}}>Ifsc code:     34BNCE5</strong>
        {profileState.ifsccode}
      </p>
      <button 
        onClick={page}
        style={{width:150,height:40,marginRight:40,marginLeft:400,marginTop:39,borderRadius:15,backgroundColor:"#66cc99"}}>Back</button>
    </div>
    </div>
  );
};

export default Profile3;
