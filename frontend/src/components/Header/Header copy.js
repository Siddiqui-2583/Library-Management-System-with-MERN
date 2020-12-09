import React from "react";
import axios from "axios";

function Header(props) {
  return (
    <div>
      <h1 className="heading1 text-center">
        Abdul Jalil Literature and Cultural Center
      </h1>
      <div>
        <nav className="navbar navbar-expand-lg">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                {/* <img src="../media/book.png" alt="" /> */}Books{" "}
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {/* <img src="../media/disc.png" alt="" /> */}
                Discs
              </a>
            </li>
          </ul>

          {/* search box will put here */}
        </nav>
      </div>
    </div>
  );
}

export default Header;
