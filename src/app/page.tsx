import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/page.module.css'

const inter = Inter({ subsets: ['cyrillic', 'latin'] })

const Home: React.FC = (): JSX.Element => {
  return <main className={styles.main}></main>
}

export default Home
