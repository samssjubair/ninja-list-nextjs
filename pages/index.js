import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja-list | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p  className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo iusto ad voluptatum voluptas inventore voluptatem! Velit, accusamus? Cumque, vero? Quo sed magnam sint officiis temporibus at facilis excepturi placeat!</p>
        <p  className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo iusto ad voluptatum voluptas inventore voluptatem! Velit, accusamus? Cumque, vero? Quo sed magnam sint officiis temporibus at facilis excepturi placeat!</p>
        <Link  href="/ninjas"><a className={styles.btn}>Ninja Listing</a></Link>
      </div>
    </>
  )
}
