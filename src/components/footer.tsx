import Logo from '../assets/images/svg/logo.svg'

export function Footer() {
  return (
    <footer className="flex min-h-36 flex-col items-center justify-center bg-dark-grey py-8">
      <img src={Logo} alt="Smart Fit" className="h-10 md:h-12" />
      <span className="text-white">Todos os direitos reservados - 2020</span>
    </footer>
  )
}
