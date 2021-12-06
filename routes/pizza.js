import express from "express";
import { insertPizza, getByQuery, getById, deleteById, editById } from "../pizzaMethod.js";
const router=express.Router();
router
.route("/").post(async (request,response)=>{
    const data=request.body;
    const datainserted=await insertPizza(data)
    response.send(datainserted);
})
.get(async (request,response)=>{
    console.log(request.query);
    const pizzaByQuery=request.query;
    if(pizzaByQuery.rating){
        pizzaByQuery.rating=parseFloat(pizzaByQuery.rating);
    }
    // let filteredpizza=pizzalist;
    // if(name){
    //     filteredpizza=pizzalist.filter((pz)=>pz.name===name);
    // }
    // if(rating){
    //     filteredpizza=pizzalist.filter((pz)=>pz.rating===parseFloat(rating));
    // }
    const filteredpizza=await getByQuery(pizzaByQuery);
    //to chane curser(pagination) to array use method toArray()
    response.send(filteredpizza);
})

router
.route("/:id").get(async (request,response)=>{
    const {id}=request.params;
    console.log(id);
    const pizz=await getById(id)
    // const pizz=pizzalist.find((pz)=>pz.id===id);
    pizz?
    response.send(pizz)
    :response.status(404).send({message:"no pizza found"})
    
})
.delete(async (request,response)=>{
    const {id}=request.params;
    console.log(id);
    const pizz=await deleteById(id)
    // const pizz=pizzalist.find((pz)=>pz.id===id);
    pizz.deletedCount>0?
    response.send(pizz)
    :response.status(404).send({message:"no pizza found"})
    
})
.put(async (request,response)=>{
    const {id}=request.params;
    console.log(id);
    const data=request.body;
    const updated=await editById(id, data)
    // const pizz=pizzalist.find((pz)=>pz.id===id);
    const pizza=await getById(id);
    response.send(pizza);
    // pizz.deletedCount>0?
    // response.send(pizz)
    // :response.status(404).send({message:"no pizza found"})
    
})

export const pizzarouter=router;
