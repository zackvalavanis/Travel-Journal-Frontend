import './MyPage.css'
import { PostsIndexPage } from './PostsIndexPage.jsx'

export function MyPage () { 
  return ( 
    <div className='mypage'>
       <h1>This is My page</h1>
       <PostsIndexPage />
    </div>
   
    
  )
}