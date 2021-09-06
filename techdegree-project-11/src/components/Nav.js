import { Link } from 'react-router-dom';

const Nav = () => {
  return ( 
    <nav className="main-nav">
        <ul>
          <li><Link to="/search/spain">Cats</Link></li>
          <li><Link to="/search/singapore">Dogs</Link></li>
          <li><Link to="/search/california">Computers</Link></li>
        </ul>
      </nav>
   );
}
 
export default Nav;