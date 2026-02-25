import express from 'express';

import { ENV } from './lib/env.js';

import { connectDB } from './lib/db.js';

const app = express();
console.log(ENV.PORT);
app.get("/" , (req,res) => {
    res.status(200).json({msg : "api is running"});

}) ;



const startServer = async() => {
    try{
        await connectDB() ;
        app.listen(ENV.PORT, () => {
            console.log(`Server is running on port ${ENV.PORT}`);
        }) ;
    }
    catch(err){
        console.error("Failed to start server:", err);
    }
}
startServer() ;