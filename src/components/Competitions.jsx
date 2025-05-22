import { useEffect } from "react";
import {useCompetitionStore} from "../store/useCompetitionStore";
import Competition from "./Competition";
function Competitions() {
    const {competitions,fetchCompetitions,supprimerCompetition} = useCompetitionStore();
    useEffect(()=>{
        fetchCompetitions();
    },[])
    //handle delete
     const handleDelete = async (id) => {
      try {
          await supprimerCompetition(id);
          fetchCompetitions();
      } catch (error) {
          console.error("Failed to delete event:", error);
      }
  };
  return (
    <div>
        <div className="d-flex flex-wrap justify-content-start">
        {competitions.map((comp, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2" key={index}>
            <Competition 
              comp={comp} 
              handleDelete={handleDelete}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Competitions
