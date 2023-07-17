import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Details from '../pages/Details'
import { Navigate } from 'react-router-dom'
const routesTable = [
    {
        path: '/about',
        element:<About/>
      },
      {
        path: '/home',
        element:<Home/>,
        children:[
            {
                path:'news',
                element:<News/>
            },
            {
                path:'message',
                element:<Message/>,
                children:[
                  {
                    //Passing parameters using params.
                    //path:'details/:id/:title/:content',
                    path:'details',
                    element:<Details/>
                  }
                ]
            }
        ]
      },
      {
        path: '/about',
        element:<Navigate to="/about"/>
      }
]
export default routesTable;