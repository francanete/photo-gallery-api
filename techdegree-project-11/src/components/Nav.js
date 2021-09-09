import { NavLink } from 'react-router-dom';

const Nav = () => {
  return ( 
    <nav className="main-nav">
        <ul>
          <li><NavLink to="/search/spain">Spain</NavLink></li>
          <li><NavLink to="/search/singapore">Singapore</NavLink></li>
          <li><NavLink to="/search/california">Callifornia</NavLink></li>
        </ul>
      </nav>
   );
}
 
export default Nav;