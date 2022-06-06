import axios from 'axios'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [pref, setPref] = useState<{
    message: null
    result: {
      prefCode: number
      prefName: string
    }[]
  } | null>(null)
  const [prefPop, setPrefPop] = useState<
    { prefName: string; data: { year: number; value: number }[] }[]
  >([])

  useEffect(() => {
    axios
      .get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY },
      })
      .then((results) => {
        setPreFectures(results.data)
      })
      .catch((error) => {})
  }, [])

  return <main></main>
}

export default Home
