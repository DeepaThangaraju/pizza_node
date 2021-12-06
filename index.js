import express from "express";  // "type":"module"
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { insertPizza, getByQuery, getById, deleteById, editById } from "./pizzaMethod.js";
import {pizzarouter} from "./routes/pizza.js";
// const { query } = require("express");//type:"common.js"
// const express=require("express");
dotenv.config();
const app=express();

const PORT=process.env.PORT;

app.use(express.json());//inbuilt middleware which tranform the body data to json



const pizzalist=[
    {
        "id":"100",
      "name": "Neapolitan Pizza",
      "toppings": "The typical Neapolitan pizza toppings are fresh mozzarella, tomatoes, basil leaves, oregano, and olive oil.",
      "image": "https://assets.epicurious.com/photos/57aa24319a774aa934b6f09e/16:9/w_1280,c_limit/neapolitan-style-pizza-pizza-alla-napoletana.jpg",
      "rating": 5
    },
    {
        "id":"101",
      "name": "Chicago Pizza",
      "toppings": "Generally, the toppings for Chicago pizza are ground beef, sausage, pepperoni, onion, mushrooms, and green peppers, placed underneath the tomato sauce. ",
      "image": "https://media-cdn.tripadvisor.com/media/photo-p/12/d6/c3/1a/photo1jpg.jpg",
      "rating": 4
    },
    {
        "id":"102",
      "name": "New York-Style Pizza",
      "toppings": "New York-style pizza usually features tomato sauce and mozzarella cheese. Additional toppings, from pepperoni and sausage to mushroom and anchovies. New York pizza with condiments, like oregano, red pepper flakes, Parmesan cheese, and garlic powder.",
      "image": "https://media.timeout.com/images/102421929/image.jpg",
      "rating": 4.5
    },
    {
        "id":"103",
      "name": "Sicilian Pizza",
      "toppings": "Sicilian pizzas are often topped with bits of tomato, onion, anchovies, and herbs.",
      "image": "https://image.shutterstock.com/image-photo/tuna-fish-sicilian-style-pizza-260nw-1453481462.jpg",
      "rating": 4
    },
    {
        "id":"104",
      "name": "Greek Pizza",
      "toppings": "Greek pizza is usually heavier on the sauce than the cheese. The sauce typically has a tangy tomato paste with a strong oregano flavor. It is often only topped with cheese, which is usually a mix of mozzarella and cheddar or provolone. ",
      "image": "https://www.laurafuentes.com/wp-content/uploads/2019/04/greek_pizza_square.jpg",
      "rating": 4
    },
    {
        "id":"105",
      "name": "California Pizza",
      "toppings": "You can include anything from chicken and artichokes to goat cheese and egg.",
      "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2020-01-16-at-5-01-15-pm-1579212102.png",
      "rating": 5
    },
    {
        "id":"106",
      "name": "Detroit Pizza",
      "toppings": "Detroit pizza traditionally features pepperoni, brick cheese (usually Wisconsin brick cheese), and tomato sauce. Other typical toppings include mushrooms and olives.",
      "image": "https://images.hindustantimes.com/img/2021/05/05/550x309/_18fe2f42-58ab-11ea-a545-768c83e117c2_1620228186461.jpg",
      "rating": 4.9
    },
    {
        "id":"107",
      "name": "St. Louis Pizza",
      "toppings": "St. Louis pizza features Provel cheese and a sweeter tomato sauce with a hefty dosage of oregano. Because of its firm crust, St. Louis-style pizza can support several toppings of your choice.",
      "image": "https://www.stlmag.com/downloads/312513/download/20190807_Louie_0038.jpg?cb=8ba0444bca582044c2dc80879f0fc9c4&w=640",
      "rating": 3
    }
  ]
  console.log(process.env);
const MONGO_URL=process.env.MONGO_URL;
  
  

async function CreateConnection(){
    const client=await new MongoClient(MONGO_URL);
    client.connect();
    console.log("MongoDb connected");
    return client
}

export const client=await CreateConnection();

  


app.get("/",(request,response)=>{
    response.send("Hello World!!!");
});
 
app.use("/pizza",pizzarouter);

app.listen(PORT,()=>console.log("app is started",PORT));

