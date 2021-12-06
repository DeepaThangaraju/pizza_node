import { client } from "./index.js";

async function editById(id, data) {
    return await client
        .db("pizza")
        .collection("pizzalist")
        .updateOne({ id: id }, { $set: data });
}
async function deleteById(id) {
    return await client
        .db("pizza")
        .collection("pizzalist")
        .deleteOne({ id: id });
}
async function getById(id) {
    return await client
        .db("pizza")
        .collection("pizzalist")
        .findOne({ id: id });
}
async function getByQuery(pizzaByQuery) {
    return await client.db("pizza").collection("pizzalist").find(pizzaByQuery).toArray();
}
 async function insertPizza(data) {
    return await client
        .db("pizza")
        .collection("pizzalist")
        .insertMany(data);
}

export {insertPizza, getByQuery, getById, deleteById, editById}
