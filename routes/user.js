import Router from 'express-promise-router'
import db from '../db/dbconf.js'
 
// create a new express-promise-router
// this has the same API as the normal express router except
// it allows you to use async functions as route handlers
const router = new Router()
 
// export our router to be mounted by the parent application
export default router
 
router.get('/:id', async (req, res) => {
    const { id } = req.params
    console.log("HIT ID -> ", id)
  const { rows } = await db.query('SELECT * FROM sys_user WHERE firstname = $1', [id])
  res.send(rows[0])
})