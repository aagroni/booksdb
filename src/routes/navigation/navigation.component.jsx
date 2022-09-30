import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <nav>
        <div className="left-container">
          <Link to="/">BooksDB</Link>
          <div class="sec-center">
            <input
              className="dropdown"
              type="checkbox"
              id="dropdown"
              name="dropdown"
            />
            <label class="for-dropdown" for="dropdown">
              Zhandrret <i class="uil uil-arrow-down"></i>
            </label>
            <div class="section-dropdown">
              <a href="#">
                Art/architecture <i class="uil uil-arrow-right"></i>
              </a>
              <a href="#">
                Health/fitness <i class="uil uil-arrow-right"></i>
              </a>
              <a href="#">
                Drama<i class="uil uil-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <Link className="nav-links-container" to="/auth">
          <a className="nav-link" href="#">
            SIGN IN
          </a>
        </Link>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
