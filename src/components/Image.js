const Image = ({ url }) => {
  return ( 
    <li>
      <img className="image-result" src={url} alt="" />
    </li>
   );
}
 
export default Image;