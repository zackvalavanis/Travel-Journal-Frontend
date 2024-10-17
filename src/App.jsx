import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { Home } from './Home.jsx'
import { AboutMePage } from './AboutMePage.jsx'
import { CreatePostPage } from './CreatePostPage.jsx'
import { SignupPage } from './SignupPage.jsx';
import { LoginPage } from './LoginPage.jsx';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import axios from 'axios'
import { AuthProvider } from './AuthContext';


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
        element: <AboutMePage />, 
        loader: () => axios.get(`http://localhost:3000/mes.json`).then((response) => { 
          console.log(response.data);
          return response.data;
        })
      }, 
      { 
        path: '/create', 
        element: <CreatePostPage />
      }, 
      {
        path: '/SignupPage', 
        element: <SignupPage />
      }, 
      { 
        path: '/LoginPage', 
        element: <LoginPage />
      }
    ]
  }
]);


function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
