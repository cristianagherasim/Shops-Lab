import { Router, Request, Response } from "express";
import { Shop } from "./shop";

    const shops: Shop[] = [
    {id: 111, name: "Pepper's Pizza", rating: 4.5},
    {id: 222, name: "Clives's Chives", rating: 3.4},
    {id: 333, name: "Betty's Brews", rating: 4.3},
    {id: 444, name: "Sylvester's Shoes", rating: 3.8},
    {id: 555, name: "Teddy's Tunes", rating: 4.7},
]

export const itemRouter = Router();

itemRouter.get("/shops", async (req:Request, res:Response) : Promise<Response> => {
    let minRating = Number(req.query.minRating);
    if(minRating){
        return res.status(200).json(shops.filter(shop => shop.rating >= minRating));    
    }  else {
        return res.status(200).json(shops);  
    }   
});

itemRouter.get("/shops/:id", async (req:Request, res:Response) : Promise<Response> => {
    
    const id = Number(req.params.id);  
    let selectedShop = shops.find(shop => shop.id === id);
    if(selectedShop){
         return res.status(200).json(selectedShop);    
    } else {
        return res.status(404).json( { "error": `Shop not found: ${id}` });  
    }
});