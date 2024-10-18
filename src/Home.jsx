import { useLoaderData } from 'react-router-dom'
import './Home.css'
import { Modal } from "./Modal"
import { useState } from 'react'
import { PostsShowPage } from './PostsShowPage'
import { Banner } from './Banner.jsx'
import { PostsIndexPage } from './PostsIndexPage'

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
      <Banner />
      <PostsIndexPage posts={posts} onShow={handleShow}/>
      <Modal show={isPostVisible} onClose={handleClose}>
        <PostsShowPage post={isCurrentPost}/>
      </Modal>
    </div>
  
  )
}