import Login from "../../components/Header/Login/Login"
import Dashboard from '../../components/Danshboard/Dashboard'


const code = new URLSearchParams(window.location.search).get('code')
// pegar o code que vem com params na url


export default function Main (){


    return code ? <Dashboard code={code} /> : <Login/>
        
    
}