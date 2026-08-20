import './App.css'
import Child from './components/Child'
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
    </>
  )
}

export default App
