import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { Home } from './Home.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';


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
        element: <Home />
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
