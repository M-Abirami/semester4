import { useFormik } from "formik";
import '../Cadit login/login.css'
import { useNavigate  } from "react-router-dom";


 function LoginForm() {
  let navigate = useNavigate(); 
  const loginpage = () => {
    let path = `/Card`; 
    navigate(path);
  }
  
  const login = () => {
    let path = `/Password`; 
    navigate(path);
  }

  const formik = useFormik({
   
  initialValues: {
      regimentno: "",
      password:""
    },

    onSubmit: (values) => {
      alert("Login successFully");
    },

    validate: (values) => {
      let errors = {};
      
      if(!values.regimentno) 
      errors.regimentno =<p style={{color:"red"}}>field required</p>
     
      if(!values.password) 
      errors.password =<p style={{color:"red"}}>field required</p>
      return errors;
    }
  });

  
  return (
    // <div>
    // <div style={{padding:'0px 340px',marginLeft:280,borderRadius:30,height:350,marginRight:210,marginBottom:100,marginTop:150,backgroundColor:"#66cc99"}}>
    <div style={{backgroundColor:"#66cc99",height:800,paddingTop:60}}>
      <div style={{alignItems:"center",backgroundColor:'white',marginLeft:300,marginRight:300,borderRadius:20,marginBlockStart:100,height:400}}>
     <h2 style={{justifycontent:40,marginLeft:260,marginBottom:30,marginTop:100,padding:20}}>CADET LOGIN</h2>
   
    <form onSubmit={formik.handleSubmit}>
      
      <label style={{marginLeft:200,color:"#66cc99"}} htmlFor="regimentno">Regiment No</label><br/>
      <input style={{marginLeft:210}}
        id="regimentno"
        name="regimentno"
        type="regimentno"
        onChange={formik.handleChange}
        value={formik.values.regimentno} 
      />
      {formik.errors.regimentno ? <div>{formik.errors.regimentno}</div> : null}<br/>

<label style={{marginLeft:200,color:"#66cc99"}} htmlFor="password">Password</label><br/>
<input style={{marginLeft:210}}
      id="password"
      name="password"
      type="password"
      onChange={formik.handleChange}
      value={formik.values.password}
    /><br/>
      {formik.errors.password ? <div>{formik.errors.password}</div> : null}
      <button 
     onClick={login}
      style={{width:150,height:40,padding:5,backgroundColor:"#66cc99",marginTop:30,marginLeft:150,flexDirection:"row",borderRadius:15}}
      >Change password</button>
      <button 
      onClick={loginpage} 
      style={{width:150,height:40,padding:5,backgroundColor:"#66cc99",marginTop:30,marginLeft:25,marginBottom:40,borderRadius:15}}
      >Login</button>
    </form>
    </div>
    </div>
  );
}
 export default LoginForm;




// import React, { useEffect, useState } from "react";
// import myaxios from "../utils/axios";
// import jwt_decode from "jwt-decode";
// import "./login/Styles.css";

// function LoginPage({ onClick }) {
//   const [email, setemailNo] = useState();
//   const [password, setPassword] = useState();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (email === "" || password === "") {
//       alert("Fill out all the fields");
//     } else {
//       myaxios
//         .post("/login", {
//         email: mobileo,
//           password: password,
//         })
//         .then((response) => {
//           console.log(response.data);
//           if (
//             response.data.message === "In correct Password" ||
//             response.data.message === "Username not Found"
//           ) {
//             alert("Incorrect Username or Password");
//           } else {
//             localStorage.setItem("user", response.data.token);
//             const loggedUser = localStorage.getItem("user");
//             const decodeUser = jwt_decode(loggedUser);
//             localStorage.setItem("role", decodeUser.role);

//             if (decodeUser.role === "admin") {
//               window.location = "/admin";
//             } else {
//               window.location = "/";
//             }
//           }
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
    
//   };
//   return (
//     <div>
//       <div>
//         <h4 className="my-3 text-center">Login</h4>
//         <form className="text-start login_form">
//           <div className="field_container">
//             <label>Mobile Number</label>
//             <input
//               type="text"
//               name="username"
//               className="input_field"
//               placeholder="Enter Your mobile number"
//               value={mobileNo}
//               onChange={(e) => {
//                 setMobileNo(e.target.value);
//               }}
//             />
//           </div>

//           <div className="field_container">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               className="input_field"
//               placeholder="Enter Your Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className="text-center my-4">
//             <button
//               onClick={(e) => handleSubmit(e)}
//               className="btn btn-danger mx-2"
//             >
//               Submit
//             </button>
//             <button onClick={onClick} className="btn btn-light mx-2">
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;
