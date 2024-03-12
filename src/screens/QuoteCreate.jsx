import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createQuote } from "../services/quotes.js";
import "./QuoteCreate.css";

function QuoteCreate() {
  const [quote, setQuote] = useState({
    author: "",
    authorImage: "",
    content: "",
    length: 0,
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setQuote((prevQuote) => ({
      ...prevQuote,
      length: e.target[2].value.length,
    }));
    await createQuote(quote);
    navigate("/quotes");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuote((prevQuote) => ({
      ...prevQuote,
      [name]: value,
    }));
  };

  return (
    <div className="new-quote">
      <h1 className="title">Quotable Content</h1>
      <div className="form-collection">
      <h2 className="title2">Add a New Quote</h2>
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
        <textarea
          rows="4"
          cols="50"
          placeholder="Quote"
          name="content"
          value={quote.content}
          onChange={handleChange}
        />

        <button className="submit" type="submit">
          Add Quote
        </button>
      </form>
      </div>
    </div>
  );
}

export default QuoteCreate;
