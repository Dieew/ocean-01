import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'


function App() {
  //carregamento de dados via código//
  // const item1 = {
  //   name: 'Rick Sanchez',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  // }
  // const item2 = {
  //   name: 'Morty Smith',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  // }
  // const item3 = {
  //   name: 'Summer Smith',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  // }
  // const item4 = {
  //   name: 'Beth Smith',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
  // }

  // const itens = [item1,item2,item3,item4]



  const [itens, setItens] = useState ([])


  async function carregarDadosApi() {
  //Declarar a URL da API
    const apiUrl ='https://rickandmortyapi.com/api/character/'

  //Preparar a requisição
  
  const response = await fetch(apiUrl)

  //console.log(response)

  const body = await response.json()
  
  //console.log(body)
  //Extraindo a propriedade results do body
  const results = body.results

  console.log (results)
  //Atualizar o estado "itens" da API

  setItens(results)
  }
  useEffect (function (){
    // Chamando a função que carrega dados da API
    carregarDadosApi ()
  },[])


  return (
    <>
    <div className='cards'>
    {itens.map((item,i)=> <Card item= {item} key ={i} />)}
    </div>
    </>
    
  )
}

export default App