import { useLoaderData } from 'react-router-dom'

export function PostsShowPage () { 
  const post = useLoaderData();

  return ( 
    <div>
      <img src={post.images[0].image_url}></img>
      <h1>
        {post.title}
      </h1>
      <p>{post.text}</p>
    </div>
    )

}