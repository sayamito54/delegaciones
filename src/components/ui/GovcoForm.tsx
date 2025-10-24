'use client'

import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface GovcoInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  required?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export const GovcoInput = forwardRef<HTMLInputElement, GovcoInputProps>(
  ({ label, error, helperText, required, icon, iconPosition = 'right', className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-govco-body-medium text-govco-black">
            {label}
            {required && <span className="text-govco-error ml-1" aria-label="requerido">*</span>}
          </label>
        )}
        
        <div className="relative">
          {icon && iconPosition === 'left' && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-govco-dim-gray">{icon}</span>
            </div>
          )}
          
          <input
            ref={ref}
            className={cn(
              'w-full px-3 py-2 border-2 border-solid rounded-lg',
              'font-govco-body text-govco-black placeholder-govco-dim-gray',
              'focus:outline-none focus:ring-2 focus:ring-govco-marine focus:border-govco-marine',
              'transition-all duration-200 ease-in-out',
              'disabled:bg-govco-concrete disabled:text-govco-dim-gray disabled:cursor-not-allowed',
              error 
                ? 'border-govco-error focus:ring-govco-error focus:border-govco-error' 
                : 'border-govco-silver hover:border-govco-dim-gray',
              icon && iconPosition === 'left' && 'pl-10',
              icon && iconPosition === 'right' && 'pr-10',
              className
            )}
            {...props}
          />
          
          {icon && iconPosition === 'right' && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-govco-dim-gray">{icon}</span>
            </div>
          )}
        </div>
        
        {error && (
          <p className="text-sm text-govco-error font-govco-body">{error}</p>
        )}
        
        {helperText && !error && (
          <p className="text-sm text-govco-dim-gray font-govco-body">{helperText}</p>
        )}
      </div>
    )
  }
)

GovcoInput.displayName = 'GovcoInput'

export interface GovcoSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helperText?: string
  required?: boolean
  options: { value: string; label: string; disabled?: boolean }[]
  placeholder?: string
}

export const GovcoSelect = forwardRef<HTMLSelectElement, GovcoSelectProps>(
  ({ label, error, helperText, required, options, placeholder, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-govco-body-medium text-govco-black">
            {label}
            {required && <span className="text-govco-error ml-1" aria-label="requerido">*</span>}
          </label>
        )}
        
        <select
          ref={ref}
          className={cn(
            'w-full px-3 py-2 border-2 border-solid rounded-lg',
            'font-govco-body text-govco-black bg-white',
            'focus:outline-none focus:ring-2 focus:ring-govco-marine focus:border-govco-marine',
            'transition-all duration-200 ease-in-out',
            'disabled:bg-govco-concrete disabled:text-govco-dim-gray disabled:cursor-not-allowed',
            error 
              ? 'border-govco-error focus:ring-govco-error focus:border-govco-error' 
              : 'border-govco-silver hover:border-govco-dim-gray',
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option 
              key={option.value} 
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        
        {error && (
          <p className="text-sm text-govco-error font-govco-body">{error}</p>
        )}
        
        {helperText && !error && (
          <p className="text-sm text-govco-dim-gray font-govco-body">{helperText}</p>
        )}
      </div>
    )
  }
)

GovcoSelect.displayName = 'GovcoSelect'

export interface GovcoTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  required?: boolean
}

export const GovcoTextarea = forwardRef<HTMLTextAreaElement, GovcoTextareaProps>(
  ({ label, error, helperText, required, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-govco-body-medium text-govco-black">
            {label}
            {required && <span className="text-govco-error ml-1" aria-label="requerido">*</span>}
          </label>
        )}
        
        <textarea
          ref={ref}
          className={cn(
            'w-full px-3 py-2 border-2 border-solid rounded-lg',
            'font-govco-body text-govco-black placeholder-govco-dim-gray',
            'focus:outline-none focus:ring-2 focus:ring-govco-marine focus:border-govco-marine',
            'transition-all duration-200 ease-in-out',
            'disabled:bg-govco-concrete disabled:text-govco-dim-gray disabled:cursor-not-allowed',
            'resize-vertical min-h-[100px]',
            error 
              ? 'border-govco-error focus:ring-govco-error focus:border-govco-error' 
              : 'border-govco-silver hover:border-govco-dim-gray',
            className
          )}
          {...props}
        />
        
        {error && (
          <p className="text-sm text-govco-error font-govco-body">{error}</p>
        )}
        
        {helperText && !error && (
          <p className="text-sm text-govco-dim-gray font-govco-body">{helperText}</p>
        )}
      </div>
    )
  }
)

GovcoTextarea.displayName = 'GovcoTextarea'

