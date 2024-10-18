export function PostsShowPage({ post }) {
  if (!post) return null; // Ensure post exists

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
    </div>
  );
}
