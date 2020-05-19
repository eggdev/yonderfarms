import React from "react";
import "./App.scss";

function App() {
  const encodedAddress = encodeURIComponent(
    "381 North Greenbush Road, Troy NY 12180"
  );

  return (
    <div className="main">
      <header className="header">
        <img src="yonder_logo.jpg" alt="Yonder Farms Logo" />
        <a
          className="header-link"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://maps.google.com/?q=${encodedAddress}`}
        >
          <h3>381 North Greenbush Road, Troy NY 12180</h3>
        </a>
        <a
          className="header-link"
          href="tel:5182834267"
          rel="noopener norefferer"
        >
          <h3>(518)-283-4267</h3>
        </a>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
