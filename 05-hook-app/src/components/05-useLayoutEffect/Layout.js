import React, { useLayoutEffect, useRef, useState } from "react";
import "./layout.css";
import useFetch from "../../hooks/useFetch";
import useCouter from "../../hooks/useCouter";

const Layout = () => {
  const { counter, increment } = useCouter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];
  const [boxSize, setBoxSize] = useState();

  console.log(quote);

  const pTag = useRef();

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className="blockquote text-end">
        <p ref={pTag} className="mb-0">
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button onClick={increment} className="btn btn-primary">
        Next
      </button>
    </div>
  );
};

export default Layout;
