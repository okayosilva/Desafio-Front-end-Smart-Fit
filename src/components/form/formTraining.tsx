import { Clock9 } from 'lucide-react'
import { Input } from './inputForm'
import { Button } from '../button'

export function FormTraining() {
  return (
    <form action="" className="rounded-md border-4 p-4">
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
            <Input.InputCheck />
            <Input.Title>Manhã</Input.Title>
          </Input.InputArea>
          <Input.Period initial="6" final="12" />
        </Input.Root>
        <Input.Root>
          <Input.InputArea>
            <Input.InputCheck />
            <Input.Title>Tarde</Input.Title>
          </Input.InputArea>
          <Input.Period initial="12" final="18" />
        </Input.Root>
        <Input.Root>
          <Input.InputArea>
            <Input.InputCheck />
            <Input.Title>Noite</Input.Title>
          </Input.InputArea>
          <Input.Period initial="18" final="23" />
        </Input.Root>
      </div>

      <div className="mt-8 flex flex-wrap justify-between gap-2 sm:gap-0">
        <div className="flex gap-2">
          <input type="checkbox" />
          <span>Exibir unidades fechadas</span>
        </div>
        <span>
          Resultados encontrados: <span>0</span>
        </span>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button variant="primary">ENCONTRAR UNIDADE</Button>
        <Button>Limpar</Button>
      </div>
    </form>
  )
}
