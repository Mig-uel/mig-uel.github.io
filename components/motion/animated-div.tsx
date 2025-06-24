'use client'

import { motion } from 'motion/react'

export default function AnimatedDiv({
  className = '',
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <motion.div
      className={className}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}
