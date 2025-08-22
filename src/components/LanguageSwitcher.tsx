"use client"
import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const locales = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'Hindi' },
]

export const LanguageSwitcher: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const search = useSearchParams()
  const current = search.get('locale') || 'en'

  function onChange(next: string) {
    const params = new URLSearchParams(search?.toString())
    params.set('locale', next)
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <Select value={current} onValueChange={onChange}>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {locales.map((l) => (
          <SelectItem key={l.code} value={l.code}>
            {l.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}


