    
import React from "react";

function Navbar({ message, score, topScore }) {
  return (
    <nav className="bg-nav fixed-top navbar nav-height nav-shadow p-0 text">
      <ul className="row center list-inline m-0 nav-fill nav-height nav-width">
        <li className="col list-inline-item my-auto nav-calc-font p-0 m-0 text-center">
          <a className="flicker-1 grow nav-calc-font navbar-brand p-0 m-0 title-line-hgt"
            href="https://peterjast.github.io/FSDportfolio/">
            FullStakesDesign 
            <br />
            F S D
          </a>
        </li>
        <li
          className="col list-inline-item my-auto nav-calc-font m-0 p-0 text-center"
        >
          {message}
        </li>
        <li className="col list-inline-item my-auto nav-calc-font m-0 p-0 score-li-width text-center">
          Score: {score}  High Score: {topScore}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;