import { Link } from "react-router-dom";
import { deleteQuote } from "../services/quotes.js";
import "./Quote.css"

function Quote({ quote }) {

  const handleDelete = async () => {
    await deleteQuote(quote._id);
    window.location.reload();
  };

  return (
    <div className="one-quote">
      <img className="author-image" src={quote.authorImage} alt={quote.author}/>
      <p>{quote.content}</p>
      <p>{quote.author}</p>
      <div className="buttons">
        <Link to={`/${quote._id}/edit`}>
          <button>EDIT</button>
        </Link>
        <button onClick={handleDelete}>DELETE</button>
      </div>
    </div>
  );
}

export default Quote;
