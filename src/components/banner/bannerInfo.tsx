import { ComponentProps, ReactNode } from 'react'

type RootProps = ComponentProps<'div'> & {
  children: ReactNode
}

function Root({ children, ...rest }: RootProps) {
  return (
    <div {...rest} className="">
      {children}
    </div>
  )
}

type BannerAreaProps = ComponentProps<'div'>

function BannerArea({ ...rest }: BannerAreaProps) {
  return <div {...rest} className="" />
}

type BannerInfoProps = ComponentProps<'div'>
function BannerInfoArea({ ...rest }: BannerInfoProps) {
  return <div {...rest} className="" />
}

type BannerImageProps = ComponentProps<'img'>

function BannerImage({ ...rest }: BannerImageProps) {
  return <img {...rest} className="" />
}

type TitleProps = ComponentProps<'span'>

function Title({ ...rest }: TitleProps) {
  return <span {...rest} className="" />
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
}
