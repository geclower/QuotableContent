import React from 'react'
import {useState, useEffect} from 'react'
import {getQuotes} from "../services/quotes.js"
import "./Home.css"

function Home() {

  const [quotes, setQuotes] = useState([])
  const [num,setNum] = useState(0)


  useEffect(() => {
    fetchQuotes()
  }, [])

  useEffect(() => {
    setNum(Math.floor(Math.random() * quotes.length))
  }, [quotes])

  async function fetchQuotes(){
    const allQuotes = await getQuotes()
      setQuotes(allQuotes)

  }

  return (
    <div className='home'>
      <h1>Quotable Content</h1>
      <div className='daily-quote'>
      <h2>Quote of the day!</h2>
      <p className='quote'>{quotes[num]?.content}</p>
      <p className='author'>{quotes[num]?.author}</p>
      </div>
    </div>
  )
}

export default Home