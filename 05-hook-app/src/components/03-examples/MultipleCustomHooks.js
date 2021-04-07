import React from "react";
import "../02-useEffect/effects.css";
import useFetch from "../../hooks/useFetch";
import useCouter from "../../hooks/useCouter";

const MultipleCustomHooks = () => {
  const { counter, increment } = useCouter(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  console.log(author, quote);

  return (
    <div>
      <h1>BreakingBad Quotes!!!!</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-0">{quote}</p>
          <footer className="blockquote-footer mt-2">{author}</footer>
        </blockquote>
      )}
      <button onClick={increment} className="btn btn-primary">
        Next
      </button>
    </div>
  );
};

export default MultipleCustomHooks;
