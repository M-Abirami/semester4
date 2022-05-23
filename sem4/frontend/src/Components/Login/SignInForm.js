import React, { useEffect, useState } from "react";
import myaxios from "../utils/axios";
import jwt_decode from "jwt-decode";


function SignInForm({ onClick }) {
  const [mailId, setmailId] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (mailId === "abirami@gmail.com" , password === "1234") {
      // alert("Fill out all the fields");
      window.location='/Admin';
    } else {
      myaxios
        .post("/login", {
          mailId: mailId,
          password: password,
        })
        .then((response) => {
          console.log(response.data);
          if (
            response.data.message === "In correct Password" ||
            response.data.message === "Username not Found"
          ) {
            alert("Incorrect Username or Password");
          
          } else  {
            localStorage.setItem("user", response.data.token);
            const loggedUser = localStorage.getItem("user");
            const decodeUser = jwt_decode(loggedUser);
            localStorage.setItem("role", decodeUser.role);

            if (decodeUser.role === "admin") {
              window.location = "/admin";
            } else {
              window.location = "/";
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    
  };
  return (
    <div style={{backgroundColor:"#66cc99",height:800,paddingTop:60}}>
     <div style={{alignItems:"center",backgroundColor:'white',marginLeft:300,marginRight:300,borderRadius:20,marginBlockStart:100,height:400}}>
        <h4 className="my-3 text-center" style={{paddingTop:20}}>ADMIN LOGIN</h4>
        <form className="text-start login_form" style={{paddingTop:50}}>
          <div className="field_container">
            <label  style={{marginLeft:200,color:"#66cc99"}}>Email Id:</label>
            <input style={{marginLeft:5}}
              type="text"
              name="username"
              className="input_field"
              placeholder="Enter Your  mailid"
              value={mailId}
              onChange={(e) => {
                setmailId(e.target.value);
              }}
            />
          </div>

          <div className="field_container">
            <label style={{marginLeft:190,color:"#66cc99"}}>Password:</label>
            <input style={{marginLeft:5}}
              type="password"
              name="password"
              className="input_field"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="text-center my-4">
            <button  
              onClick={(e) => handleSubmit(e)}
              className="btn btn-success mx-2"
            >
              Submit
            </button>
            <button 
            onClick={onClick} className="btn btn-light mx-2">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;










// import { useFormik } from "formik";
// import { useNavigate  } from "react-router-dom";


//  function SignInForm() {
//   let navigate = useNavigate(); 
// const registerpage = () => {
//   let path = `/Admin`; 
//   navigate(path);
// }
//   const formik = useFormik({
   
//   initialValues: {
//     usertype: "",
//       email: "",
//       password:""
//     },

//     // onSubmit: (values) => {
//     //   event.preventDefault();
//     // if (mobileNo === "" || password === "") {
//     //   alert("Fill out all the fields");
//     // } else {
//     //   myaxios
//     //     .post("/login", {
//     //       email: email,
//     //       password: password,
//     //     })
//     //     .then((response) => {
//     //       console.log(response.data);
//     //       if (
//     //         response.data.message === "In correct Password" ||
//     //         response.data.message === "Username not Found"
//     //       ) {
//     //         alert("Incorrect Username or Password");
//     //       } else {
//     //         localStorage.setItem("user", response.data.token);
//     //         const loggedUser = localStorage.getItem("user");
//     //         const decodeUser = jwt_decode(loggedUser);
//     //         localStorage.setItem("role", decodeUser.role);

//     //         if (decodeUser.role === "admin") {
//     //           window.location = "/admin";
//     //         } else {
//     //           window.location = "/";
//     //         }
//     //       }
//     //     })
//     //     .catch((error) => {
//     //       console.log(error);
//     //     });
//     // }
//     // },

//     validate: (values) => {
//       let errors = {};
//       if(!values.usertype) 
//       errors.usertype =<p style={{color:"red"}}>field required</p>
//       if (!values.email ) 
//       errors.email = <p style={{color:"red"}}>field required</p>
//       else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = <p style={{color:"red"}}>username should be an email</p> 
//       }
//       if(!values.password) 
//       errors.password =<p style={{color:"red"}}>field required</p>
//       return errors;
//     }
//   });
//   const handleSubmit = (event) => {
    
//   }

  
//   return (
    
   
//     <form onSubmit={formik.handleSubmit}>
      
      
      
//      <div style={{backgroundColor:"#66cc99",height:800,paddingTop:60}}>
//        <div style={{alignItems:"center",height:400,backgroundColor:'white',marginLeft:300,marginRight:300,borderRadius:20,marginBlockStart:100}}>
//       <h2 style={{alignItem:'center',marginLeft:260,paddingTop:20}}>ADMIN LOGIN</h2>
//       <label  style={{marginLeft:200,color:"#66cc99"}}htmlFor="usertype">usertype</label><br/>
//       <input style={{marginLeft:210}}
//         id="usertype"
//         name="usertype"
//         type="usertype"
//         onChange={formik.handleChange}
//         value={formik.values.usertype} 
//       />
//       {formik.errors.usertype ? <div>{formik.errors.usertype}</div> : null}<br/>
//       <label  style={{marginLeft:200,color:"#66cc99"}} htmlFor="email">Email Address</label><br/>
//       <input style={{marginLeft:210}}
// id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}

        
//         value={formik.values.email} 
//       />
//       {formik.errors.email ? <div>{formik.errors.email}</div> : null}<br/>

// <label style={{marginLeft:200,color:"#66cc99"}} htmlFor="password">Password</label><br/>
// <input style={{marginLeft:210}}
//       id="password"
//       name="password"
//       type="password"
//       onChange={formik.handleChange}
//       value={formik.values.password}
//     /><br/>
//       {formik.errors.password ? <div>{formik.errors.password}</div> : null}
     
//       <button
//       onClick={registerpage}
//          style={{width:100,height:40,backgroundColor:"#66cc99",marginTop:30,marginLeft:250,borderRadius:10}}
//       >Submit</button>
//      </div>
//       </div>
//     </form>
  
    
//   );
  
// }

// export default SignInForm;


