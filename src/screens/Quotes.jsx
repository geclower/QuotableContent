import {useState, useEffect} from 'react'
import {getQuotes} from "../services/quotes.js"
import Quote from "../components/Quote.jsx"
import "./Quotes.css"

function Quotes() {

  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetchQuotes()
  }, [])

  async function fetchQuotes(){
    const allQuotes = await getQuotes()
    setQuotes(allQuotes)
  }

  return (
    <div>
      <h2>Quoteable Content</h2>
      <div className='quotes-container'>
        {
          quotes.map((quote) => (
           <Quote quote={quote} key={quote._id}/>
            ))
        }
      </div>
    </div>
  )
}

export default Quotes