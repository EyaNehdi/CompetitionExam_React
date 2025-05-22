
import './App.css'
import Competitions from './components/Competitions'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import NotFound from './components/NotFound';
import CompetitionDetails from './components/CompetitionDetails';
import AddPlayer from './components/AddPlayer';
import AddCompetition from './components/AddCompetition';
function App() {

  return (
    <>
    <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/competition/:id" element={<CompetitionDetails />} />
        <Route path="/addPlayer" element={<AddPlayer/>} />
        <Route path='/addCompetition' element= { <AddCompetition/>}/>
        <Route path='/update-competition/:id' element={<AddCompetition/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
        
    </>
  )
}

export default App
