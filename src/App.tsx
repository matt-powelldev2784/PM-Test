import Header from '@/components/header/header'
import Hero from '@/components/hero/hero'
import Markets from '@/components/markets/markets'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Markets />
      <div className="h-[100px] border-2 border-green-500">temp spacer</div>
    </>
  )
}

export default App
