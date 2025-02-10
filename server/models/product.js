import mongoose from "mongoose";

const product = new mongoose.Schema({
    image:{
        type:String,
    },
    productName:{
        type:String,
    },
    vitamins:{
        type:String,
    },
    carbohydrates:{
        type:String,
    },
    protein:{
        type:String,
    },
    fat:{
        type:String,
    },
    category:{
        type:String,
    },
    quantity:{
        type:String,
    },
    price:{
        type:Number,
    },
    status:{
        type:String,
    },
    address:{
        doorNo:{
            type:String,
        },
        street:{
            type:String,
        },
        villageOrCity:{
            type:String,
        },
        district:{
            type:String,
        },
        state:{
            type:String,
        },
        pincode:{
            type:String,
        },
    },
    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    sellerType:{
        type:String
    }
},{
    timestamps:true
});

export const ProductSchema = new mongoose.model('Product', product);