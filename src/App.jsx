import React from 'react'
import './index.css'
import Head from './Components/Head'
import Body from './Components/Body'
import { Provider } from 'react-redux'
import store from './Utils/store'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import MainContainer from './Components/MainContainer'
import WatchPage from './Components/WatchPage'

const appRouter =  createBrowserRouter([

{
  path:"/",
  element: <Body/>,
  children:[
   {


    path:"/",
    element: <MainContainer/>
   },
   {
    path:"/watch",
    element: <WatchPage/>

   }



  ]
  

},
{
  



}














])





const App = () => {
  return (


    <Provider store={store}>
<div className=''>
       <Head/>
       <RouterProvider router={appRouter}/>
</div>
</Provider>
  )
}

export default App