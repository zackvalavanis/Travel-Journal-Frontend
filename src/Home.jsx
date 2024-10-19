import './Home.css'
import { Banner } from './Banner.jsx'
import { PostsIndexPage } from './PostsIndexPage'

export function Home () {
   
  return (
    <div className='home-cards'>
      <Banner />
      <PostsIndexPage />
    </div>
  
  )
}