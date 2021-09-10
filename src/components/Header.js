import Search from "./Search";
import Nav from "./Nav";

const Header = ({ setSearchTag }) => {

  return ( 
    <div>
      <h1>The Flickr API photo gallery</h1>
      <Search setSearchTag={setSearchTag} />
      <Nav />
    </div>
   );
}
 
export default Header;