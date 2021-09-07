import { Link } from 'react-router-dom';

const NotFound = () => {
  return ( 
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to='/'>Back to the homepage...</Link>
      <nav className="main-nav">
        <ul>
          <li><Link to="/search/spain">Cats</Link></li>
          <li><Link to="/search/singapore">Dogs</Link></li>
          <li><Link to="/search/california">Computers</Link></li>
          <li><Link to="/search/spain">Cats</Link></li>
          <li><Link to="/search/singapore">Dogs</Link></li>
          <li><Link to="/search/california">Computers</Link></li>
        </ul>
      </nav>
    </div>
   );
}
 
export default NotFound;