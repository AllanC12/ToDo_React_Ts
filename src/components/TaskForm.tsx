import styles from "./TaskForm.module.css"

import {useState,ChangeEvent,FormEvent,useEffect} from 'react'

import {ITask} from '../interfaces/Task'

interface Props {
    btnText: string,
    taskList: ITask[],
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>

}


const TaskForm = ({btnText,taskList,setTaskList}: Props) => {

  const [id,setId] = useState<number>(0)
  const [title,setTitle] = useState<string>('')
  const [difficulty,setDifficulty] = useState<number>(0)

  const addTaskHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const id = Math.floor(Math.random() * 10000)
    const newTask: ITask = {
      id,
      title,
      difficulty
    }

    setTaskList!([...taskList,newTask])

    setTitle("")
    setDifficulty(0)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === 'title'){
      setTitle(e.target.value)
    }else{
      setDifficulty(parseInt(e.target.value))
    }
  }


  return (
    <form onSubmit={addTaskHandler}>
        <div className={styles.input_container}>
            <label htmlFor="title">Título:</label>
            <input type="text" name="title" className={styles.input_txt} value={title} onChange={handleChange} placeholder="Título da sua tarefa" />
        </div>
        <div className={styles.input_container}>
            <label htmlFor="dificcult">Dificuldade:</label>
            <input type="number" name="difficulty" className={styles.input_number} value={difficulty} onChange={handleChange} placeholder="Dificuldade da tarefa"/>
        </div>

        <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm