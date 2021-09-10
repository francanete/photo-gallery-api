// import { useEffect, useState } from 'react';
// import ImageList from './ImageList'
// import axios from 'axios'
// import apiKey from '../config';

// let api = apiKey;



// const Home = ({error, isPending, images}) => {

//   // useEffect(() => {
//   //   axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=elvis&per_page=24&format=json&nojsoncallback=1`)
//   //   .then(response => {
//   //     photos: response.data.photos.photo;
//   //   })
//   //   .catch(error => {
//   //     console.log('Error fetching and parsing data', error);
//   //   })
//   // });

//   const [data, setData] = useState(null);
//   const [isPending, setIsPending] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=elvis&per_page=24&format=json&nojsoncallback=1`)
//       .then(res => {
//         if (!res.ok){
//           throw Error('Error: could not fetch the data for that resource')
//         }
//           return res.json();
//       })
//       .then(data => {
//         setIsPending(false);
//         setData(data);
//         setError(null);
//       })
//       .catch(err => {
//         setIsPending(false);
//         setError(err.message);
//       })
//   });


//   return ( 
//     <div className="photo-container">
//       <h2>Results</h2>
//       { error && <div>{ error }</div> }
//       { isPending && <div>Loading...</div> }
//       { images && <ImageList /> }
        
//   </div>
//    );
// }
 
// export default Home;



