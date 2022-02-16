import mongoose from 'mongoose';
const pizzaSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        varients:[],
        prices:[],
        category:{
             type:String,
             required:true
        },
        image:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        }

    },
    {
        timestamps:true,
    }
)

export const pizzaModel=mongoose.model('pizzalist',pizzaSchema)