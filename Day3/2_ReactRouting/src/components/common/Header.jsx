import React from 'react';
import { Link } from "react-router-dom";

const Header = () => (
    <div>
        <nav className="navbar navbar-inverse">
            <ul className="nav navbar-nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <ul className="nav navbar-nav">
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <ul className="nav navbar-nav">
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>
            <ul className="nav navbar-nav">
                <li>
                    <Link to="/admin">Admin</Link>
                </li>
            </ul>
        </nav>
    </div>
);

export default Header;

// class Header extends Component {
//     render() {
//         return (
//             <div>
//                 <nav className="navbar navbar-inverse">
//                     <ul className="nav navbar-nav">
//                         <li>
//                             <Link to="/">Home</Link>
//                         </li>
//                     </ul>
//                     <ul className="nav navbar-nav">
//                         <li>
//                             <Link to="/about">About</Link>
//                         </li>
//                     </ul>
//                     <ul className="nav navbar-nav">
//                         <li>
//                             <Link to="/products">Products</Link>
//                         </li>
//                     </ul>
//                     <ul className="nav navbar-nav">
//                         <li>
//                             <Link to="/admin">Admin</Link>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         );
//     }
// }

