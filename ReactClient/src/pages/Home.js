import React from "react";


function Home () {
  return (
    <div>
      <div className="Home-Body">
        <div className="Website-Introduction">
          <h1 style={{textAlign: "center", fontSize: "45px", margin: "0"}}>The World Happiness Survey</h1>
          <p style={{textAlign: "center"}}>
            The following data has been collected from the world happiness survey and prepared in different styles. 
          </p>
          <p style={{textAlign: "center"}}>
          By using the navigation bar above, you can view the data and even filter the results to your liking.
          </p>
          <br></br>
          <p style={{textAlign: "center"}}>
          You may also become an authenticated user by using the authenticate button on the right of the page.
          </p>
          <p style={{textAlign: "center"}}>
            Click a link or authenticate to begin, clicking the "World Happiness" logo will return you to this page.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
