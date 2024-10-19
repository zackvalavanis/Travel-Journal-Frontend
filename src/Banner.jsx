import { useNavigate } from 'react-router-dom'
import './Banner.css'
import Button from '@mui/material/Button';


export function Banner () { 
  const navigate = useNavigate();
  return (
    <div className='banner'>
      <div className='banner-info'>
        <p className='text'>Explore the World, One Adventure at a Time!</p>
        <Button className='cp' onClick ={ () => (navigate('/create'))}>Create Post</Button>
      </div>
    </div>
  )
}