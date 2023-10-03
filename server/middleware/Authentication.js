import jwt from "jsonwebtoken";
import User from "../models/Usermodel.js";

const JWT_TOKEN = "SAN3005";
const protectede = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const dec = jwt.verify(token, JWT_TOKEN);

      req.user = await User.findById(dec.id).select("-Password");
      next();
    } catch (error) {
      console.error(error);
      res.json("error");
      res.status(401);
      throw new Error("not authrorized");
    }
  }
};
const admin = (req, res, next) => {
  if (req.user && req.user.IsAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("not authorized");
  }
};
export { protectede, admin };
