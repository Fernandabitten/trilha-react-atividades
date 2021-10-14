import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import UserImg from "../../img/user.png";
import CardImg from "../../img/cart.png";
import latestPurchasesImg from "../../img/latestPurchases2.png";
import { MyContext } from "../../context/context";
import { useContext } from "react";
import { Nav, NavItem, NavItemRight, NavItemLeft } from "./Navbar.styled";

export default function Navbar() {
  const { cartItems } = useContext(MyContext);

  return (
    <Nav>
      <NavItemLeft>
        <NavItem>
          <Link to="/list-movies">
            <img src={logo} alt={""} />
          </Link>
        </NavItem>
      </NavItemLeft>

      <NavItemRight>
        <NavItem>
          <Link to="/last-orders">
            <img src={latestPurchasesImg} alt={""} />
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/checkout" style={{ display: "flex" }}>
            <img src={CardImg} alt={""} style={{ textDecoration: "none" }} />
            <spam>{cartItems.length}</spam>
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/login">
            <img src={UserImg} alt={""} />
          </Link>
        </NavItem>
      </NavItemRight>
    </Nav>
  );
}
