import './Card.css';
import { Link } from 'react-router-dom';

export function Card({ src, title, description, link, onShow, post}) { 
  return (
  <div>
    <Link to={link} className='link'>
      <div className='card'>
        {src && <img src={src} alt={title} />} {/* Only render img if src is provided */}
        <div className='card_info'>
          <h2>{title}</h2>
          <p className='expand'>Click to Expand</p>
        </div>
      </div>
    </Link>
  </div>
  );
}
