// import Router from 'express-promise-router'
import express from "express";

// import {  allUser, updateUserProfile, userDelete, userProfile } from "../controllers/userController.js";
import { createSysUser ,userProfile } from "../controllers/sysUserController/sysUserController.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// create a new express-promise-router
// this has the same API as the normal express router except
// it allows you to use async functions as route handlers
// const router = new Router()

// export our router to be mounted by the parent application
export default router

// router.put("/user-profile-update/:id", verifyUser, updateUserProfile)
// router.delete("/user-delete/:id",verifyUser, userDelete)
router.post("/create", createSysUser)
router.get("/getSingle/:id", userProfile)
// router.get("/user-list/",verifyAdmin, allUser)


// router.get('/:id', async (req, res) => {
//   const { id } = req.params
//   console.log("HIT ID -> ", id)
//   const { rows } = await db.query('SELECT * FROM SysUser WHERE firstname = $1', [id])
//   res.send(rows[0])
// })