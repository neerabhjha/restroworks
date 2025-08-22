import React from 'react'

import type { TestimonialBlock as TestimonialBlockType } from '@/payload-types'

import { Media } from '@/components/Media'

export const TestimonialBlock: React.FC<
TestimonialBlockType & { disableInnerContainer?: boolean }
> = (props) => {
  const { quote, authorName, authorTitle, authorAvatar, disableInnerContainer } = props

  return (
    <section className="container">
      <div className={disableInnerContainer ? '' : 'container'}>
        <div className="p-6 border border-border rounded-xl bg-muted/30">
          <blockquote className="text-lg italic">“{quote}”</blockquote>
          <div className="mt-4 flex items-center gap-3">
            {authorAvatar && (
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Media resource={authorAvatar} imgClassName="w-10 h-10 object-cover" />
              </div>
            )}
            <div>
              <div className="font-medium">{authorName}</div>
              {authorTitle && <div className="text-sm text-muted-foreground">{authorTitle}</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


