import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Label } from '@/components/ui/label'
import { Textarea as TextAreaComponent } from '@/components/ui/textarea'
import React from 'react'

import { Error } from '../Error'
import { Width } from '../Width'

export const Textarea: React.FC<
  TextField & {
    errors: Partial<FieldErrorsImpl>
    register: UseFormRegister<FieldValues>
    rows?: number
  }
> = ({ name, defaultValue, errors, label, register, required, rows = 4, width }) => {
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

        <TextAreaComponent
          defaultValue={defaultValue}
          id={name}
          rows={rows}
          {...register(name, { required: required })}
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-gray-100 placeholder-gray-400 focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 focus:outline-none transition-all duration-300 hover:border-gray-500/50 resize-none"
          placeholder={`Enter your ${label.toLowerCase()}`}
        />

        {errors[name] && <Error name={name} />}
      </div>
    </Width>
  )
}
