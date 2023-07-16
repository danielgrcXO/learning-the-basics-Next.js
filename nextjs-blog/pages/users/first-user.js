import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/Layout'
import styles from '../../styles/firstUser.module.css'

const FirstUser = () => {
  return (
    <Layout>
      <Head>
        <title>
          User page
        </title>
      </Head>
      <div className={styles.firstUserContainer}>

        <Image
          src="/images/hasbulla.jpg"
          className={styles.imageProfile}
          width={500}
          height={180}
          priority={true}
          alt="hasbulla profile">
        </Image>
        <h2 className={styles.pageTitle}>
          Hasbulla XO
        </h2>

        <br></br>

        <Link href="/" className={styles.backButton}>
          Back to main
        </Link>
      </div>
    </Layout>
  )
}

export default FirstUser
