import user from './api/user/index.js'

function routes(app) {
  app.use('/api/users', user)
}

export default routes
