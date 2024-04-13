/* eslint-disable camelcase */
import { GymProps } from '../../pages/home'
import { CardInfo } from './cardInfo'

export function Card({
  title,
  content,
  fountain,
  locker_room,
  mask,
  opened,
  schedules,
  towel,
}: GymProps) {
  const isOpen = opened === false ? 'Fechado' : 'Aberto'
  return (
    <CardInfo.Root>
      <CardInfo.Header>
        <CardInfo.GymStatus variant={opened}>{isOpen}</CardInfo.GymStatus>
        <CardInfo.GymName>{title}</CardInfo.GymName>
        <CardInfo.GymAddress
          dangerouslySetInnerHTML={{ __html: content }}
        ></CardInfo.GymAddress>
      </CardInfo.Header>
      <CardInfo.Area>
        <CardInfo.Icons
          statusMask={mask}
          statusTowel={towel}
          statusFountain={fountain}
          statusLocker_room={locker_room}
        />
        <CardInfo.Period schedules={schedules} />
      </CardInfo.Area>
    </CardInfo.Root>
  )
}
