const user = require("../model/user");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//create a new student
exports.create = (req, res) => {
  /* only hashsync create a password not hash in bcrypt */
  // console.log(req.body);
  const hashedPass = bcrypt.hashSync(req.body.password, 8);
  user
    .create({
      name: req.body.name,
      mobileNo: req.body.mobileNo,
      password: hashedPass,
      email: req.body.email,
      batch:req.body.batch,
      dateOfEnroll:req.body.dateOfEnroll,
      EnrollingOfficer:req.body.EnrollingOfficer,
    regimentNo:req.body.regimentNo,
    rank:req.body.rank,
    incharge:req.body.incharge,
    dob:req.body.dob,
    bg:req.body.bg,
    vegOrNonved:req.body.vegOrNonved,
    adharNo:req.body.adharNo,
    bankDetails:req.body.bankDetails,

    
      role: req.body.role,
      regNo: req.body.regNo,
      dept: req.body.dept,
    })
    .then((data) => {
      // console.log(data);
      res.json({ status: "ok", data: data });
    })
    .catch((err) => {
      console.log(err);
      res.json({ status: "err", err: err.message });
    });
};

// update a student
exports.updateUser = (req, res) => {
  user
    .findOneAndUpdate(
      { _id: req.body.id },
     { $set:{
        name: req.body.name,
        mobileNo: req.body.mobileNo,
        email: req.body.email,
        dept:req.body.dept,
        regNo:req.body.regNo
      }}
    )
    .then((data) => {
      res.json({message:"updated",value:data});
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Student.",
      });
    });
};

//logining in student
exports.login = (req, res) => {

  let password = req.body.password;
  user
    .findOne({  regimentNo:req.body.regimentNo })
    .then(async (data) => {
      if (!data) {
        res.json({ message: "Username not Found", status: "err" });
      } else {
        const authUser = await bcrypt.compareSync(password, data.password);
        if (authUser) {
          const token = jwt.sign(
            { id: data._id, role: data.role, balance: data.balance },
            process.env.SECRET,
            { algorithm: "HS256" }
          );
          res.header("Bearer", token);
          res.json({
            token: "Bearer " + token,
            data: data,
            status: "ok",
            message: "Successfully logged in",
          });
        } else {
          res.json({ message: "In correct Password", status: "err" });
        }
      }
    })
    .catch((err) => res.json({ status: "err", err: err.message }));
};

exports.getUser = (req, res) => {
  user
    .findOne({role:req.body.role})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getOneUser=(req,res)=>{
  user.findById({_id:req.params.id})
  .then((data)=>{
    res.send(data)
  }).catch((err)=>{
    console.log(err)
  })
}