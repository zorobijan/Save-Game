import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul class="has-background-light | container is-fluid | heading">
          <li class="color: is-primary" className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <div class="dropdown is-hoverable | container is-fluid">
          <div class="dropdown-trigger">
            <button class="button is-large | heading | color: is-primary | content" aria-haspopup="true" aria-controls="dropdown-menu">
              <span>Signup/Login</span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item | tag is-warning">
                <Link to="/signup">
                  Signup
                </Link>      </a>
              <a class="dropdown-item | tag is-warning">
                <Link to="/login">
                  Login
                </Link>
              </a>
            </div>
          </div>
        </div>
      /* // <div>
      //   <ul class="content | has-background-light | container is-fluid" className="flex-row">
      //     <li class="has-background-light | container is-fluid | content is-medium" className="mx-1">
      //       <Link to="/signup">
      //         Signup
      //       </Link>
      //     </li>
      //     <li class="has-background-light | container is-fluid | content is-medium" className="mx-1">
            <Link to="/login">
              Login
            </Link>
      //     </li>
      //   </ul>
      // </div> */
      );
    }
  }

  return (
    <header class="has-background-light | container is-fluid | block">
      <h1 class="title | content is-large | has-background-light | level-item has-text-centered">
        <Link to="/">
          <span class="has-background-light" role="img" aria-label="alien monster">👾</span>
          V.V. Gaming Boutique
          <span class="has-background-light" role="img" aria-label="alien monster">👾</span>
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
