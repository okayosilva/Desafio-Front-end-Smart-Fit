import Logo from '../assets/images/svg/logo.svg'

export function Header() {
  return (
    <header className="flex min-h-36 bg-black py-8">
      <img src={Logo} alt="Smart Fit" className="mx-auto h-20 md:h-28" />
    </header>
  )
}
