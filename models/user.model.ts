import { Schema, models, model } from 'mongoose'

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    username: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

export default models.User || model('User', UserSchema)
