import Image from './Image'
import useFetch from './useFetch';
import apiKey from '../config';
import { useParams } from 'react-router-dom'

let api = apiKey;


const ImageList = () => {

  const {id} = useParams()

  const { data: images, isPending, error } = useFetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${id}&per_page=24&format=json&nojsoncallback=1`)
  
  let results = true;
  let content;

  if (isPending) {
    content = <img src="../loading.svg" alt=""/>
  } else if (!images.length) {
    results = false;
  } else if (error) {
    content =
    <div>{ error }</div>
  } else if (images) {
    content=
    <ul>
      { images && images.map((image) => (
          <Image  
            url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
            key={image.id}
          />
      ))}
      </ul>
  } 

  return (
    
    <div className="photo-container">
      { content }
      { !results && <div>Oops! There are no results for that search.</div> }
    </div>
   );
}
 
export default ImageList;