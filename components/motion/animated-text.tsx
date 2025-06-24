'use client'

import { motion } from 'motion/react'

export default function AnimatedText({
  className = '',
  tag = 'h1',
  children,
}: {
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  children: React.ReactNode
}) {
  const MotionTag = motion[tag] || motion.h1

  return (
    <MotionTag
      className={className}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {children}
    </MotionTag>
  )
}
