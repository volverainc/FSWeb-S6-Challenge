import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import Karakterler from './components/KarakterList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination } from 'reactstrap';
import Page from './components/Page';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [karakterler, setKarakterler] = useState([]);
  const [page, setPage] = useState(1)
  useEffect(() => {
    const data = "https://swapi.dev/api/people/?page=" + page;
    
      axios
        .get(data)
      .then((res) => {
        console.log(res.data.results)
        setKarakterler(res.data.results);
      }
      ).catch((error) => {
        console.log("error", error);
      })

  }, [page]);
  
  const handlePageChange = (event) => {
    setPage(event.target.textContent)
  }

  const getPreviousPage = (event) => {
    const newPage = page -1;
    if(newPage >= 1){
      setPage(newPage)
    }
    
  }

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      <Karakterler karakterler = {karakterler}/>
      <Page handlePageChange={handlePageChange} getPreviousPage={getPreviousPage}/>
    </div>
  );
}

export default App;
