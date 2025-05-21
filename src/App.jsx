
import './App.css'
import Competitions from './components/Competitions'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import NotFound from './components/NotFound';
import CompetitionDetails from './components/CompetitionDetails';
import AddPlayer from './components/AddPlayer';
function App() {

  return (
    <>
    <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/competition/:id" element={<CompetitionDetails />} />
        <Route path="/addPlayer" element={<AddPlayer/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
        
    </>
  )
}

export default App
