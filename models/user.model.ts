import { IUser } from '@/types'
import { Schema, models, model } from 'mongoose'

const UserSchema = new Schema<IUser>(
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

export default models.User<IUser> || model<IUser>('User', UserSchema)
