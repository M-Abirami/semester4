

import React from "react";
import { useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import { Card,alart } from "reactstrap";
import '../Register/Register.css';
import axios from "../utils/axios";
import { useNavigate  } from "react-router-dom";
// import Slidebar from "../Slidebar/Slidebar";


const validation = {
  name: "",
  batch: "",
  dateOfEntrollment: "",
  enrollingOfficer: "",
  regimentNo: "",
  rank: "",
  incharge: "",
  address: "",
  fatherName: "",
  motherName: "",
  dob: "",
  mobileNo: "",
  bloodGroup: "",
  vegOrnonveg: "",
  adharNo: "",
  holderName: "",
  accountNumber: "",
  branch: "",
  ifscCode: "",
  dateOfpassingout: "",

 
};

const  Update = ({ onClick }) => {
//  navigate

  let navigate = useNavigate(); 
  const registerlog = () => {
    let path = `/Admin`; 
    navigate(path);
  }
  const formik = useFormik({
    initialValues: validation,
    onSubmit: (values) => {
      console.log(values);
      axios
        .post("/user", { ...values })
        .then((data) => {
          console.log(data.data.status);
        })
        .catch((err) => console.log(err.data.status));
    },
    
    validationSchema: Yup.object({
      name: Yup.string()
     
        .max(15, "Must be 15 characters or less")
        .required(" Name Required"),
        batch: Yup.string()
        .required("Reqired batch"),
        dateOfEntrollment: Yup.string()
        .required("Reqired dateOfEntrollment"),
        enrollingOfficer: Yup.string()
        .required("Reqired enrollingOfficer"),
        regimentNo: Yup.string()
        .required("Reqired regimentNo"),
        
        rank: Yup.string()
        .required("Reqired rank"),
        incharge: Yup.string()
        .required("Reqired incharge"),
       address: Yup.string()
        .required("Reqired address"),
        fatherName: Yup.string()
        .required("Reqired fatherName"),
        motherName: Yup.string()
        .required("Reqired motherName"),
        dob: Yup.string()
        .required("Reqired dob"),
      mobileNo: Yup.string()
        .required("Reqired mobile no")
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, "Must be exactly 10 digits")
        .max(10, "Must be exactly 10 digits"),
        bloodGroup: Yup.string(),
        vegOrnonveg: Yup.string(),
        adharNo: Yup.string(),
        holderName: Yup.string(),
        accountNumber: Yup.string(),
        branch: Yup.string(),
        ifscCode: Yup.string(),
        dateOfpassingout: Yup.string(),
    
    }),
  });
 
  return (
    // <div style={{padding:'0px 100px',marginLeft:200,marginRight:210,marginBottom:100,marginTop:150,backgroundColor:"#66cc99",borderRadius:20}}>
    
    <div style={{backgroundColor:"#66cc99",height:3000,paddingTop:60}}>
      
       <div style={{alignItems:"center",backgroundColor:'white',marginLeft:170,marginRight:170,width:1000,borderRadius:20,marginBlockStart:100}}>
      <h4 className="my-1 text-center"  style={{justifycontent:40,fontSize:30}}>UPDATE CADET DETAILS</h4>
      <form
        className="text-start login_form my-3"
        onSubmit={formik.handleSubmit}
      >
        <div className="field_container">
          <label  style={{marginLeft:140,color:"#66cc99"}}>Username</label>
          <input style={{width:500,marginLeft:150}}
            type="text"
            name="name"
            className={`form-control ${
              formik.errors.name ? "is-invalid" : null
            }`}
            placeholder="Enter Your name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <div className="invalid-feedback">{formik.errors.name}</div>
        </div>


        {/* ..............batch.......... */}
        <div className="field_container">
          <label style={{marginLeft:140,color:"#66cc99"}}>batch</label>
          <input style={{width:500,marginLeft:150}}
            type="text"
            name="batch"
            className={`form-control ${
              formik.errors.batch ? "is-invalid" : null
            }`}
            placeholder="Enter Your batch id"
            id="batch"
            onChange={formik.handleChange}
            value={formik.values.batch}
          />
          <div className="invalid-feedback">{formik.errors.id}</div>
        </div>

        {/* .........dateOfEntrollment..... */}
        {/* <div className="field_container">
          <label>Date Of Entrollment</label>
          <input
            type="text"
            name="dateofEntrollment"
            className={`form-control ${
              formik.errors.dateOfEntrollment ? "is-invalid" : null
            }`}
            placeholder="Enter dateofEntrollment"
            id="date of Entrollment"
            onChange={formik.handleChange}
            value={formik.values.dateOfEntrollment}
          />
          <div className="invalid-feedback">{formik.errors.dateOfEntrollment}</div>
        </div> */}
        <div className="field_container">
          <label style={{marginLeft:140,color:"#66cc99"}}>Date of Enrollment</label>
          <input style={{width:500,marginLeft:150}}
            type="text"
            name="dateOfEntrollment"
            className={`form-control ${
              formik.errors.dateOfEntrollment ? "is-invalid" : null
            }`}
            placeholder="Enter dateOfEntrollment"
            id="dateOfEntrollment"
            onChange={formik.handleChange}
            value={formik.values.dateOfEntrollment}
          />
          <div className="invalid-feedback">{formik.errors.dateOfEntrollment}</div>
        </div>

         {/* .........enrolling officer..... */}
         <div className="field_container">
          <label style={{marginLeft:140,color:"#66cc99"}}>Enrolling officer</label>
          <input style={{width:500,marginLeft:150}}
            type="text"
            name="enrollingOfficer"
            className={`form-control ${
              formik.errors.dateOfEntrollment ? "is-invalid" : null
            }`}
            placeholder="Enter enrollingOfficer name"
            id="enrollingOfficer"
            onChange={formik.handleChange}
            value={formik.values.enrollingOfficer}
          />
          <div className="invalid-feedback">{formik.errors.enrollingOfficer}</div>
        </div>
        {/* ------------regiment number-------- */}
        <div className="field_container">
          <label style={{marginLeft:140,color:"#66cc99"}}>Regiment No</label>
          <input style={{width:500,marginLeft:150}}
            type="text"
            name="regimentNo"
            className={`form-control ${
              formik.errors.regimentNo? "is-invalid" : null
            }`}
            placeholder="Enter Your regimentNo"
            id="regimentNo"
            onChange={formik.handleChange}
            value={formik.values.regimentNo}
          />
           
         <div className="invalid-feedback">{formik.errors.regimentNo}</div>
        </div>
        {/* ------------rank-------- */}
        <div className="field_container">
          <label style={{marginLeft:140,color:"#66cc99"}}>Rank</label>
          <input style={{width:500,marginLeft:150}}
            type="text"
            name="rank"
            className={`form-control ${
              formik.errors.regimentNo ? "is-invalid" : null
            }`}
            placeholder="Enter rank"
            id="rank"
            onChange={formik.handleChange}
            value={formik.values.rank}
          />
          <div className="invalid-feedback">{formik.errors.rank}</div>
        </div>
          {/* ------------incharge-------- */}
          <div className="field_container">
          <label style={{marginLeft:140,color:"#66cc99"}}>Incharge</label>
          <input style={{width:500,marginLeft:150}}
            type="text"
            name="incharge"
            className={`form-control ${
              formik.errors.incharge ? "is-invalid" : null
            }`}
            placeholder="Enter incharge name"
            id="incharge"
            onChange={formik.handleChange}
            value={formik.values.incharge}
          />
          <div className="invalid-feedback">{formik.errors.incharge}</div>
        </div>
         {/* ------------addres-------- */}
         <div className="field_container">
          <label style={{marginLeft:140,color:"#66cc99"}}>Address</label>
          <input style={{width:500,marginLeft:150}}
            type="text"
            name="address"
            className={`form-control ${
              formik.errors.address ? "is-invalid" : null
            }`}
            placeholder="Enter address"
            id="address"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          <div className="invalid-feedback">{formik.errors.address}</div>
        </div>
        
           {/* ------------fathername-------- */}

           <div className="field_container">
          <label style={{marginLeft:140,color:"#66cc99"}}>Father Name</label>
          <input style={{width:500,marginLeft:150}}
            type="text"
            name="fatherName"
            className={`form-control ${
              formik.errors.fatherName ? "is-invalid" : null
            }`}
            placeholder="Enter fatherName"
            id="fatherName"
            onChange={formik.handleChange}
            value={formik.values.fatherName}
          />
          <div className="invalid-feedback">{formik.errors.fatherName}</div>
        </div>
        
           {/* ------------fathername-------- */}

           <div className="field_container">
          <label style={{marginLeft:140,color:"#66cc99"}}>Mother Name</label>
          <input style={{width:500,marginLeft:150}}
            type="text"
            name="motherName"
            className={`form-control ${
              formik.errors.motherName ? "is-invalid" : null
            }`}
            placeholder="Enter motherName"
            id="motherName"
            onChange={formik.handleChange}
            value={formik.values.motherName}
          />
          <div className="invalid-feedback">{formik.errors.motherName}</div>
        </div>
        
           {/* ------------fathername-------- */}

           <div className="field_container">
          <label style={{marginLeft:140,color:"#66cc99"}}>dob</label>
          <input style={{width:500,marginLeft:150}}
            type="text"
            name="dob"
            className={`form-control ${
              formik.errors.dob ? "is-invalid" : null
            }`}
            placeholder="Enter dob"
            id="dob"
            onChange={formik.handleChange}
            value={formik.values.dob}
          />
          <div className="invalid-feedback">{formik.errors.dob}</div>
        </div>
          
        {/* ------------mobile number-------- */}
        <div className="field_container">
          <label style={{marginLeft:140,color:"#66cc99"}}>Mobile number</label>
          <input style={{width:500,marginLeft:150}}
            type="text"
            name="mobileNo"
            className={`form-control ${
              formik.errors.mobileNo ? "is-invalid" : null
            }`}
            placeholder="Enter Your mobileNumber"
            id="MobileNo"
            onChange={formik.handleChange}
            value={formik.values.mobileNo}
          />
           
         <div className="invalid-feedback">{formik.errors.mobileNo}</div>
        </div>
         {/* ------------ blood-------- */}
         <div className="field_container">
          <label style={{marginLeft:140,color:"#66cc99"}}>BloodGroup</label>
          <input style={{width:500,marginLeft:150}}
            type="text"
            name="bloodGroup"
            className={`form-control ${
              formik.errors.bloodGroup ? "is-invalid" : null
            }`}
            placeholder="Enter Your BloodGroup"
            id="bloodGroup"
            onChange={formik.handleChange}
            value={formik.values.bloodGroup}
          />
           
         <div className="invalid-feedback">{formik.errors.bloodGroup}</div>
        </div>
          {/* ------------ veg-------- */}
          <div className="field_container">
          <label style={{marginLeft:140,color:"#66cc99"}}>veg Or Nonveg</label>
          <input style={{width:500,marginLeft:150}}
            type="text"
            name="vegOrnonveg"
            className={`form-control ${
              formik.errors.vegOrnonveg ? "is-invalid" : null
            }`}
            placeholder="Enter vegOrnonveg"
            id="vegOrnonveg"
            onChange={formik.handleChange}
            value={formik.values.vegOrnonveg}
          />
          <div className="invalid-feedback">{formik.errors.vegOrnonveg}</div>
        </div>
        
          {/* ------------ veg-------- */}
          <div className="field_container">
          <label style={{marginLeft:140,color:"#66cc99"}}>AdharNumber</label>
          <input style={{width:500,marginLeft:150}}
            type="text"
            name="adharNo"
            className={`form-control ${
              formik.errors.adharNo ? "is-invalid" : null
            }`}
            placeholder="Enter adharNo"
            id="adharNo"
            onChange={formik.handleChange}
            value={formik.values.adharNo}
          />
           
         <div className="invalid-feedback">{formik.errors.adharNo}</div>
        </div>
        <h4 className="my-1 text-center">Bank Details</h4>
          {/* ------------ holder-------- */}
          <div className="field_container">
          <label style={{marginLeft:140,color:"#66cc99"}}>Holder Name</label>
          <input style={{width:500,marginLeft:150}}
            type="text"
            name="holderName"
            className={`form-control ${
              formik.errors.holderName ? "is-invalid" : null
            }`}
            placeholder="Enter holderName"
            id="holderName"
            onChange={formik.handleChange}
            value={formik.values.holderName}
          />
           
         <div className="invalid-feedback">{formik.errors.holderName}</div>
        </div>
         {/* ------------ ac-------- */}
         <div className="field_container">
          <label style={{marginLeft:140,color:"#66cc99"}}>Account Number</label>
          <input style={{width:500,marginLeft:150}}
            type="text"
            name="accountNumber"
            className={`form-control ${
              formik.errors.accountNumber? "is-invalid" : null
            }`}
            placeholder="Enter accountNumber"
            id="accountNumber"
            onChange={formik.handleChange}
            value={formik.values.accountNumber}
          />
           
         <div className="invalid-feedback">{formik.errors.accountNumber}</div>
        </div>

  {/* ------------ branch------- */}
  <div className="field_container">
          <label style={{marginLeft:140,color:"#66cc99"}}>Branch</label>
          <input style={{width:500,marginLeft:150}}
            type="text"
            name="branch"
            className={`form-control ${
              formik.errors.branch? "is-invalid" : null
            }`}
            placeholder="Enter branch name"
            id="branch"
            onChange={formik.handleChange}
            value={formik.values.branch}
          />
           
         <div className="invalid-feedback">{formik.errors.branch}</div>
        </div>

 {/* ------------ ifsc------- */}
 <div className="field_container">
          <label style={{marginLeft:140,color:"#66cc99"}}>Ifsc Code</label>
          <input style={{width:500,marginLeft:150}}
            type="text"
            name="ifscCode"
            className={`form-control ${
              formik.errors.ifscCode? "is-invalid" : null
            }`}
            placeholder="Enter ifscCode"
            id="ifscCode"
            onChange={formik.handleChange}
            value={formik.values.ifscCode}
          />
           
         <div className="invalid-feedback">{formik.errors.ifscCode}</div>
        </div>
 {/* ------------passout------ */}
 <div className="field_container">
          <label style={{marginLeft:140,color:"#66cc99"}}>date Of passingout</label>
          <input style={{width:500,marginLeft:150}}
            type="text"
            name="dateOfpassingout"
            className={`form-control ${
              formik.errors.dateOfpassingout? "is-invalid" : null
            }`}
            placeholder="Enter dateOfpassingout"
            id="dateOfpassingout"
            onChange={formik.handleChange}
            value={formik.values.dateOfpassingout}
          />
           
         <div className="invalid-feedback">{formik.errors.dateOfpassingout}</div>
        </div>

        <div className="text-center my-4">
          <button   onClick={registerlog}
          className="btn btn-warning text-white"  style={{width:100,height:40,padding:10,backgroundColor:"lightgreen",marginTop:30,marginRight:40}}
          type="submit">
            Update
          </button>
          <button onClick={onClick} className="btn btn-light mx-2"  style={{width:100,height:40,padding:10,backgroundColor:"lightgreen",marginTop:30,marginRight:40}}>
            Cancel
          </button>
        </div>
       
      </form>
    </div>
    </div>
  );
};
export default Update;
