import React from 'react'
import { levels } from '../../models/levels.enum'
import { task } from '../../models/task.class'
import TaskComponent from '../pure/TaskComponent'

const Task_list_Component = () => {

  const defaultTask = new task('Example','Default description', false, levels.NORMAL)
  return (
    <div>
      <div>
        Your tasks: 
      </div>
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  )
}

Task_list_Component.propTypes = {}

export default Task_list_Component