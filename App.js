import React from "react";
import "./index.css";
import HotelCard from "./HotelCard";
import './utils.css';
// Header
// Logo
// Nav Items
// Body
// Search
// ResturantContainer
// ResturantCard
// Image
// Name
// Rating
// Cuisines
// Footer
// CopyRight
// Links
// Address
// Contact

const HeaderLogo = () => {
  return (
    <div className="header-logo">
      <img src="https://img.freepik.com/premium-vector/beautiful-unique-logo-design-food-restaurant-company_1287271-61363.jpg"></img>
      <h1>Yashwiggy</h1>
    </div>
  );
};

const NavItems = () => {
  return (
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <HeaderLogo />
      <NavItems />
    </div>
  );
};

function App() {
  return (
    <div>
      {/* <h1>Swiggy with React</h1> */}
      <Header />
      <div className="body-cont padding-20">
        <HotelCard
          hotelName="Hotel 1"
          hotelImage="https://img.freepik.com/premium-vector/beautiful-unique-logo-design-food-restaurant-company_1287271-61363.jpg"
          hotelRating="4"
          hotelCuisines={["Biryani", "Kebab", "Burger", "South Indian"]}
        />
      </div>
    </div>
  );
}

export default App;
