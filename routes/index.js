import users from './user.js' 
 
const mountRoutes = (app) => {
  app.use('/users', users) 
  // etc..
}
 
export default mountRoutes
