import { useLoaderData } from 'react-router-dom';

export function PostsShowPage () { 
  const posts = useLoaderData();

  return (
    <div>
      {posts.map((post) => { 
        <div key={post.id}>
          <h1>{post.title}</h1>
        </div>
      })}
      
    </div>

  )

}