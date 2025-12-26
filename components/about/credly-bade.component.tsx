'use client'

import { useEffect } from 'react'

export default function CredlyBadge() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://www.credly.com/assets/utilities/embed.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <div
        data-iframe-width='150'
        data-iframe-height='270'
        data-share-badge-id='2815c64d-71d4-454a-89ee-ea3b508db027'
        data-share-badge-host='https://www.credly.com'
      ></div>
    </>
  )
}
