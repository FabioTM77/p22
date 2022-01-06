import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";


function BookList() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    function getFetchUrl() {
      return "https://hn.algolia.com/api/v1/search?query=react";
    }

    async function fetchData() {
      const result = await axios(getFetchUrl());
      setData(result.data);
    }

    fetchData();
  }, []);

  return (
    <div className="flex items-center border-2 h-screen bg-indigo-500">
     <ul className="mx-auto">
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
