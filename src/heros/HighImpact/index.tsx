'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'
import { motion, easeOut } from 'framer-motion'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  }

  const mediaVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: easeOut,
      },
    },
  }

  return (
    <div
      className="relative -mt-[10.4rem] flex items-center justify-center"
      data-theme="dark"
    >
      <motion.div 
        className="container mb-8 z-10 relative flex items-center md:justify-end"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-[36.5rem] md:text-center">
          {richText && (
            <motion.div variants={itemVariants}>
              <div className="mb-6 [&_h1]:bg-gradient-to-r [&_h1]:from-amber-200 [&_h1]:via-yellow-100 [&_h1]:to-orange-200 [&_h1]:bg-clip-text [&_h1]:text-transparent [&_h1]:text-4xl [&_h1]:md:text-5xl [&_h1]:lg:text-6xl [&_h1]:font-bold [&_h1]:leading-tight [&_h1]:drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [&_p]:text-gray-100 [&_p]:text-lg [&_p]:md:text-xl [&_p]:leading-relaxed [&_p]:drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)] [&_p]:font-medium">
                <RichText data={richText} enableGutter={false} />
              </div>
            </motion.div>
          )}
          {Array.isArray(links) && links.length > 0 && (
            <motion.ul 
              className="flex md:justify-center gap-4"
              variants={itemVariants}
            >
              {links.map(({ link }, i) => {
                return (
                  <motion.li 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CMSLink {...link} />
                  </motion.li>
                )
              })}
            </motion.ul>
          )}
        </div>
      </motion.div>
      <motion.div 
        className="min-h-[80vh] select-none"
        variants={mediaVariants}
        initial="hidden"
        animate="visible"
      >
        {media && typeof media === 'object' && (
          <Media src={("https://res.cloudinary.com/dqb6ltkmy/image/upload/v1755838370/restroworks/cutlery-near-twig-leaves_wycwpx.jpg") as any} fill imgClassName="-z-10 object-cover" priority resource={media} />
        )}
      </motion.div>
    </div>
  )
}
