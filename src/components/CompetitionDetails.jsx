import  { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../api/db.json';
import AddPlayer from './AddPlayer';

function CompetitionDetails() {
    const {id} = useParams();
   const[active, setActive] = useState(false);
   const handleClick = () => {
    setActive(!active);
   };
     const comp = data.competitions.find(e => e.id === id);
      useEffect(()=>{
        console.log(comp);
      }, []);
      // 🔁 Function passed to child
  const decrementParticipants = () => {
    comp.participants -= 1;
    console.log("Participants left: ", comp.participants);
  };
  return (
   <div>
        <h2>Competition details: {comp.name}</h2>
        <p>Fees: {comp.fees}</p>
        <p>Date: {comp.date}</p>
        <p>Participants: {comp.participants}</p>
        <p>Description: {comp.description}</p>
        <button disabled={comp.participants === 0} onClick={()=>{handleClick()}}>Participate</button>
       {active ? (
        <AddPlayer onAddPlayer={decrementParticipants} />): (<p> </p>)
       }
      </div>
  )
}

export default CompetitionDetails
