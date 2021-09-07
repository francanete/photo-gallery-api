import Header from './components/Header';
import ImageList from './components/ImageList';
import NotFound from './components/NotFound';
import { useState } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'


function App({ searchInput }) {
  const [searchTag, setSearchTag] = useState("sunsets");


  return (
    <div className="container">
    
      <BrowserRouter>
          <Header setSearchTag={setSearchTag} />
          <Switch>
            <Route exact path='/' component={ImageList} />
            <Route path="/search/:id" component={ImageList} />
            {/* <Redirect to="/search/sunset" /> */}
            <Route path="*" component={NotFound} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
