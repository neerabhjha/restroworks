import React from 'react'

import type { FeatureBlock as FeatureBlockType } from '@/payload-types'

import { Media } from '@/components/Media'

export const FeatureBlock: React.FC<FeatureBlockType & { disableInnerContainer?: boolean }> = (
  props,
) => {
  const { title, description, icon, disableInnerContainer } = props

  return (
    <section className="container ">
      <div className={disableInnerContainer ? '' : 'container'}>
        <div className="flex items-start gap-4 border">
          {icon && (
            <div className="w-10 h-10 shrink-0">
              <Media resource={icon} imgClassName="w-10 h-10" />
            </div>
          )}
          <div className='bg-red-500'>
            {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
            {description && (
              // @ts-expect-error richText is serialized
              <div className="prose dark:prose-invert">{description}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}


