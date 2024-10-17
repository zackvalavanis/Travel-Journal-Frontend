import { useLoaderData } from 'react-router-dom'
import './Home.css'
import { Modal } from "./Modal"
import { useState } from 'react'
import { PostsShowPage } from './PostsShowPage'

export function Home () {
  const posts = useLoaderData();
  const [ isPostVisible, setIsPostVisible ] = useState(false);
  const [ isCurrentPost, setIsCurrentPost ] = useState({});

  const handleShow = (post) => { 
    console.log('handleshow', post);
    setIsPostVisible(true);
    setIsCurrentPost(post);
  }

  const handleClose = () => { 
    setIsPostVisible(false)
  }

   

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
          <button onClick={handleShow}>More Info</button>
          <Modal show={isPostVisible} onClose={handleClose}>
            <PostsShowPage />
          </Modal>
        </div>
      ))}
    </div>
  )
}