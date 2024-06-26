import { Types } from 'mongoose'

interface Params {
  params: {
    id: string
  }
}

interface IUser {
  firstName: string
  lastName?: string
  username?: string
  password?: string
}

interface IProject {
  _id?: Types.ObjectId | string
  user: Types.ObjectId
  demoURL: string
  description: string
  projectSource: string
  images: {
    cover: [string]
    misc?: [string]
  }
  tags: [string]
  title: string
}
