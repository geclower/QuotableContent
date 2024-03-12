import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getQuote, editQuote } from "../services/quotes.js";

function QuoteEdit() {
  const [quote, setQuote] = useState({
    author: "",
    authorImage: "",
    content: "",
    length: 0,
  });

  let { id } = useParams()
  let navigate = useNavigate();

  useEffect(() => {
    fetchQuote()
  }, [])


  async function fetchQuote(){
    const oneQuote = await getQuote(id)
    setQuote(oneQuote)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setQuote((prevQuote) => ({
      ...prevQuote,
      length: e.target[2].value.length,
    }));
    await editQuote(id, quote);
    navigate("/quotes");
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setQuote((prevQuote) => ({
  //     ...prevQuote,
  //     length: e.target[2].value.length,
  //   }));
  //   await createQuote(quote);
  //   navigate("/quotes");
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuote((prevQuote) => ({
      ...prevQuote,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Quotable Content</h1>
      <h2>Edit this Quote</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Author name"
          name="author"
          value={quote.author}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Author image"
          name="authorImage"
          value={quote.authorImage}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Quote"
          name="content"
          value={quote.content}
          onChange={handleChange}
        />

        <button type="submit">Edit Quote</button>
      </form>
    </div>
  );
  }

export default QuoteEdit;
