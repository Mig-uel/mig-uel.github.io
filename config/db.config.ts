import mongoose from 'mongoose'

let connected = false

export const connectDB = async () => {
  try {
    if (connected) return

    await mongoose.connect(process.env.MONGODB_URI as string)
    connected = true

    console.log(`[CONNECTED] MONGODB: ${mongoose.connection.name}`)
  } catch (error) {
    connected = false
    console.log(`[ERROR]: ${(error as Error).message}`)
  }
}
