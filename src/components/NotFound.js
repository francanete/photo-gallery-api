import { Link } from 'react-router-dom';

const NotFound = () => {
  return ( 
    <div className="not-found">
      <h2>Oops!</h2>
      <p>That page cannot be found, but here you have some great suggestions:</p>
        <ul className="suggestion-nav">
          <li><Link to="/search/tibet">Tibet</Link></li>
          <li><Link to="/search/ocean">Ocean</Link></li>
          <li><Link to="/search/ibiza">Ibiza</Link></li>
          <li><Link to="/search/ushuaia">Ushuaia</Link></li>
          <li><Link to="/search/seychelles">Seychelles</Link></li>
          <li><Link to="/search/everest">Everest</Link></li>
        </ul>
    </div>
   );
}
 
export default NotFound;