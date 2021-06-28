import React, { useState, useEffect } from "react";
import AgGrid from "../../components/AgGrid";

const API_URL = "http://131.181.190.87:3000";

const Search = props => {
  const [countriesData, setCountriesData] = useState([])
  const [data, setData] = useState([])
  const [search, setSearch] = useState("Australia");

  useEffect(() => {
    async function getRankings() {
      const url = `${API_URL}/countries`
  
      const res = await  fetch(url, {
        method: "GET",
        headers: { accept: "application/json"},
      })
      const resData = await res.json()
      setCountriesData(resData)
    }
    getRankings();
  }, [])

  useEffect(() => {
    async function getResults() {
      let url = API_URL + "/rankings";

      const res = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
        }
      });
        const resData = await res.json();
        setData(resData);
    }
    getResults();
  }, [search]);

  function displayResults() {
    let newData = [];
    let i;
    for (i = 0; i < data.length; i++) {
      if (data[i].country === search) {
        newData.push(data[i]);
      }
    }
    return newData;
  }


  return (
    <div className="Home-Body">
    <div className="AgGrid-Search">
      <h1 style={{textAlign: "center", fontSize: "45px", margin: "0"}}>Results by Country</h1>
      <p style={{textAlign: "center"}}>Enter a country to find available results:</p>
      <div style={{textAlign: "center"}}>
        <div className="AgGrid-Factors-Params-Container">
          <div className="AgGrid-Factors-Params"> 
          <input
                className="AgGrid-Factors-Inputs"
                type="text"
                name="country_input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              ></input>
          </div>
        </div>
      </div>
      {!!search && countriesData.includes(search) ? (
        <AgGrid data={displayResults()}/>
      ): (
        <h1 style={{textAlign: "center"}}>No results..</h1>
      )}
  </div>
</div>
  );
}

export default Search;