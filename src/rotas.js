import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from './pages/Main'
import Handle from './components/Header/Login/Login'

function Rotas (){

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='/login' element={<Handle/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas