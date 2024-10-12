type Tag =
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

type TagWithIcon = {
  tag: Tag
  icon: React.ReactNode
}