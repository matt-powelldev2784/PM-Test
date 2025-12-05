import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const inputVariants = cva(
  [
    'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground',
    'border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none',
    'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
  ].join(' '),
  {
    variants: {
      variant: {
        default: 'border-red-500/10 text-premier-grey/10 shadow-none',
        filled:
          'bg-white text-[#010205] border-transparent shadow-[0_10px_30px_rgba(0,0,0,0.08)]',
        subtle:
          'bg-[#0f1118] text-white border-transparent focus-visible:bg-[#151826]',
        error:
          'border-[#ff6b6b] text-white placeholder:text-[#ff6b6b] focus-visible:ring-[#ff6b6b]/40',
      },
      size: {
        default: 'h-[46px] text-[14px]',
        sm: 'h-8 text-sm',
        lg: 'h-12 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

type InputProps = React.ComponentProps<'input'> &
  VariantProps<typeof inputVariants> & {
    icon?: React.ReactNode
  }

function Input({
  className,
  variant,
  size,
  icon,
  type = 'text',
  ...props
}: InputProps) {
  return (
    <div className="relative w-full">
      {icon && (
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted-foreground **:size-6">
          {icon}
        </span>
      )}

      <input
        type={type}
        data-slot="input"
        className={cn(
          inputVariants({ variant, size }),
          icon && 'pl-10',
          className
        )}
        {...props}
      />
    </div>
  )
}

export { Input }
