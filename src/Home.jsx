import { useLoaderData } from 'react-router-dom'
import './Home.css'

export function Home () {
  const posts = useLoaderData();


  return (
    <div className='home-cards'>
      <h1>My Travels</h1>
      {posts.map((post) => ( 
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.text}</p>
          {post.images && post.images.length > 0 ? ( 
            <img src={post.images && post.images[0].image_url} />
          ) : (
            <div>No image available</div>
          )}
        </div>
      ))}
    </div>
  )
}