const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("../models/user");

exports.users_create_sign = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(404).json({
          message: "Mail already exists",
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              name: req.body.name,
              email: req.body.email,
              password: hash,
            });
            user
              .save()
              .then((result) => {
                console.log(result);
                res.status(201).json({
                  message: "User Created",
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  error: err,
                });
              });
          }
        });
      }
    });
};

exports.users_login = (req,res,next)=>{
User.find({email:req.body.email})
.exec()
.then((user) =>{
  console.log(user);
  if(user.length < 1){
    return res.status(401).json({
      message:"Authentication failed",
    });
  }
  bcrypt.compare(req.body.password, user[0].password, (err, result) => {
    if(err){
      return res.status(401).json({
        message:"Auth failed",
      })
    }
    if (result){
      return res.status(200).json({
        message: "Auth successful"
      })
    }
    res.status(401).json({
      message:" Auth failed"
    })
  })
})
.catch((err)=>{
  console.log(err)
  res.status(500).json({
    error:err
  })
})
}

exports.user_delete = (req, res, next) =>{
  User.deleteOne({_id:req.params.userId})
  .exec()
  .then((user)=>{
    if (user){
      res.status(200).json({
        message: "User deleted",
      })
    }
    else{
      res.status(404).json({
        message:"No user to delete"
      })
    }
    
  })
  .catch((err)=>{
    console.log(err);
    res.status(500).json({
      error:err,
    })
  })
}