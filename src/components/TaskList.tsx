import { ITask } from "../interfaces/Task"

import styles from "./TaskList.module.css"

interface Props {
  taskList: ITask[]
}

const TaskList = ({taskList}: Props) => {
  return (
    <div className={styles.taskList}>
      {taskList.length > 0 ? (
        <div>
          {taskList.map(task => (
            <div key={task.id}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
              <div className={styles.icons}>
                <i className="bi bi-pencil"></i>
                <i className="bi bi-trash"></i>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Nao ha tarefas cadastradas</p>
      )}
    </div>
  )
}

export default TaskList