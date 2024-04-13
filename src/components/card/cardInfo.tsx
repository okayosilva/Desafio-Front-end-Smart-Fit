/* eslint-disable camelcase */
import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { SchedulesProps } from '../../pages/home'

type RootProps = ComponentProps<'div'> & {
  children: ReactNode
}

function Root({ children, ...rest }: RootProps) {
  return (
    <div
      {...rest}
      className="bg-light-grey-05 flex min-h-[600px] flex-col rounded-md px-4 py-6 shadow-md"
    >
      {children}
    </div>
  )
}

type HeaderProps = ComponentProps<'div'>

function Header({ ...rest }: HeaderProps) {
  return (
    <div
      {...rest}
      className="flex flex-col space-y-2 border-b-2 border-light-grey/25 pb-4"
    ></div>
  )
}

type GymNameProps = ComponentProps<'span'>

function GymName({ ...rest }: GymNameProps) {
  return <span {...rest} className="font-gotham-black text-xl text-dark-grey" />
}

const statusGym = tv({
  base: ['font-gotham-black text-md'],
  variants: {
    variant: {
      true: 'text-light-green',
      false: 'text-light-red',
    },
  },
  defaultVariants: {
    variant: true,
  },
})
type GymStatusProps = ComponentProps<'span'> & VariantProps<typeof statusGym>

function GymStatus({ className, variant, ...rest }: GymStatusProps) {
  return <span {...rest} className={statusGym({ variant, className })} />
}

type GymAddressProps = ComponentProps<'span'>

function GymAddress({ ...rest }: GymAddressProps) {
  return <span {...rest} className="text-light-grey" />
}

type AreaProps = ComponentProps<'div'>

function Area({ ...rest }: AreaProps) {
  return <div {...rest} className="" />
}

type IconsProps = ComponentProps<'div'> & {
  statusMask: string
  statusTowel: string
  statusFountain: string
  statusLocker_room: string
}

const sizeImage = 'h-20'

function Icons({
  statusMask,
  statusTowel,
  statusFountain,
  statusLocker_room,
}: IconsProps) {
  return (
    <div className="mt-6 flex flex-wrap lg:justify-between">
      <img
        className={sizeImage}
        src={`/src/assets/images/png/${statusMask}-mask.png`}
        alt=""
      />
      <img
        className={sizeImage}
        src={`/src/assets/images/png/${statusTowel}-towel.png`}
        alt=""
      />
      <img
        className={sizeImage}
        src={`/src/assets/images/png/${statusFountain}-fountain.png`}
        alt=""
      />
      <img
        className={sizeImage}
        src={`/src/assets/images/png/${statusLocker_room}-lockerroom.png`}
        alt=""
      />
    </div>
  )
}

type PeriodProps = ComponentProps<'div'> & {
  schedules: SchedulesProps[]
}

function Period({ schedules, ...rest }: PeriodProps) {
  return (
    <div
      {...rest}
      className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-1 lg:grid-cols-2"
    >
      {schedules?.map((schedules, index) => {
        return (
          <div key={index} className="flex flex-col flex-wrap gap-2">
            <span className="font-gotham-black text-xl text-dark-grey">
              {schedules.weekdays}
            </span>
            <span className="text-lg">{schedules.hour}</span>
          </div>
        )
      })}
    </div>
  )
}
export const CardInfo = {
  Root,
  Header,
  GymName,
  GymStatus,
  GymAddress,
  Area,
  Icons,
  Period,
}
