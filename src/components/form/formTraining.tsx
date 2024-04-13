import { Clock9 } from 'lucide-react'
import { Input } from './inputForm'
import { Button } from '../button'
import React, { FormEvent, SetStateAction } from 'react'

type FormTrainingProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  handleClear: () => void
  total: number
  setIsChecked: React.Dispatch<SetStateAction<boolean>>
  setPeriods: React.Dispatch<SetStateAction<string[]>>
  isChecked: boolean
  selectPeriods: string[]
}

export function FormTraining({
  total,
  onSubmit,
  handleClear,
  isChecked,
  setIsChecked,
  setPeriods,
  selectPeriods,
}: FormTrainingProps) {
  return (
    <form className="rounded-md border-4 p-4 shadow-sm" onSubmit={onSubmit}>
      <div className="flex items-center gap-2">
        <Clock9 className="h-8 w-8 text-light-yellow" />
        <span className="text-light-grey">Horário</span>
      </div>
      <div className="mt-4">
        <h3 className="mb-2 border-b-2 pb-2 font-gotham-book text-xl text-light-grey ">
          Qual período quer treinar?
        </h3>
        <Input.Root>
          <Input.InputArea>
            <Input.InputCheck
              value="manha"
              checked={selectPeriods.includes('manha')}
              onChange={(e) => setPeriods(() => [e.target.value])}
            />
            <Input.Title>Manhã</Input.Title>
          </Input.InputArea>
          <Input.Period initial="6" final="12" />
        </Input.Root>
        <Input.Root>
          <Input.InputArea>
            <Input.InputCheck
              value="tarde"
              checked={selectPeriods.includes('tarde')}
              onChange={(e) => setPeriods(() => [e.target.value])}
            />
            <Input.Title>Tarde</Input.Title>
          </Input.InputArea>
          <Input.Period initial="12" final="18" />
        </Input.Root>
        <Input.Root>
          <Input.InputArea>
            <Input.InputCheck
              value="noite"
              checked={selectPeriods.includes('noite')}
              onChange={(e) => setPeriods(() => [e.target.value])}
            />
            <Input.Title>Noite</Input.Title>
          </Input.InputArea>
          <Input.Period initial="18" final="23" />
        </Input.Root>
      </div>

      <div className="mt-8 flex flex-wrap justify-between gap-2 sm:gap-0">
        <div className="flex gap-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
          />
          <span>Exibir unidades fechadas</span>
        </div>
        <span>
          Resultados encontrados:
          <span className="font-gotham-bold text-dark-grey"> {total}</span>
        </span>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button type="submit" variant="primary">
          ENCONTRAR UNIDADE
        </Button>
        <Button type="button" onClick={() => handleClear()}>
          Limpar
        </Button>
      </div>
    </form>
  )
}
