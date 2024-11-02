import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { Home } from './Home.jsx'
import { AboutMePage } from './AboutMePage.jsx'
import { CreatePostPage } from './CreatePostPage.jsx'
import { SignupPage } from './SignupPage.jsx';
import { LoginPage } from './LoginPage.jsx';
import { PostsShowPage } from './PostsShowPage.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import axios from 'axios'
import { AuthProvider } from './AuthContext';
import './index.css'
import { MyPage } from './MyPage.jsx'
import { PostsIndexPage } from './PostsIndexPage.jsx'


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
        path: '/posts/:id', 
        element: <PostsShowPage />,
        loader: ({ params }) => axios.get(`http://localhost:3000/posts/${params.id}.json`).then((response) => { 
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
      }, 
      { 
        path: '/mypage',
        element: <MyPage />
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