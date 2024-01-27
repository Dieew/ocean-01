import Tag from "./Tag"

function Card () {
    return (
        <>
          <div className='card'>
            <h2>Rick Sanchez</h2>
            <Tag/>
            <img src = "https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
          </div>
        </>
      )
}

export default Card