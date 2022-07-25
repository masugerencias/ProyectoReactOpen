import { levels } from "./levels.enum";


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