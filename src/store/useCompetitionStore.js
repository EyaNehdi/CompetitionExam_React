import {create} from 'zustand';
import { addCompetition, getAllCompetitions, deleteCompetition , editCompetition } from '../service/api';
export const useCompetitionStore = create(
    (set)=>({
        competitions:[],
        errors:"",
        fetchCompetitions: async ()=>{
            try{
const response = await getAllCompetitions();
set({competitions:response.data});
            }catch(error){
set({errors:error.message})
            }
        }, 
        ajoutCompetition: async (comp)=>{
            try{
                const response = await addCompetition({name : comp.name,
                    description:comp.description,
                    fees :comp.fees,
                    participants : comp.participants,
                    date: comp.date,
                    });
                set((state)=>({
                    competitions:[...state.competitions, response.data]
                }));
                return response;

            }catch (error){
                set({errors:error.message});
                
            }
        },
        supprimerCompetition: async (id)=>{
            try{
                await deleteCompetition(id);
                set((state)=>({
                    events:state.events.filter(event => event.id !== id)}));
    }
            catch(error){
                set({errors:error.message});
            }
        },
        updateCompetition: async (id,comp)=>{
            try {
const response = await editCompetition(id, {
    name : comp.name,
                    description:comp.description,
                    fees :comp.fees,
                    participants : comp.participants,
                    date: comp.date,
});
set((state)=>({
events:state.events.map((event)=>
event.id === id ? response.data : event
)
}));
return response;
            }
            catch(error){
                set({errors:error.message});
            }

        },
        
    })
)