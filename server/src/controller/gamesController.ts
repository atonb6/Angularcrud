import {Request, Response} from 'express';
import pool from '../database';
import { json } from 'body-parser';

class GamesController{

    public async list (req: Request,res: Response){
        await pool.query('SELECT * FROM games', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne (req: Request,res: Response): Promise<any>{
 
            const {id} = req.params;
            await pool.query('SELECT * FROM games WHERE id = ?',[id], function(err, result, fields) {
                if (err) throw err;
                const games = result;

                if(games.length > 0){
                    return res.json(games[0]);
                    res.json({text: 'Juego encontrado'})
                }
                console.log(games);
                res.json({text: 'El juego no existe'})
            });
        
    }

    public async create (req:Request,res:Response): Promise<void>{
        await pool.query('INSERT INTO games set ?', [req.body]);
        res.json({message : 'Juego Guardado'});
    }

    public async delete (req:Request, res:Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM games WHERE id = ?', [id]);
        res.json({message: "El juego se ha eliminado"})
    }

    public async update (req:Request, res:Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'El juego se ha actualizado'});
    }
}

const gamesController = new GamesController();

export default gamesController;