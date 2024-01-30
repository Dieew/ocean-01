import Tag from "./Tag"

function Card (props) {
   //console.log (props)

  const item = props.item

  //console.log(item)

  return (
        <>
          <div className='card'>
            <h2>{item.name}</h2>
            <div><Tag/></div>
            <img src = {item.image} />
          </div>
        </>
      )
}

export default Card