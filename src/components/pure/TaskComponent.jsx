import React from 'react'
import PropTypes from 'prop-types'
import { task } from '../../models/task.class'



/* mediante prop se le pasará la tarea 
Desde Tasklist se me va a mandar como prop la tarea, osea de padre a hijo(este es el hijo).*/
const TaskComponent = ({task}) => {
  return (
    <div>
    <h2>
      Nombre: { task.name }</h2>
    <h3>Descripcion: { task.description }</h3>
    <h4>Level : { task.level }</h4>
    <h5>This task is: {task.completed ? 'COMPLETED' : 'PENDING' }</h5>
    </div>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(task)

}

export default TaskComponent