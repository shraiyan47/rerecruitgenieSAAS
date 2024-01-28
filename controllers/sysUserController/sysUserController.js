import db from "../../db/dbconf.js";
import bcrypt from "bcryptjs";
import { createError } from "../../utils/error.js";
import jwt from "jsonwebtoken"

export const createSysUser = async (req, res, next) => {

    try {
        console.log("INPUT SYS USER DATA =>", req.body);
        const data = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(data.password, salt);

        //      const { rows } = await db.query('SELECT * FROM SysUser WHERE firstname = $1', [id])
        const { inserting } = await db.query(
            "INSERT INTO sysuser ( full_name, email, username, password) VALUES ( $1, $2, $3, $4)", [data.full_name, data.email, data.username, hash]
        );
        // if(res.status == 200){
        res.send({"msg":"USER CREATED SUCCESSFULLY", "Registered User:":{Name:data.full_name, Email:data.email, Username:data.username, inserting}});
        // }
    } catch (error) {
        console.error("Sys User Error ===> ", error);
        res.send(["ERROR: ", error])
    }
};

export const loginSysUser = async (req, res, next) => {
    // const salt = bcrypt.genSaltSync(10);
    // const hash = bcrypt.hashSync(req.body.password, salt);
    console.log("LOGIN REQ BODY -> ", req.body)
    try {
        console.log("INPUT SYS USER DATA =>", req.body);
        const data = req.body;
        const { rows } = await db.query("SELECT * FROM sysuser WHERE email = $1", [
            data.email,
        ]);

        console.log(res)
        if (rows.length > 0) {
            // res.status(201).json(rows);
            const isPasswordCorrect = await bcrypt.compare(req.body.password, rows[0].password)
            // console.log("Password Correct", isPasswordCorrect)
            if(!isPasswordCorrect){
                res.status(404).json("Wrong Password") // letter we will return 'wrong username or password'
            }else{
                const token = jwt.sign(
                    {
                        id: rows[0].id, 
                        email: rows[0].email,
                        username: rows[0].username,
                        isactive: rows[0].isactive,
                        user_role_id: rows[0].usre_role_id
                    }, 
                        process.env.JWT_Secret
                );

                res
                .status(200)
                .json({"msg":"LOGIN SUCCESSFUL","Token":token})
                console.log("TOKEN ---> ", token)
            }

        }
        else {
            // return next(createError(404, "No user found")) 
            res.status(404).json("No User Found")
        }
    } catch (error) {
        console.error("Sys User Error ===> ", error);
        next(error)
    }
};

export const userProfile = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log("HIT ID -> ", id);
        const { rows } = await db.query("SELECT * FROM SysUser WHERE id = $1", [
            id,
        ]);
        res
        .status(200)
        .json((rows));
    } catch (err) {
        next(err);
    }
};


export const allUserProfile = async (req, res, next) => {
    try {
        // const { id } = req.params;
        // console.log("HIT ID -> ", id);
        const { rows } = await db.query("SELECT * FROM SysUser");
        res
        .status(200)
        .json((rows));
    } catch (err) {
        next(err);
    }
};

// export const updateUserProfile = async (req,res,next) => {

//     try{
//         const { rows } = await db.query("SELECT * FROM SysUser");
//         res
//         .status(200)
//         .json((rows));
//     }catch(err){
//         next(err)
//     }
// }

// export const userDelete = async (req,res,next)=>{
//     try{
//         const { rows } = await db.query("SELECT * FROM SysUser");
//         res
//         .status(200)
//         .json((rows));
//     }catch(err){
//         next(err)
//     }
// }
