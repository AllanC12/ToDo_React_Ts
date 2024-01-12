import { useState } from 'react'

import styles from './App.module.css'
import Header from './components/Header'
import Footer from './components/Footer'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

import {ITask} from './interfaces/Task'

function App() {
  
  const [taskList,setTaskList] = useState<ITask[]>([])

  return (
    <>  
      <Header/>
        <main className={styles.main}>
          <div>
             <h2>O que você vai fazer?</h2>
             <TaskForm btnText="Criar tarefa" taskList={taskList} setTaskList={setTaskList}/>
          </div>
          <div>
             <h3><b>Suas tarefas:</b></h3>
             <TaskList taskList={taskList}/>
          </div>
        </main>
      <Footer/>
    </>
  )
}

export default App
