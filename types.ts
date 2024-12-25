import { FieldValue, Timestamp } from 'firebase/firestore'

export type Tag =
  | 'typescript'
  | 'react'
  | 'redux'
  | 'styled-components'
  | 'firebase'
  | 'mongodb'
  | 'mongoose'
  | 'html'
  | 'css'
  | 'javascript'
  | 'nextjs'
  | 'api'
  | 'tailwindcss'
  | 'express'
  | 'node'
  | 'auth'
  | 'leaflet'
  | 'cloudinary'

export type TagWithIcon = {
  tag: Tag
  icon: React.ReactNode
}

export type Project = {
  id?: string
  title: string
  description: string
  imageUrl: string
  githubUrl: string
  demoUrl: string
  tags: Tag[]
  createdAt?: FieldValue | Timestamp
}
