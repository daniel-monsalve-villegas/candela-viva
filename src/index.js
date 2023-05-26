import * as dotenv from 'dotenv'
import express from 'express'
import { connectDb } from './config/database.js'
import routes from './routes.js'
import morgan from 'morgan'
import configExpress from './config/express.js'

dotenv.config()

const app = express()

const port = process.env.PORT || 8080

// Setup express
configExpress(app)

// Connect to MongoDB
connectDb()

// Setup routes
routes(app)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
