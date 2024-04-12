import { FormTraining } from '../components/formTraining'

export function Home() {
  return (
    <div className="w-sizeApp space-y-6">
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
      <FormTraining />
      <main>
        
      </main>
    </div>
  )
}
