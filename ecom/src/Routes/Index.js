import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home'
import Login from '../components/Login'
const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children : [
            {
                path : '',
                element : <Home/>
            },
            {
                path : 'login',
                element : <Login/>
            }
        ]
    }
])
export default router