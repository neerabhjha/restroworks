import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

import { Error } from '../Error'
import { Width } from '../Width'

export const Text: React.FC<
  TextField & {
    errors: Partial<FieldErrorsImpl>
    register: UseFormRegister<FieldValues>
  }
> = ({ name, defaultValue, errors, label, register, required, width }) => {
  return (
    <Width width={width}>
      <div className="space-y-2">
        <Label htmlFor={name} className="text-gray-200 font-medium text-sm">
          {label}
          {required && (
            <span className="text-amber-400 ml-1">
              * <span className="sr-only">(required)</span>
            </span>
          )}
        </Label>
        <Input 
          defaultValue={defaultValue} 
          id={name} 
          type="text" 
          {...register(name, { required })}
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-gray-100 placeholder-gray-400 focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 focus:outline-none transition-all duration-300 hover:border-gray-500/50"
          placeholder={`Enter your ${label?.toLowerCase()}`}
        />
        {errors[name] && <Error name={name} />}
      </div>
    </Width>
  )
}
