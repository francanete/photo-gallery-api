import { Link } from 'react-router-dom';

const NotFound = () => {
  return ( 
    <div className="not-found">
      <h2>Oops!</h2>
      <p>That page cannot be found, but here you have some great suggestions:</p>
        <ul className="suggestion-nav">
          <li><Link to="/search/spain">Cats</Link></li>
          <li><Link to="/search/singapore">Dogs</Link></li>
          <li><Link to="/search/california">Computers</Link></li>
          <li><Link to="/search/spain">Cats</Link></li>
          <li><Link to="/search/singapore">Dogs</Link></li>
          <li><Link to="/search/california">Computers</Link></li>
        </ul>
    </div>
   );
}
 
export default NotFound;