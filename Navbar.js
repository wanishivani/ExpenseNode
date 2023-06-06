import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar as Navbarbs } from "react-bootstrap";
import { useContext } from "react";
import AuthContext from "./Auth/AuthContext";
export function Navbar() {
  const AuthCtx = useContext(AuthContext);
  const isLoggedIn = AuthCtx.IsLoggedIn;
  const logoutHandler = () => {
    AuthCtx.logout();
  }
  
  return (
    <Navbarbs sticky="top" className="bg-secondary shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/homepage" as={NavLink}>
            Homepage
          </Nav.Link>

          {/* {!isLoggedIn && (
            <Nav.Link to="/login" as={NavLink}>
              Login
            </Nav.Link>
          )} */}
          <Nav.Link to="/login" as={NavLink}>
            
           {isLoggedIn ? "Logout" : "Signup"}
           </Nav.Link>

          {isLoggedIn && (
            <Nav.Link to="profile" as={NavLink}>
              Profile
            </Nav.Link>
          )}
            {isLoggedIn && (
            <Nav.Link to="Expense" as={NavLink}>
              Expense
            </Nav.Link>
          )}

          {isLoggedIn && (
            <Nav.Link to="/product" as={NavLink}>
              update Password
            </Nav.Link>
          )}
          {isLoggedIn && (
            <Nav.Link to="/logout" as={NavLink}  onClick={logoutHandler}>
              refresh
              <Nav.Link to="/login" as={NavLink}>
        
        
            </Nav.Link>

            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbarbs>
  );
}
export default Navbar;
