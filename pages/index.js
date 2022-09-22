import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Form from '../components/Form'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession()
  if (status === 'loading') {
    return <p>...</p>
  }
  return (
    <div className={styles.container}>
   {session ? <p>You are logged in!</p> :
 <p>You are not logged in 😞. <a href="/api/auth/signin">login</a></p>}
</div>
      )
}


