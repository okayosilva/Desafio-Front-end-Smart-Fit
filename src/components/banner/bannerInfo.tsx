import { ComponentProps, ReactNode } from 'react'

type RootProps = ComponentProps<'div'> & {
  children: ReactNode
}

function Root({ children, ...rest }: RootProps) {
  return (
    <div
      {...rest}
      className="bg-light-grey-05 mt-8 flex flex-wrap  justify-center gap-12 rounded-md px-4 py-8 md:justify-between md:gap-0"
    >
      {children}
    </div>
  )
}

type BannerAreaProps = ComponentProps<'div'>

function BannerArea({ ...rest }: BannerAreaProps) {
  return (
    <div
      {...rest}
      className="flex flex-col items-center justify-center gap-4"
    />
  )
}
type GridProps = ComponentProps<'div'>

function Grid({ ...rest }: GridProps) {
  return <div {...rest} className="flex flex-wrap gap-4 " />
}

type BannerInfoProps = ComponentProps<'div'>
function BannerInfoArea({ ...rest }: BannerInfoProps) {
  return (
    <div
      {...rest}
      className="flex flex-col items-center justify-center gap-1"
    />
  )
}

type BannerImageProps = ComponentProps<'img'>

function BannerImage({ ...rest }: BannerImageProps) {
  return <img {...rest} className="w-16" />
}

type TitleProps = ComponentProps<'span'>

function Title({ ...rest }: TitleProps) {
  return <span {...rest} className="font-gotham-black text-dark-grey" />
}
type StatusProps = ComponentProps<'span'>

function Status({ ...rest }: StatusProps) {
  return <span {...rest} className="" />
}

export const BannerInfo = {
  Root,
  BannerArea,
  BannerInfoArea,
  BannerImage,
  Title,
  Status,
  Grid,
}
