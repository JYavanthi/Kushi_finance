// import "./Navbar.css";
// import logo from "../assets/logo.png";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div>
//         <img src={logo} className="logo" alt="Khushi Finance Logo" />
//       </div>

//       <ul>  
//         <li>Financial Planning </li>
//         <li className="dropdown">
//           Loans <i className="fa-solid fa-angle-down"></i>
//           <ul className="dd">
//             <li>Business Loan</li>
//             <li>Student Loan</li>
//             <li>Home Loan</li>
//             <li>Personal Loan</li>
//           </ul>
//         </li>
//         <li>Calculators </li>
//         <li>About Us</li>
//         <li>Blogs</li>
//         <li>Contact Us </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div>
        <img src={logo} className="logo" alt="Khushi Finance Logo" />
      </div>

      <ul>
        <li>Financial Planning</li>

        {/* Functional Hover Dropdown */}
      <li
  className="dropdown"
  onMouseEnter={() => setOpenDropdown(true)}
  onMouseLeave={() => setOpenDropdown(false)}
>
  Loans <i className="fa-solid fa-angle-down"></i>

  {openDropdown && (
    <ul className="dd">
      <li>Business Loan</li>
      <li>Student Loan</li>
      <li>Home Loan</li>
      <li>Personal Loan</li>
    </ul>
  )}
</li>


        <li>Calculators</li>
        <li>About Us</li>
        <li>Blogs</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;

