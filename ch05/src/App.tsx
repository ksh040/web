import './App.css'
import Child from './components/Child'
import Child2 from './components/Child2'
import Child3 from './components/Child3'
import Emotion from './components/Emotion'
import StyledChild from './components/StyledChild'
import StyledChild2 from './components/StyledChild2'
import love from './assets/images/01.webp'
function App() {
  const styles = {
    backgroundColor :'blue',
    color:'#fff',
    fontSize:'30px',
    padding:'10px',
  }
  return (
    <>
     <h1 style={styles}>Inline Style</h1>
     <button className='btn'>app button</button>
     <Child />
     <Child2/>
     <Child3/>
     <hr/>
     <StyledChild/>
     <StyledChild2/>
     <Emotion/>
     <hr/>
     <div>
        <button className='bg-transparent text-2xl font-bold text-blue-500'>테일윈드</button>
     </div>
     <img src={love} alt='내사랑' className='img300'/>
     <div className='img2'></div>
     <div style={{width:'300px',height:'300px',background:`url(${love}) center/cover`}}></div>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita et nemo cupiditate id? Temporibus unde, quisquam ex vero et voluptatem a cumque veniam illo, atque, voluptates nam? Consectetur, quasi voluptatem.</p>
    </>
  )
}

export default App
