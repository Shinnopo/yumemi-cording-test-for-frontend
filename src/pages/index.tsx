import axios from 'axios'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import CheckField from '@/components/CheckField'
import Graph from '@/components/Graph'

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
        setPref(results.data)
      })
      .catch((error) => {})
  }, [])

  const handleClickCheck = (prefName: string, prefCode: number, check: boolean) => {
    let clickPrefPop = prefPop.slice()

    if (check) {
      if (clickPrefPop.findIndex((value) => value.prefName === prefName) !== -1) return

      axios
        .get(
          `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${String(
            prefCode,
          )}`,
          {
            headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY },
          },
        )
        .then((results) => {
          clickPrefPop.push({
            prefName: prefName,
            data: results.data.result.data[0].data,
          })

          setPrefPop(clickPrefPop)
        })
        .catch((error) => {
          return
        })
    } else {
      const deleteIndex = clickPrefPop.findIndex((value) => value.prefName === prefName)
      if (deleteIndex === -1) return
      clickPrefPop.splice(deleteIndex, 1)
      setPrefPop(clickPrefPop)
    }
  }

  return (
    <main>
      <h2>都道府県</h2>
      {pref && <CheckField pref={pref.result} onChange={handleClickCheck} />}
      <h2></h2>
      <Graph popData={prefPop} />
    </main>
  )
}

export default Home
