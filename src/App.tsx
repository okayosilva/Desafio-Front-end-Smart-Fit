import { Footer } from './components/footer'
import { Header } from './components/header'
import { Home } from './pages/home'

export function App() {
  return (
    <>
      <Header />
      <div className="flex justify-center px-8">
        <Home />
      </div>
      <Footer />
    </>
  )
}
