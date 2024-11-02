import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PostsIndexPage.css';
import { Card } from './Card';

export function PostsIndexPage() {
  const [posts, setPosts] = useState([]); // State to hold posts
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle error

  useEffect(() => {
    const fetchPosts = async () => {
      const jwt = localStorage.getItem('jwt');
  
      if (jwt) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
        console.log("JWT:", jwt);
      } else {
        console.error('No JWT found');
      }
  
      try {
        const response = await axios.get('http://localhost:3000/posts.json');
        setPosts(response.data);
      } catch (err) {
        // Improved error handling
        if (err.response) {
          setError(`Error: ${err.response.status} - ${err.response.data.message || err.response.data}`);
        } else {
          setError(`Error: ${err.message}`);
        }
      } finally {
        setLoading(false);
      }
    };
  
    fetchPosts();
  }, []);
  

  // Display loading state
  if (loading) {
    return <div>Loading...</div>; 
  }

  // Display error state
  if (error) {
    return <div>Error fetching posts: {error.message}</div>; 
  }

  // Display posts
  return (
    <div>
      <h1 className='index-title'>Locations</h1>
      <div className="cards-container">
        {posts.map((post) => {
          const imageUrl = post.images && post.images.length > 0 ? post.images[0].image_url : '';
          console.log("Image URL:", imageUrl); // Log the image URL
          return ( // Ensure you return the JSX
            <div key={post.id} className="card-wrapper"> 
              <Card
                src={imageUrl} // Use the imageUrl variable here
                title={post.title}
                link={`/posts/${post.id}`} 
                post={post} // Pass the current post to the Card
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
