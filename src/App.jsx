import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import page1 from './Component/page1'
import './App.css'
const router = createBrowserRouter([
  
  {
    path:"/",
    element:<page1/>,
  },
  
]);
function App() {
  

  return (
    <>
      <div>
      <h1>goodis good </h1>
      
      </div>
      
       
      
    </>
  )
}

export default App
