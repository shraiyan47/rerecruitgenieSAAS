import users from './sysUser.js' 
 
const mountRoutes = (app) => {
  app.use('/sys-users', users) 
  // etc..
}
 
export default mountRoutes
