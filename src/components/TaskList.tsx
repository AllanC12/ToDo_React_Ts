import { ITask } from "../interfaces/Task";

import styles from "./TaskList.module.css";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";

interface Props {
  taskList: ITask[];
  handleDelete(id: number): void
}

const TaskList = ({ taskList,handleDelete }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        <div>
          {taskList.map((task) => (
            <div key={task.id} className={styles.task}>
              <div className={styles.details}>
                <h5><b>{task.title}</b></h5>
                <p>Dificuldade: {task.difficulty}</p>
              </div>

              <div className={styles.actions}>
                <FaPencilAlt title="Editar tarefa"/>
                <FaRegTrashAlt title="Excluir tarefa" onClick={() => {handleDelete(task.id)}}/>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Nao ha tarefas cadastradas</p>
      )}
    </>
  );
};

export default TaskList;
