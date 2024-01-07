import styles from "./TaskForm.module.css"

interface Props {
    btnText: string
}

const TaskForm = ({btnText}: Props) => {
  return (
    <form>
        <div>
            <label htmlFor="title">Título:</label>
            <input type="text" name="title" className={styles.input_txt} placeholder="Título da sua tarefa" />
        </div>
        <div>
            <label htmlFor="dificcult">Dificuldade:</label>
            <input type="text" name="difficulty" className={styles.input_number} placeholder="Dificuldade da tarefa"/>
        </div>

        <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm