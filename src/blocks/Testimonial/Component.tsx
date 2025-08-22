'use client'
import React from 'react'
import { motion, easeOut } from 'framer-motion'

import type { TestimonialBlock as TestimonialBlockType } from '@/payload-types'

import { Media } from '@/components/Media'

export const TestimonialBlock: React.FC<
TestimonialBlockType & { disableInnerContainer?: boolean }
> = (props) => {
  const { quote, authorName, authorTitle, authorAvatar, disableInnerContainer } = props

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section className="container">
      <div className={disableInnerContainer ? '' : 'container'}>
        <motion.div 
          className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 via-gray-800/90 to-gray-900/80 border border-gray-700/50 backdrop-blur-sm shadow-2xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)",
            transition: { duration: 0.3 }
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 rounded-t-2xl"></div>
          
          <motion.blockquote 
            className="text-xl md:text-2xl italic text-gray-100 leading-relaxed relative z-10"
            variants={itemVariants}
          >
            "{quote}"
          </motion.blockquote>
          <motion.div 
            className="mt-6 flex items-center gap-4 pt-4 border-t border-gray-700/50"
            variants={itemVariants}
          >
            {authorAvatar && (
              <motion.div 
                className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-amber-400/30 shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Media resource={authorAvatar} imgClassName="w-12 h-12 object-cover" />
              </motion.div>
            )}
            <div>
              <div className="font-semibold text-gray-100 text-lg">{authorName}</div>
              {authorTitle && (
                <div className="text-sm text-amber-400/80 font-medium">{authorTitle}</div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


