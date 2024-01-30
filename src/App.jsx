import './App.css'
import Card from './components/Card/Card'


function App() {
  const item1 ={
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }
  return (
    <>
    <Card/>
    <Card/>
    </>
    
  )
}

export default App