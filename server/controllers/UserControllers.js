import generatenewtoken from "../generatingtoken.js";

import User from "../models/Usermodel.js";

const Authenticatingusers = async (req, res) => {
  const { Email, Password } = req.body;
  const user = await User.findOne({ Email: Email });
  if (user && (await user.matchPassword(Password))) {
    res.json({
      _id: user._id,
      Name: user.Name,
      Email: user.Email,
      IsAdmin: user.IsAdmin,
      token: generatenewtoken(user._id),
    });
  } else {
    res.status(401).send("invalid email or password");
  }
};

const RegisteringUsers = async (req, res) => {
  try {
    const { Name, Email, Password } = req.body;
    const userpresent = await User.findOne({ Email: Email });

    if (userpresent) {
      res.status(400).json("user exists");
      //    throw new Error (" user already exists in the database")
    }
    const user = await User.create({
      Name,
      Email,
      Password,
    });
    if (user) {
      res.status(201).json({
        _id: user._id,
        Name: user.Name,
        Email: user.Email,
        IsAdmin: user.IsAdmin,
        token: generatenewtoken(user._id),
      });
    } else {
      res.status(400).json("invalid details");
      //    throw new Error("invalid data")
    }
  } catch (error) {
    res.json(error);
  }
};

const Profileofusers = async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res
      .json({
        _id: user._id,
        Name: user.Name,
        Email: user.Email,
        IsAdmin: user.IsAdmin,
      })
      .status(200);
  } else {
    res.json("user not found").status(400);
  }
};
//admin controllers
const allusers = async (req, res) => {
  const user = await User.find();
  res.json(user);
};
const singleuser = async (req, res) => {
  const user = await User.findById(req.params.id).select("-Password");
  res.json(user);
};
const deleteusers = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  res.json(user);
};
const updatinguser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    user.Name = req.body.Name;
    user.Email = req.body.Email;
    user.IsAdmin = req.body.IsAdmin;

    const updateduser = await user.save();
    res.json({
      _id: updateduser._id,
      Name: updateduser.Name,
      Email: updateduser.Email,
      IsAdmin: updateduser.IsAdmin,
      token: generatenewtoken(updateduser._id),
    });
  } else {
    res.json("user not found").status(400);
  }
};

export {
  Authenticatingusers,
  Profileofusers,
  RegisteringUsers,
  allusers,
  deleteusers,
  updatinguser,
  singleuser,
};
