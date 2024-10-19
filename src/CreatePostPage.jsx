import './CreatePostPage.css';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { useState } from 'react';

export function CreatePostPage() {
  const { currentUser } = useAuth();
  const [imageUrl, setImageURL] = useState('');

  const handleInputChange = (event) => {
    setImageURL(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit');
    const params = new FormData(event.target);
    axios.post('http://localhost:3000/posts.json', params).then((response) => {
      console.log(response.data);
      return response.data;
    });
  };

  if (!currentUser) {
    return <p>Loading...</p>; // Display a loading message while the user data is being fetched
  }

  return (
    <div className='create-post'>
      <h1 className='heading'>Hello</h1>
      <form onSubmit={handleSubmit} className='form-post'>
        <div>
          Title: <input name='title' type='text' required />
        </div>
        <div>
          Post:
          <textarea
            className='post-textarea'
            name='text'
            placeholder="Write your post here..."
            required
          />
        </div>
        <div>
          <input defaultValue={currentUser.id} name='user_id' type='hidden' />
        </div>
        <div>
          Image URL:
          <input
            name='image_url'
            type='text'
            onChange={handleInputChange} // Update imageUrl state on change
          />
        </div>
        {imageUrl && (
          <div className="image-preview">
            <img src={imageUrl} alt="Preview" style={{ width: '100%', height: 'auto', marginTop: '20px' }} />
          </div>
        )}
        <button className='button-create-post' type='submit'>Create Post</button>
      </form>
    </div>
  );
}
