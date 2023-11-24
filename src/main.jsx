import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/Home.jsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from './routes/Login.jsx'

const router = createBrowserRouter([
  {path: "/", element: <App/>,
    children:[
      { path:"/", element:<Login/> },
      { path:"/home", element:<Home />},
    ]    
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
