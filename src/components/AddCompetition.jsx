import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCompetitionStore } from "../store/useCompetitionStore";
import { Form } from "react-bootstrap";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";

const competitionSchema = z.object({
    name: z.string().min(3,"Event name must be at least 3 characters long"),
    description: z.string().min(10,"Event description must be at least 10 characters long"),
    participants: z.coerce.number().int().positive(),
    date: z.string().min(3,"Event name must be at least 3 characters long"),
    fees: z.string().min(3,"Event name must be at least 3 characters long"),

});
function AddCompetition() {
    const [competition, setCompetition] = useState({
        name: '',
        fees: '',
        date: '',
        participants: 0,
        description: '',
    });
    const navigate = useNavigate();
     const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(competitionSchema),
        defaultValues: competition
});
 const {ajoutCompetition,fetchCompetitions,updateCompetition,getCompetitionById} = useCompetitionStore();
 //recuperer donner par id dans le form pour faire update
 const {id} = useParams();
 const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
    if (!id) {
        setIsLoading(false);
        return;
    }

    const fetchComp = async () => {
        try {
            const response = await getCompetitionById(id); 
            console.log("Response:", response.data);
            if (response?.data) {
                const compData = response.data;
                Object.keys(compData).forEach((key) => setValue(key, compData[key])); 
                setCompetition(compData); 
               console.log(compData);
}
        } catch (error) {
            console.error("Error fetching event:", error);
        } finally {
            setIsLoading(false);
                            console.log("Fetched ID:", id);
console.log("Fetched competition:", competition);
        }
    };


    fetchComp();
}, [id, setValue]);
 const onSubmit = async (data)=>{
    const {name,fees,date,participants,description} = data;
let compResult = null;
console.log(data)
try {
    if (id){
    compResult = await updateCompetition(id,{
        name:data.name,
        fees:data.fees,
        date:data.date,
        participants:data.participants,
        description:data.description,   
    });
} else {
     compResult =  await ajoutCompetition({name,fees,date,participants,description});
    console.log(compResult);
}} catch (error) {
    console.error(error);
}
console.log(compResult.status);
if (compResult.status === 200 ||compResult.status === 201) {
    navigate("/competitions");
 }
}
  return (
    <div>
       <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="name" className="mb-3">
            <Form.Label>Competition Name</Form.Label>
            <Form.Control  placeholder="Enter event name"  type="text"
            name="name" {...register("name")} error={errors.name} />
            
        </Form.Group>
        <Form.Group controlId="fees" className="mb-3">
            <Form.Label>fees</Form.Label>
            <Form.Control placeholder="Enter event description" type="text"
            name="fees" {...register("fees")} 
            // error={errors.description} 
            />
            {
                errors.fees && (
                    <Alert variant="danger">{errors.fees.message}</Alert>
                )
            }
            
        </Form.Group>
        <Form.Group controlId="date" className="mb-3">
            <Form.Label>Event date</Form.Label>
            <Form.Control  placeholder="Enter event price"  type="text"
            name="date" {...register("date")}  />
             {
                errors.date && (
                    <Alert variant="danger">{errors.date.message}</Alert>
                )
            }
           
        </Form.Group>
        <Form.Group controlId="participants" className="mb-3">
            <Form.Label>Event participants</Form.Label>
            <Form.Control  placeholder="Enter event participants"  type="number"
            name="participants" {...register("participants",{valueAsNumber : true})} error={errors.participants} />
            
        </Form.Group>
        <Form.Group controlId="description" className="mb-3">
            <Form.Label>Event description</Form.Label>
            <Form.Control  placeholder="Enter event description" type="text"
            name="description" {...register("description")} error={errors.description} />
           
        </Form.Group>
        <button type="submit" >Add</button>
        <button type="reset" onClick={()=>{navigate("/competitions")}}>Cancel</button>
    </Form>
    </div>
  )
}

export default AddCompetition
