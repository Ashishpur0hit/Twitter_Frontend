import { BrowserRouter , Route , Routes } from 'react-router-dom'
import './App.css'
import RightSideBar from './components/RightSideBar'
import LeftSideBar from './components/LeftSideBar'
import Home from './components/Home'
import Pages from './components/Pages'
import LogOutPage from './components/LogOutPage'


function App() {
  

  return (
    <div className='flex  ' >
      <BrowserRouter>
      <Pages/>
      </BrowserRouter>



      

      
    </div>
  )
}

export default App
