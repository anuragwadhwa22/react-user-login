import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggenIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    //optional: redirect the user
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggenIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggenIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggenIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
