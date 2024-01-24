import users from './sysUser.js' 
 
const mountRoutes = (app) => {
  app.use('/sysuser', users) 
  // etc..
}
 
export default mountRoutes
