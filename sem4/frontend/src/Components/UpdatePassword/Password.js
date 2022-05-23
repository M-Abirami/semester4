
import { useFormik } from "formik";
import '../Cadit login/login.css'
import { useNavigate  } from "react-router-dom";


 function Password() {
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
      
      if(!values.oldpassword) 
      errors.regimentno =<p style={{color:"red"}}>field required</p>
     
      if(!values.newpassword) 
      errors.password =<p style={{color:"red"}}>field required</p>
      return errors;
    }
  });

  
  return (
    // <div>
    // <div style={{padding:'0px 340px',marginLeft:280,borderRadius:30,height:350,marginRight:210,marginBottom:100,marginTop:150,backgroundColor:"#66cc99"}}>
    <div style={{backgroundColor:"#66cc99",height:800,paddingTop:60}}>
      <div style={{alignItems:"center",backgroundColor:'white',marginLeft:300,marginRight:300,borderRadius:20,marginBlockStart:100,height:400}}>
     <h2 style={{justifycontent:40,marginLeft:190,marginBottom:30,marginTop:100,padding:20}}>UPDATE PASSWORD</h2>
   
    <form onSubmit={formik.handleSubmit}>
      
    <label style={{marginLeft:200,color:"#66cc99"}} htmlFor="password"> Old Password</label><br/>
<input style={{marginLeft:210}}
      id="password"
      name="password"
      type="password"
      onChange={formik.handleChange}
      value={formik.values.password}
    /><br/>
      {formik.errors.oldpassword ? <div>{formik.errors.oldpassword}</div> : null}

<label style={{marginLeft:200,color:"#66cc99"}} htmlFor="password"> New Password</label><br/>
<input style={{marginLeft:210}}
      id="password"
      name="password"
      type="password"
      onChange={formik.handleChange}
      value={formik.values.password}
    /><br/>
      {formik.errors.password ? <div>{formik.errors.password}</div> : null}
     
      <button 
      onClick={loginpage} 
      style={{width:150,height:40,padding:5,backgroundColor:"#66cc99",marginTop:30,marginLeft:230,marginBottom:40,borderRadius:15}}
      >Login</button>
    </form>
    </div>
    </div>
  );
}


export default Password;




