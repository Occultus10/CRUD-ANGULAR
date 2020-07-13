import {Request, Response} from 'express'
import pool from '../database'

class GamesController{

    public async list(req:Request,res:Response){
        const games = await pool.query('SELECT * FROM games');
        res.json(games)
    }
    public async getOne(req:Request,res:Response){
        const {id}=req.params;
        const games = await pool.query('SELECT * FROM games WHERE id=?',[id])
        if (games.length>0){
            return res.json(games[0]);
        }
        res.status(404).json({message: 'El juego no existe'});
    }
    public async create (req:Request, res:Response){
        await pool.query('INSERT INTO games set ?',[req.body]);
        res.json({message: 'Juego Creado'})
    }
    public async update(req:Request,res:Response){
        const {id}=req.params;
        await pool.query('UPDATE games set ? WHERE id=?',[req.body,id]);
        res.json({message:'Juego modificado'})
    }
    public async delete (req:Request,res:Response){
        const {id}=req.params;
        await pool.query('DELETE FROM games WHERE id=?',[id]);
        res.json({message:'Juego eliminado'})
    }
}

const juegosController= new GamesController();
export default juegosController;