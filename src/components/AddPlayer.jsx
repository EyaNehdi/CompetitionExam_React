import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState,useEffect } from 'react'
import { Form } from 'react-bootstrap'


const participantSchema = z.object({
    username: z.string().min(3,"Event name must be at least 3 characters long"),
    
});
function AddPlayer({onAddPlayer}) {
    const [participant, setParticipant] = useState({
        username:"",
    });
    const [participants, setParticipants] = useState([]);
        const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(participantSchema),
        defaultValues: participant
});
const onSubmit = (data)=>{
    const {username} = data;
    console.log("before",participant);
    if (participants.some((p) => p.username === username)) {
        alert("Username already exists");
        return;
    }
    setParticipant({
       username
    });
     const updated = [...participants, { username }]
    setParticipants(updated)
    console.log("✅ Updated participants:", updated)
     if (onAddPlayer) {
      onAddPlayer();
    }

 
};
   useEffect(()=>{
        console.log("after",participant);
    }, [participant]);
  return (
    <div>
       <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="name" className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control  placeholder="Enter usernamename"  type="text"
            name="username" {...register("username")} error={errors.username} /> 
        </Form.Group>
        <button type="submit" >Add</button>
    </Form>
    </div>
  )
}

export default AddPlayer
