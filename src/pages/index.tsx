import axios from 'axios'
import type { NextPage } from 'next'
import useSWR from 'swr'
import styles from '../styles/Home.module.css'

const fetcher = (url: string) =>
  axios
    .get(url, { headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY } })
    .then((res) => res.data)

const Home: NextPage = () => {
  const { data, error } = useSWR('https://opendata.resas-portal.go.jp/api/v1/prefectures', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div className={styles.container}>
      <main className={styles.main}></main>
    </div>
  )
}

export default Home
