import { Schema, models, model } from 'mongoose'

const ProjectSchema = new Schema(
  {
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
    projectSource: {
      type: String,
      required: true,
    },
    images: {
      cover: { type: [String], required: true },
      misc: { type: [String] },
    },
    tags: [String],
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export default models.Project || model('Project', ProjectSchema)
