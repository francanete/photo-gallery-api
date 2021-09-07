import Image from './Image'
import useFetch from './useFetch';
import apiKey from '../config';
import { useParams } from 'react-router-dom'

let api = apiKey;


const ImageList = () => {

  const {id} = useParams()

  const { data: images, isPending, setIsPending, error } = useFetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${id}&per_page=24&format=json&nojsoncallback=1`)
  
  return (   
    <div className="photo-container">
      <h2>Results</h2>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      <ul>
      { images && images.map((image) => (
          <Image  
            url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
            key={image.id}
          />
      ))}
      </ul>
  </div>
   );
}
 
export default ImageList;