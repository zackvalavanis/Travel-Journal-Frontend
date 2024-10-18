import { useLoaderData } from 'react-router-dom';

export function PostsIndexPage({ posts, onShow }) { 
  return ( 
    <div>
      <h1>My Travels</h1>
      {posts.map((post) => ( 
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.text}</p>
          {post.images && post.images.length > 0 ? ( 
            <img src={post.images[0].image_url} alt={post.title} /> // Correctly closed the img tag
          ) : (
            <div>No image available</div>
          )}
          <button onClick={() => onShow(post)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
