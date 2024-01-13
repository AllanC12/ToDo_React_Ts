import styles from "./TaskForm.module.css";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";

import { ITask } from "../interfaces/Task";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: number): void;
}

const TaskForm = ({
  btnText,
  taskList,
  setTaskList,
  task,
  handleUpdate,
}: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const handleTasks = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      const id = Math.floor(Math.random() * 10000);
      const newTask: ITask = {
        id,
        title,
        difficulty,
      };

      setTaskList!([...taskList, newTask]);

      setTitle("");
      setDifficulty(0);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  return (
    <form onSubmit={handleTasks}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          className={styles.input_txt}
          value={title}
          onChange={handleChange}
          placeholder="Título da sua tarefa"
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="dificcult">Dificuldade:</label>
        <input
          type="number"
          name="difficulty"
          className={styles.input_number}
          value={difficulty}
          onChange={handleChange}
          placeholder="Dificuldade da tarefa"
        />
      </div>

      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
