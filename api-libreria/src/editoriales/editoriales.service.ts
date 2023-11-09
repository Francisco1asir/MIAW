import { Injectable } from '@nestjs/common';

@Injectable()
export class EditorialesService {
    getAll(){
        return ('Listado de todas las editoriales desde el servicio')
    }

    gethome(){
        return ('Seccion de editoriales desde el servicio')

    }
    getAutorById(id:string){
        return (`Detalle de la editorial ${id}`)
    }
}
