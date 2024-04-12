import { ComponentProps, ReactNode } from 'react'

type RootProps = ComponentProps<'div'> & {
  children: ReactNode
}

function Root({ children, ...rest }: RootProps) {
  return (
    <div
      {...rest}
      className="flex items-center justify-between border-b-2 pb-2 pt-2"
    >
      {children}
    </div>
  )
}

type InputAreaProps = ComponentProps<'div'> & {
  children: ReactNode
}

function InputArea({ children, ...rest }: InputAreaProps) {
  return (
    <div {...rest} className="flex items-center gap-2">
      {children}
    </div>
  )
}
type InputCheckProps = ComponentProps<'input'>

function InputCheck({ ...rest }: InputCheckProps) {
  return <input {...rest} type="radio" className="" />
}

type TitleProps = ComponentProps<'span'>

function Title({ ...rest }: TitleProps) {
  return (
    <span {...rest} className="font-gotham-book text-lg text-light-grey"></span>
  )
}

type PeriodProps = ComponentProps<'span'> & {
  initial: string
  final: string
}

function Period({ initial, final, ...rest }: PeriodProps) {
  const formatInit = initial.padStart(2, '0')
  const formatFinal = final.padStart(2, '0')

  return (
    <span
      {...rest}
      className="font-gotham-book text-light-grey"
    >{`${formatInit}:00 às ${formatFinal}:00`}</span>
  )
}

export const Input = {
  Root,
  InputArea,
  InputCheck,
  Title,
  Period,
}
