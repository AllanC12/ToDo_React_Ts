import styles from './App.module.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>  
      <Header/>
        <main className={styles.main}>
         <p>conteudo</p>
        </main>
      <Footer/>
    </>
  )
}

export default App
