import React from "react";
import { useNavigate  } from "react-router-dom";
function  Logout() {
    let navigate = useNavigate(); 
    const logout = () => {
      let path = `/`; 
      navigate(path);
    }
   return (
    // <div>
    // <div style={{padding:'0px 340px',marginLeft:280,borderRadius:30,height:350,marginRight:210,marginBottom:100,marginTop:150,backgroundColor:"#66cc99"}}>
    <div style={{backgroundColor:"#66cc99",height:700,paddingTop:60}}>
      <div style={{alignItems:"center",backgroundColor:'white',marginLeft:300,marginRight:300,borderRadius:20,marginBlockStart:100,height:300}}>
     <h2 style={{justifycontent:40,marginLeft:260,marginBottom:30,marginTop:100,padding:20}}>LOGOUT</h2>
   
   
      
      
      <button 
   onClick={logout}
      style={{width:150,height:40,padding:5,backgroundColor:"#66cc99",marginTop:30,marginLeft:275,flexDirection:"row",borderRadius:15}}
      >Logout</button>
      
   
    </div>
    </div>
  );
}


export default Logout;




