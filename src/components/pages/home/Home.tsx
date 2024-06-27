import Intro from '../../Intro/Intro'
import ExperienceSection from '../../experience/ExperienceSection'
import Footer from '../../footer/Footer'
import Header from '../../header/Header'
import "./Home.css"

export default function Home() {

  return (
    <>
        <div className='wrapper'>
          <Header/>
          <Intro />
          <div className="parallax-section">
              <img src="src/assets/IMG_7018.jpg" className='parallax-image background-img'/>
          </div>
          <ExperienceSection/>
          <Footer />
        </div>
    </>
  )
}
