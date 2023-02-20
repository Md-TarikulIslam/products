import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Details from './components/Details/Details';
import Products from './components/Products/Products';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      loader: async () => {
        return fetch('product.json')
      },
      element: <Products></Products>
    },
    {
      path: 'product/:id',
      // loader: ({params}) =>{
      //   // console.log(params.id)
      //   return fetch(`product.json/product/${params.id}`)
      // },
      element: <Details></Details>
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
