import Tag from "./Tag"

function Card (props) {
   console.log (props) 
  return (
        <>
          <div className='card'>
            <h2>Rick Sanchez</h2>
            <div><Tag/></div>
            <img src = "https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
          </div>
        </>
      )
}

export default Card