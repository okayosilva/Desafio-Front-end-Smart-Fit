import { Footer } from './components/footer'
import { Header } from './components/header'
import { Home } from './pages/home'

export function App() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen justify-center px-8 pb-8">
        <Home />
      </div>
      <Footer />
    </>
  )
}
