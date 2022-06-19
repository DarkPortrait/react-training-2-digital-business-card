import photo from '../images/photo.png'
import email from '../images/Mail.svg'

export default function Info(){
  return(
    <>
      <img src={photo} width='300px' />
      <h1>Tanvir Alam</h1>
      <h3>Bad with CSS</h3>
      <button>
        <img 
          src={email}
        />Email
      </button>
    </>
  )
}
