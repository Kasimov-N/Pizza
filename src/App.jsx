import Card from './Card'
import './Card.css'
import Pizza from './Pizza'


function App() {
  return (
    <div className='home'>
      <div className="Cards">
        <Card h1={Pizza.h1[1]} img={Pizza.img[0]} p={Pizza.p[0]} h2={Pizza.h2[0]} />
        <Card h1={Pizza.h1[2]} img={Pizza.img[2]} p={Pizza.p[1]} h2={Pizza.h2[1]} />
        <Card h1={Pizza.h1[3]} img={Pizza.img[3]} p={Pizza.p[2]} h2={Pizza.h2[2]} />
        <Card h1={Pizza.h1[4]} img={Pizza.img[4]} p={Pizza.p[0]} h2={Pizza.h2[3]} />
      </div>
      <div className="Cards">
        <Card h1={Pizza.h1[5]} img={Pizza.img[4]} p={Pizza.p[1]} h2={Pizza.h2[4]} />
        <Card h1={Pizza.h1[6]} img={Pizza.img[3]} p={Pizza.p[2]} h2={Pizza.h2[5]} />
        <Card h1={Pizza.h1[7]} img={Pizza.img[2]} p={Pizza.p[0]} h2={Pizza.h2[6]} />
        <Card h1={Pizza.h1[0]} img={Pizza.img[1]} p={Pizza.p[1]} h2={Pizza.h2[0]} />
      </div>
      <div className="foot"></div>
    </div>
  )
}

export default App
