import { Schema, Model, models, model } from 'mongoose'

const ProjectSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  demoURL: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  projectSources: [
    {
      type: String,
      required: true,
    },
  ],
  images: [
    {
      type: String,
    },
  ],
  tags: [
    {
      type: String,
    },
  ],
  title: {
    type: String,
    required: true,
  },
})

export default models.Project || model('Project', ProjectSchema)
