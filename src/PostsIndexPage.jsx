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
      try {
        const response = await axios.get('http://localhost:3000/posts.json'); // Adjust your endpoint if necessary
        setPosts(response.data); // Update posts state with fetched data
      } catch (err) {
        setError(err); // Set error if fetching fails
      } finally {
        setLoading(false); // Set loading to false once done
      }
    };

    fetchPosts(); // Call the fetch function
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) {
    return <div>Loading...</div>; // Show loading message
  }

  if (error) {
    return <div>Error fetching posts: {error.message}</div>; // Show error message
  }

  return (
    <div>
      <h1 className='index-title'>Locations</h1>
      <div className="cards-container">
        {posts.map((post) => (
          <div key={post.id} className="card-wrapper"> 
            <Card
              src={post.images && post.images.length > 0 ? post.images[0].image_url : ''} 
              title={post.title}
              link={`/posts/${post.id}`} 
              post={post} // Pass the current post to the Card
            />
          </div>
        ))}
      </div>
    </div>
  );
}
