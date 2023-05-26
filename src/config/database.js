import mongoose from 'mongoose'

export const connectDb = async () => {
  const uri = process.env.MONGO_DB_URI

  try {
    await mongoose.connect(uri)
    console.log('Connected to database')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}
