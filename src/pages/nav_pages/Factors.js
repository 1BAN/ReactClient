import React, { useState, useEffect } from "react";
import AgGrid from "../../components/AgGrid";

const API_URL = "http://131.181.190.87:3000";

const Factors = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, isError] = useState(false);
  const [data, setData] = useState([]);
  const [year, setYear] = useState(2015);
  const [limit, setLimit] = useState();
  const [country, setCountry] = useState("");


  const userToken = props.token;
  const changeUserAuth = props.changeAuth;


  useEffect(() => {
    async function getResults() {
      let url = API_URL + "/factors/" + year;

      if (!!limit) {
        url = url + "?limit=" + limit;
        
        if (!!country) {
          url = url + "&country=" + country;
        }
      }

      if (!limit && !!country) {
        url = url + "?country=" + country;
      }

      const res = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          // Authorization: "Bearer " + props.token
          Authorization: "Bearer " + userToken
        }
      });
      if (res.status === 400 || res.status === 404) {
        isError(true);
      } else if (res.status > 400 && res.status < 500) {
        changeUserAuth(false, null)
        window.location.reload()
      } else {
        isError(false);
      }
      try {
        const resData = await res.json();
        setData(resData);
        setLoading(false);
      } catch (error) {
        isError(true);
        setLoading(false);
      }
    }
    getResults();
  }, [year, country, limit, userToken, changeUserAuth]);

  return (
    <div className="Home-Body">
      <div className="AgGrid-Factors">
        <h1 style={{ textAlign: "center", fontSize: "45px" }}>
          World Happiness Statistics: ({year}
          {!!country ? `, ${country}` : null}
          {!!limit ? ` - ${limit} Result(s) limit` : null})
        </h1>
        <div style={{ textAlign: "center" }}>
          <div className="AgGrid-Factors-Params-Container">
            <div className="AgGrid-Factors-Params">
              <span style={{ display: "block", fontSize: "20px" }}>Year</span>
              <input
                className="AgGrid-Factors-Inputs"
                type="text"
                name="year_input"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              ></input>
            </div>
            <div className="AgGrid-Factors-Params">
              <span style={{ display: "block", fontSize: "20px" }}>
                Limit / Number of Results
              </span>
              <input
                className="AgGrid-Factors-Inputs"
                type="number"
                name="limit_input"
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
              ></input>
            </div>
            <div className="AgGrid-Factors-Params">
              <span style={{ display: "block", fontSize: "20px" }}>
                Country
              </span>
              <input
                className="AgGrid-Factors-Inputs"
                type="text"
                name="country_input"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              ></input>
            </div>
          </div>
        </div>
        {data.length > 0 && <AgGrid data={data} />}
        {error && <h1 style={{textAlign: "center"}}>Error finding results..</h1>}
        {loading && <h1 style={{textAlign: "center"}}>Loading..</h1>}
        {!loading && data.length === 0 && <h1 style={{textAlign: "center"}}>No results found..</h1>}
      </div>
    </div>
  );
};

export default Factors;