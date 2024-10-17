import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { Home } from './Home.jsx'
import { AboutMePage } from './AboutMePage.jsx'
import { CreatePostPage } from './CreatePostPage.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import axios from 'axios'


const router = createBrowserRouter( [
  { 
    element: ( 
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      { 
        path: '/', 
        element: <Home />, 
        loader: () => axios.get('http://localhost:3000/posts.json').then((response) => { 
          console.log(response.data);
          return response.data;
        })
      }, 
      { 
        path: '/AboutMe', 
        element: <AboutMePage />
      }, 
      { 
        path: '/create', 
        element: <CreatePostPage />
      }
    ]
  }
]);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
