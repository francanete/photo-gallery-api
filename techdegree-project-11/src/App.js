import Header from './components/Header';
import ImageList from './components/ImageList';
import { useState } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'


function App({ searchInput }) {
  const [searchTag, setSearchTag] = useState("sunsets");


  return (
    <div className="container">
    
      <BrowserRouter>
        <Header setSearchTag={setSearchTag} />
        <Route path="/search/:id" component={ImageList} />
        <Redirect to="/search/sunset" />
      </BrowserRouter>
    </div>
  );
}

export default App;
