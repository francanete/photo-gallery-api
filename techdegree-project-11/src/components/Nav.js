import { NavLink } from 'react-router-dom';

const Nav = () => {
  return ( 
    <nav className="main-nav">
        <ul>
          <li><NavLink to="/search/spain">Cats</NavLink></li>
          <li><NavLink to="/search/singapore">Dogs</NavLink></li>
          <li><NavLink to="/search/california">Computers</NavLink></li>
        </ul>
      </nav>
   );
}
 
export default Nav;