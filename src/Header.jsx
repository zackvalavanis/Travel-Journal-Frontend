import './Header.css'
import { Link } from 'react-router-dom'

export function Header () { 
  return (
    <header>
      <div className='header-center'>
        <div className='link-container'>
          <Link to='/'>Home</Link>
        </div>
        <div className='link-container'>
          <Link to='/create'>Post</Link>
        </div>
      </div>
      <div className='header-right'>
        <div className='link-container'>
          <Link to='/AboutMe'> About Me</Link>
        </div>
        <div className='link-container'>
          <Link to='/SignupPage'>Signup</Link>
        </div>
      </div>
    </header>
  )
}