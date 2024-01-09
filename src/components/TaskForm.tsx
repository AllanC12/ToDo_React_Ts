import styles from "./TaskForm.module.css"

import {useState,ChangeEvent,FormEvent,useEffect} from 'react'

import {ITask} from '../interfaces/Task'

interface Props {
    btnText: string
}



const TaskForm = ({btnText}: Props) => {

  const [id,setId] = useState<number>(0)
  const [title,setTitle] = useState<string>('')
  const [difficulty,setDifficulty] = useState<number>(0)

  const addTaskHandler = () => {

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
            <input type="text" name="title" className={styles.input_txt} onChange={handleChange} placeholder="Título da sua tarefa" />
        </div>
        <div className={styles.input_container}>
            <label htmlFor="dificcult">Dificuldade:</label>
            <input type="number" name="difficulty" className={styles.input_number} onChange={handleChange} placeholder="Dificuldade da tarefa"/>
        </div>

        <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm