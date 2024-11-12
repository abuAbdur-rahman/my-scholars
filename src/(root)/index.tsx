import Hero from "@/components/ImageHero"
import CardsSection from '@/components/CardsSection'

const Home = () => {
  return (
    <div className='flex flex-col gap-10 px-2 py-6'>
      <Hero />

      <CardsSection name="New" />
    </div>
  )
}

export default Home