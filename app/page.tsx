import { Page } from '../components/page/Page'
import ClickCount from '../components/ClickCount'
import styles from './home.module.css'

function Home() {

  return (
    <>
      <h1>Fast Refresh Demo</h1>
      <p>
        Fast Refresh is a Next.js feature that gives you instantaneous feedback
        on edits made to your React components, without ever losing component
        state.
      </p>
      <hr className={styles.hr} />
      <div>
        <p>Component with state.</p>
        <ClickCount />
      </div>
      <hr className={styles.hr} />
    </>
  )
}

export default Home
