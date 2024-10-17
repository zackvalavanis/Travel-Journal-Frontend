import './CreatePostPage.css'
import axios from 'axios'

export function CreatePostPage () { 
  const handleSubmit = (event) => { 
    event.preventDefault();
    console.log('handleSubmit');
    const params = new FormData(event.target);
    axios.post('http://localhost:3000/posts.json', params).then((response) => { 
      console.log(response.data);
      return response.data
    })
  }


  return ( 
    <div>
    <h1>Hello</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name='title' type='text' required/>
        </div>
        <div>
          Post: <input name='text' type='text' required/>
        </div>
        <div>
          user_id: <input name='user_id' type='text' required/>
        </div>
        <div>
          Image: <input name='image_url' type='text' />
        </div>
        <button type='submit'>Create Post</button>
      </form>
    </div>
  )
}