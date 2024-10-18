import { useLoaderData } from 'react-router-dom';

export function PostsIndexPage() { 
  const posts = useLoaderData();

  return ( 
    <div>
      <h1>My Travels</h1>
      {posts.map((post) => ( 
        <div key={post.id}>
          <h2>{post.title}</h2> {/* Changed to h2 for better semantics */}
          <p>{post.text}</p>
          {post.images && post.images.length > 0 ? ( 
            <img src={post.images[0].image_url} alt={post.title} /> // Added alt text for accessibility
          ) : (
            <div>No image available</div>
          )}
          <button>More Info</button>
        </div>
      ))}
    </div>
  );
}
