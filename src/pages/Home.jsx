import Days from '../components/Days'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import InfoFestival from '../components/InfoFestival'
import LineupPreview from '../components/LineupPreview'
import StayInTouch from '../components/StayInTouch'
import Supporters from '../components/Supporters'

function Home() {
  return (
    <>
      <Hero />
      <LineupPreview />
      <Days />
      <InfoFestival />
      <StayInTouch />
      <Supporters />
      <Footer />
    </>
  )
}

export default Home
