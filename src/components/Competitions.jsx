import { useEffect } from "react";
import {useCompetitionStore} from "../store/useCompetitionStore";
import Competition from "./Competition";
function Competitions() {
    const {competitions,fetchCompetitions} = useCompetitionStore();
    useEffect(()=>{
        fetchCompetitions();
    },[])
  return (
    <div>
        <div className="d-flex flex-wrap justify-content-start">
        {competitions.map((comp, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2" key={index}>
            <Competition 
              comp={comp} 
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Competitions
