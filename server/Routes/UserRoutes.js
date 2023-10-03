import express from 'express';
const router=express.Router();
 import {Authenticatingusers,deleteusers,singleuser,updatinguser,  allusers, RegisteringUsers,Profileofusers} from '../controllers/UserControllers.js'
import {protectede,admin} from '../middleware/Authentication.js'

router.post("/loginuser",Authenticatingusers)
router.get("/userprofile",protectede,Profileofusers)
router.post("/Registration",RegisteringUsers);
//admin routes
router.get("/allusers",protectede,admin,allusers);
router.delete("/delete/:id",protectede,admin,deleteusers);
router.get("/singleuser/:id",protectede,admin,singleuser);
router.put("/updateuser/:id",protectede,admin,updatinguser);
export default router;