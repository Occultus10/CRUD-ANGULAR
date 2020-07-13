import {Request, Response} from 'express'

class IndexController{

    index(req:Request,res:Response){
        res.json({text: 'API esta /Api/juegos'})
    }
}

export const indexController= new IndexController();
