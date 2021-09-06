import Search from "./Search";
import Nav from "./Nav";

const Header = ({ setSearchTag }) => {

  return ( 
    <div>
      <Search setSearchTag={setSearchTag} />
      <Nav />
    </div>
   );
}
 
export default Header;