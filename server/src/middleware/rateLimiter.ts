import { Request, Response, NextFunction } from "express";
import ratelimit from "../config/upstash"

const rateLimiter = async (req:Request,res:Response,next:NextFunction) =>{

    try {
        // const { success } = await ratelimit.limit("my-limit-key")

        const identifier = req.ip ?? "anonymous";

        const { success } = await ratelimit.limit(identifier); 
        // this is even better as it rate limits per ip address
        
        
        // const { success } = await ratelimit.limit(userid) in case of auth, plus this will add rate limit per user

        if(!success){
            return res.status(429).json({
                message: "Too many requests, Please try again later..."
            })
        }

        next();

    } catch (error) {
        console.log("Rate limit error:",error);
        next(error);
    }

}

export default rateLimiter