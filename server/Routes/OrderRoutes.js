import express from 'express';
const router=express.Router();
 import {creatingOrder, myorders, singleorder,totalorders,deleteorders,updatingorder} from '../controllers/OrderControllers.js'
import {protectede,admin} from '../middleware/Authentication.js'

router.get("/totalorders",protectede,admin,totalorders);
router.delete("/delete/:id",protectede,admin,deleteorders);

router.post("/",protectede,creatingOrder)
router.get("/myorders",protectede,myorders)

router.get("/:id",protectede,singleorder)
router.put("/updateorder/:id",protectede,admin,updatingorder)

export default router;