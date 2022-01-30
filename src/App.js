import React,{useContext} from 'react'
import Landing from './components/landing'
import Detail from './components/detail'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

const drinkContext = React.createContext()

function App() {
  return (
    <drinkContext.Provider value='hello'>
      <Router className="App">   
      <Routes>          
          <Route path="/" element={<Landing></Landing>}></Route>
          <Route path="/detail" element={<Detail></Detail>}></Route>
        </Routes>
    </Router>
    </drinkContext.Provider>
    
  )
}

export default App;
