import React from "react";
import "./App.scss";

function App() {
  const encodedAddress = encodeURIComponent(
    "381 North Greenbush Road, Troy NY 12180"
  );

  const images = ["one", "two", "three", "four"];

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
          <h2 className="header-link-text">
            381 North Greenbush Road, Troy NY 12180
          </h2>
        </a>
        <a
          className="header-link"
          href="tel:5182834267"
          rel="noopener norefferer"
        >
          <h2 className="header-link-text">(518)-283-4267</h2>
        </a>
        <div className="farm-hours">
          <h3>
            Open May thru November,
            <br className="mobbreak" /> 7 days a week: 9:00am - 5:00pm
          </h3>
        </div>
      </header>
      <section className="content">
        <div className="hero-image">
          <img src="yonder_hero.png" alt="Yonder Farms Hero" />
        </div>
        <div className="hero-text">
          <h1 className="hero-statement">Garden Center and Farm Market</h1>
          <p className="hero-copy">
            Opened in 1970, we are a family owned and operated garden center and
            farm market. We have over 15 greenhouse filled with trees, shrubs,
            annuals, perennials, hanging baskets, roses, vegetables, and herbs.
            During the Summer and Fall, we sell fruit and vegetables grown on
            our own local farm in Hudson, NY. Come and see our amazing variety
            comparable to no other garden center in the Albany Capital Region.
            We use the latest radiant heating technology for germination so our
            plants have dense root balls which lead to bigger, healthier plants
            with abundant blossoms and fruit.
          </p>
        </div>
      </section>
      <section className="content">
        <div className="splash-wrapper">
          {images.map((imgName) => (
            <article className="splash-image">
              <img src={`yonder_splash_${imgName}.jpg`} alt="" />
            </article>
          ))}
        </div>
      </section>
      <footer>
        <a
          className="header-link"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://maps.google.com/?q=${encodedAddress}`}
        >
          <p className="header-link-text">
            381 North Greenbush Road, Troy NY 12180
          </p>
        </a>
        <a
          className="header-link"
          href="tel:5182834267"
          rel="noopener norefferer"
        >
          <p className="header-link-text">(518)-283-4267</p>
        </a>
      </footer>
    </div>
  );
}

export default App;
