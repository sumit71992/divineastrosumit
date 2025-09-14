'use client'

import { useEffect } from 'react'

export default function StarField() {
  useEffect(() => {
    const createStars = () => {
      const starsContainer = document.querySelector('.stars') as HTMLElement
      if (!starsContainer) return

      // Clear existing stars
      starsContainer.innerHTML = ''

      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div')
        star.className = 'star'
        star.style.left = Math.random() * 100 + '%'
        star.style.top = Math.random() * 100 + '%'
        star.style.width = Math.random() * 3 + 1 + 'px'
        star.style.height = star.style.width
        star.style.animationDelay = Math.random() * 3 + 's'
        starsContainer.appendChild(star)
      }
    }

    createStars()
  }, [])

  return <div className="stars"></div>
}