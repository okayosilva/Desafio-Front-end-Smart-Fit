import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'flex w-full max-w-64 items-center justify-center',
    'rounded-sm py-2 font-bold',
    'transition-all duration-300 hover:shadow-md',
  ],
  variants: {
    variant: {
      primary: 'bg-light-yellow ',
      secondary: 'border border-light-grey shadow-sm',
    },
  },
  defaultVariants: {
    variant: 'secondary',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, className, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      {...rest}
      className={button({ variant, className })}
    />
  )
}
