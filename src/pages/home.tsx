import { useEffect, useState } from 'react'
import { Banner } from '../components/banner'
import { Card } from '../components/card'
import { FormTraining } from '../components/form/formTraining'
import { ChevronUp } from 'lucide-react'

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
        console.log(data)
        setGymList(data.locations)
      })
  }, [])

  function onSubmit() {
    console.log('submit')
  }

  function handleClear() {
    console.log('clear')
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
        total={gymList.length}
      />
      <main>
        <Banner />
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3 ">
          {gymList?.map((gym) => {
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
      </main>
      {pageYPosition > 900 && (
        <a
          href="#container"
          className="fixed bottom-16 right-16 rounded-full bg-light-yellow p-2 shadow-sm transition-all duration-75 hover:shadow-md"
        >
          <ChevronUp className="h-12 w-12 text-white" />
        </a>
      )}
    </div>
  )
}
