import './AboutMePage.css'
import { useLoaderData } from 'react-router-dom'

export function AboutMePage () { 
  const backgrounds = useLoaderData();

  return ( 
    <div>
      <h1>About Me</h1>
      
      {backgrounds.map((background) => ( 
        <div key={background.id}>
          <p>{background.information}</p>
        </div>
      ))}
    </div>
  )
}