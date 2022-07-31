import { levels } from "./levels.enum";

/* Esto es la clase tarea, que tiene un constructor */

export class task{
    name='';
    description='';
    completed=false;
    level=levels.NORMAL;



Constructor(name, description, completed, level){
    this.name=name;
    this.description=description;
    this.completed=completed
    this.level=level
}
}