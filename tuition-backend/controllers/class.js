const mongoose = require("mongoose");
const Class = require("../models/class");

exports.get_all_class = ((req,res,next) => {
  Class.find()
  .exec()
  .then((docs)=>{
   res.status(201).json({
    message:"From database, the data",
    data:docs
   })
  })
  .catch((err)=>{
    console.error(err);
    res.status(404)
    .json({
      message:"no valid entry found"
    })
  })
})

exports.create_class = async(req, res, next) => {
  try{
    const newclass = new Class({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      subject: req.body.subject,
      code: req.body.code,
      gradeLevel: req.body.gradeLevel,
      description: req.body.description,
    });

    const result = await newclass.save();

    res.status(201).json({
      message: "Created class successfully",
      classDetails: {
        _id: result._id,
        name: result.name,
        code: result.code,
        subject: result.subject,
        gradeLevel: result.gradeLevel,
        description: result.description,
      },
    });
  } catch(error){
    console.log(error);
    res.status(500).json({error:error.message});
  }
}

exports.get_one_class = (req,res,next)=>{
  const id =req.params.classid;
  Class.findById(id)
  .exec()
  .then((doc)=>{
if(doc){
  res.status(200).json({
    message:"From database",
    data:doc
  })
}
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({ error: err });
  });
}
