import {Router} from 'express'
import juegosController from  '../controllers/juegosController'
class JuegosRoutes {
    public router: Router=Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', juegosController.list);
        this.router.get('/:id',juegosController.getOne);
        this.router.post('/', juegosController.create);
        this.router.put('/:id', juegosController.update);
        this.router.delete('/:id',juegosController.delete);
    }
}
const juegosRoutes = new JuegosRoutes();
export default juegosRoutes.router;