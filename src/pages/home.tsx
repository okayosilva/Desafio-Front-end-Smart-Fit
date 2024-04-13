import { FormEvent, useEffect, useMemo, useState } from 'react'
import { Banner } from '../components/banner'
import { Card } from '../components/card'
import { FormTraining } from '../components/form/formTraining'
import { ChevronUp, OctagonAlert } from 'lucide-react'

export type SchedulesProps = {
  weekdays: string
  hour: string
}

export type GymProps = {
  content: string
  fountain: string
  id: number
  locker_room: string
  mask: string
  opened: boolean
  schedules: SchedulesProps[]
  title: string
  towel: string
}

export function Home() {
  const [gymList, setGymList] = useState<GymProps[]>([])
  const [periods, setPeriods] = useState<string[]>([])

  const [selectPeriods, setSelectPeriods] = useState<string[]>([])
  const [gymIsClosed, setGymIsClosed] = useState(false)

  const [isChecked, setIsChecked] = useState(false)
  const [pageYPosition, setPageYPosition] = useState(0)

  function getPageYAfterScroll() {
    setPageYPosition(window.scrollY)
  }

  window.addEventListener('scroll', getPageYAfterScroll)

  useEffect(() => {
    fetch(
      'https://test-frontend-developer.s3.amazonaws.com/data/locations.json',
    )
      .then((response) => response.json())
      .then((data) => {
        setGymList(data.locations)
      })
  }, [])

  const morning = [
    '06h às 10h',
    '06h às 12h',
    '06h às 08h',
    '06h30 às 08h30',
    '06h às 09h',
  ]
  const afternoon = ['12h às 18h', '12h às 15h', '13h às 17h', '13h às 18h']
  const night = ['18h às 23h', '18h às 21h']

  const filteredGymList = useMemo(() => {
    return gymList
      .filter((item) => {
        if (gymIsClosed) {
          return item.opened === false || item.opened === true
        } else {
          return item.opened
        }
      })
      .map((item) => ({
        ...item,
        schedules: item.schedules.filter((schedule) => {
          if (selectPeriods.length !== 0) {
            if (selectPeriods.includes('manha')) {
              return morning.includes(schedule.hour)
            }
            if (selectPeriods.includes('tarde')) {
              return afternoon.includes(schedule.hour)
            }
            if (selectPeriods.includes('noite')) {
              return night.includes(schedule.hour)
            }
          }

          return schedule.hour
        }),
      }))
      .filter((item) => item.schedules.length > 0)
  }, [gymList, gymIsClosed, selectPeriods, morning, afternoon, night])

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSelectPeriods(periods)
    setGymIsClosed(isChecked)
  }

  function handleClear() {
    setIsChecked(false)
    setSelectPeriods([])
    setGymIsClosed(false)
    setPeriods([])
  }

  return (
    <div id="container" className="relative w-sizeApp space-y-6">
      <div className="mt-8 md:mt-16">
        <h1 className="font-gotham-bold text-4xl text-dark-grey">
          REABERTURA <br /> SMART FIT
        </h1>
        <div className="mt-4 w-[20%] border-4 border-dark-grey md:w-[10%] lg:w-[10%]" />

        <p className="mt-6 md:text-lg">
          O horário de funcionamento das nossas unidades está seguindo os
          decretos de cada município. Por isso, confira aqui se a sua unidade
          está aberta e as medidas de segurança que estamos seguindo.
        </p>
      </div>
      <FormTraining
        onSubmit={onSubmit}
        handleClear={handleClear}
        total={filteredGymList.length}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        setPeriods={setPeriods}
        selectPeriods={periods}
      />
      <main>
        <Banner />
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3 ">
          {filteredGymList?.map((gym) => {
            return (
              <Card
                key={gym.id}
                title={gym.title}
                content={gym.content}
                fountain={gym.fountain}
                id={gym.id}
                locker_room={gym.locker_room}
                mask={gym.mask}
                opened={gym.opened}
                schedules={gym.schedules}
                towel={gym.towel}
              />
            )
          })}
        </div>
        {filteredGymList.length === 0 && (
          <div className="flex flex-1 flex-wrap items-center justify-center gap-2 rounded-md bg-dark-grey p-4 text-center font-gotham-bold">
            <OctagonAlert className="text-light-yellow" />
            <span className="text-white">Nenhuma unidade encontrada</span>
          </div>
        )}
      </main>
      {pageYPosition > 900 && (
        <a
          href="#container"
          className="fixed bottom-10 right-6 flex items-center justify-center rounded-full bg-light-yellow p-2 shadow-sm transition-all duration-75 hover:shadow-md md:bottom-16 md:right-16"
        >
          <ChevronUp className="h-12 w-12 text-white" />
        </a>
      )}
    </div>
  )
}
