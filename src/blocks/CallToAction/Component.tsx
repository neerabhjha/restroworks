'use client'
import React from 'react'
import { motion, easeOut } from 'framer-motion'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

export const CallToActionBlock: React.FC<CTABlockProps> = ({ links, richText }) => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  }

  return (
    <div className="container">
      <motion.div 
        className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-900/90 via-gray-800/95 to-gray-900/90 border border-gray-700/50 backdrop-blur-sm shadow-2xl overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{ 
          scale: 1.01,
          boxShadow: "0 25px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)",
          transition: { duration: 0.3 }
        }}
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 via-orange-400/5 to-red-400/5"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-orange-400/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-tr from-red-400/10 to-orange-400/10 rounded-full blur-xl"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
          <motion.div 
            className="max-w-[48rem] flex items-center"
            variants={itemVariants}
          >
            <div className="[&_h1]:text-3xl [&_h1]:md:text-4xl [&_h1]:font-bold [&_h1]:text-gray-100 [&_h1]:mb-4 [&_h1]:bg-gradient-to-r [&_h1]:from-amber-200 [&_h1]:via-yellow-100 [&_h1]:to-orange-200 [&_h1]:bg-clip-text [&_h1]:text-transparent [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-semibold [&_h2]:text-gray-100 [&_h2]:mb-3 [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:font-semibold [&_h3]:text-gray-100 [&_h3]:mb-2 [&_p]:text-gray-200 [&_p]:text-lg [&_p]:md:text-xl [&_p]:leading-relaxed [&_p]:font-medium">
              {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
            </div>
          </motion.div>
          <motion.div 
            className="flex flex-col gap-4 md:gap-6"
            variants={buttonVariants}
          >
            {(links || []).map(({ link }, i) => {
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="relative group"
                >
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 rounded-lg blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="relative">
                    <CMSLink size="lg" {...link} />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
