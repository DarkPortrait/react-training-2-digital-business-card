import github from '../images/GitHub Icon.svg'
import linkedin from '../images/Linkedin Icon.svg'

export default function Footer(){
  return(
    <div className='footer'>
      <img src={github} href='www.github.com' />
      <img src={linkedin} href='www.linkedin.com' />
    </div>
  )
}
