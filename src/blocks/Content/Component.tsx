'use client'
import { cn } from '@/utilities/ui'
import React from 'react'
import { motion, easeOut } from 'framer-motion'
import RichText from '@/components/RichText'

import type { ContentBlock as ContentBlockProps } from '@/payload-types'

import { CMSLink } from '../../components/Link'

export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const { columns } = props

  const colsSpanClasses = {
    full: '12',
    half: '6',
    oneThird: '4',
    twoThirds: '8',
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const columnVariants = {
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

  return (
    <div className="container my-16">
      <motion.div 
        className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { enableLink, link, richText, size } = col

            return (
              <motion.div
                className={cn(
                  `col-span-4 lg:col-span-${colsSpanClasses[size!]} relative overflow-hidden`,
                  {
                    'md:col-span-2': size !== 'full',
                    'p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 via-gray-800/90 to-gray-900/80 border border-gray-700/50 backdrop-blur-sm shadow-xl': size !== 'full',
                    'p-6': size === 'full',
                  }
                )}
                key={index}
                variants={columnVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Decorative gradient border for non-full columns */}
                {size !== 'full' && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400"></div>
                )}
                
                {/* Content with enhanced styling */}
                <div className="relative z-10">
                  {richText && (
                    <div className="[&_h1]:text-3xl [&_h1]:md:text-4xl [&_h1]:font-bold [&_h1]:text-gray-100 [&_h1]:mb-4 [&_h1]:bg-gradient-to-r [&_h1]:from-amber-200 [&_h1]:via-yellow-100 [&_h1]:to-orange-200 [&_h1]:bg-clip-text [&_h1]:text-transparent [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-semibold [&_h2]:text-gray-100 [&_h2]:mb-3 [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:font-semibold [&_h3]:text-gray-100 [&_h3]:mb-2 [&_p]:text-gray-200 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-gray-200 [&_ol]:text-gray-200 [&_li]:mb-2 [&_strong]:text-amber-300 [&_em]:text-orange-300">
                      <RichText data={richText} enableGutter={false} />
                    </div>
                  )}

                  {enableLink && (
                    <motion.div
                      className="mt-6"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CMSLink {...link} />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )
          })}
      </motion.div>
    </div>
  )
}
