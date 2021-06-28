import React, { useState, useEffect } from "react";
import AgGrid from "../../components/AgGrid";

const API_URL = "http://131.181.190.87:3000";

const Rankings = props => {
  const [data, setData] = useState([])


  useEffect(() => {
    async function getRankings() {
      const url = `${API_URL}/rankings`
  
      const res = await  fetch(url, {
        method: "GET",
        headers: { accept: "application/json"},
      })
      const resData = await res.json()
      setData(resData)
    }
    getRankings();
  }, [])

  return (
      <div className="Home-Body">
          <div className="AgGrid-Rankings">
            <h1 style={{textAlign: "center", fontSize: "45px", margin: "0"}}>World Happiness Rankings 2015-2020</h1>
            <p style={{textAlign: "center"}}>You may sort the table by clicking column headers and filter by hovering over the header and clicking the filter icon.</p>
            <AgGrid data={data}/>
        </div>
      </div>
  );
}

export default Rankings;