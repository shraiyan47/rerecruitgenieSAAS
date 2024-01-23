import db from '../../db/dbconf.js'
import bcrypt from "bcryptjs"
import { createError } from "../../utils/error.js";

export const createSysUser = async (req, res, next) => {

    // const salt = bcrypt.genSaltSync(10);
        // const hash = bcrypt.hashSync(req.body.password, salt);
        
        
        try {
        console.log("INPUT SYS USER DATA =>", req.body)

//      const { rows } = await db.query('SELECT * FROM SysUser WHERE firstname = $1', [id])
      const { rows } = await db.query("INSERT INTO sysuser ( full_name, email, username, password) VALUES ( 'boom', 'asdf@asdf.asdf', 'asdf', '21342')")
      res.send(rows[0])
        
    } catch (error) {
        console.error("Sys User Error ===> ",error)
    }

}

export const userProfile = async (req,res,next)=>{
    try {
        const { id } = req.params
      console.log("HIT ID -> ", id)
      const { rows } = await db.query('SELECT * FROM SysUser WHERE id = $1', [id])
      res.send(rows[0])

    } catch (err) {
        next(err)
    }
}

// export const updateUserProfile = async (req,res,next) => {
    
//     try{
//         const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true})
//         res.status(200).json(updateUser)
//     }catch(err){
//         next(err)
//     }
// }

// export const allUser = async (req,res,next)=>{
//     try {
//         const usersList = await User.find()
//         res.status(200).json(usersList)

//     } catch (err) {
//         next(err)
//     }
// }

// export const userDelete = async (req,res,next)=>{
//     try {
//         const UserDelete = await User.findByIdAndDelete(req.params.id)
//         res.status(200).json(UserDelete)

//     } catch (err) {
//         next(err)
//     }
// }