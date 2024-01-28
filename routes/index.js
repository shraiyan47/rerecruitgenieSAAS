import users from './sysUser.js' 
 
const mountRoutes = (app) => {
  app.use('/sysuser', users)
}
 
export default mountRoutes
