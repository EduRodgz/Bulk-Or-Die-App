import "./home.css";
import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="content">
      <h1>Home☣️</h1>
      <p>Who we are and what we do:</p>
      <p>
        This is an app to help count the calories you have consumed in a day as
        well as a calculator for establishing how many calories and grams of
        protein you must consume to bulk!
      </p>
      <p>
        In addition, we provide links to youtube videos for additional help in
        starting a bulk for inexperienced new comers as well.
      </p>
      <p>
        You can
        click on the links on the top right corner ↗ to be redirected
        anywhere on the app or click down below. ↓ You can also register new accounts or login but may also use the app without it.
      </p>
      <div className="list">
        <li>
          <Link className="list-link" to="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className="list-link" to="/calorie">
            Calorie Calculator
          </Link>
        </li>
        <li>
          <Link className="list-link" to="/bulking">
            Bulking Calculator
          </Link>
        </li>
        <li>
          <Link className="list-link" to="/reference">
            Reference
          </Link>
        </li>
        <li>
          <Link className="list-link" to="/recipes">
            Recipes
          </Link>
        </li>
        <li>
          <Link className="list-link" to="/links">
            Links
          </Link>
        </li>
        <li>
          <Link className="list-link" to="/weekly">
            Weekly Bulk
          </Link>
        </li>
      </div>
    </div>
  );
}

export default Home;
