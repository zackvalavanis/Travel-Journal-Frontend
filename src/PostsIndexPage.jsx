import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PostsIndexPage.css';
import { Card } from './Card';

export function PostsIndexPage() {
  const [posts, setPosts] = useState([]); // State to hold posts
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle error
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [postsPerPage] = useState(4); // Define how many posts to show per page
  const [totalPosts, setTotalPosts] = useState(0); // State for total posts

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
        // Fetch posts with pagination
        const response = await axios.get(`http://localhost:3000/posts.json?page=${currentPage}&limit=${postsPerPage}`);
        console.log(response.data); // Log the API response

        setPosts(response.data.posts || []); // Ensure posts is an array
        setTotalPosts(response.data.totalPosts || 0); // Default to 0 if not present
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
  }, [currentPage]); // Fetch posts when currentPage changes

  // Display loading state
  if (loading) {
    return <div>Loading...</div>; 
  }

  // Display error state
  if (error) {
    return <div>Error fetching posts: {error.message}</div>; 
  }

  // Calculate total pages based on totalPosts
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Display posts
  return (
    <div>
      <h1 className='index-title'>Locations</h1>
      <div className="cards-container">
        {posts.map((post) => {
          const imageUrl = post.images && post.images.length > 0 ? post.images[0].image_url : '';
          console.log("Image URL:", imageUrl); // Log the image URL
          return (
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

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button 
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button 
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
