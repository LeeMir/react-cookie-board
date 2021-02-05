import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import PostList from './routes/PostList';
import Read from './routes/Read';
import Write from './routes/Write';

class App extends Component {
  render() {
    return (
    <div>
      <div className="lnk">
        <ul>
          <li>
            <Link to="/">List</Link>
          </li>
          <li>
            <Link to="/read">Read</Link>
          </li>
          <li>
            <Link to="/write">Write</Link>
          </li>
        </ul>
      </div>
      <div className="route">
        <switch>
          <Route exact path="/" component={PostList} />
          <Route path="/read/:postid" component={Read} />
          <Route path="/write" component={Write} />
        </switch>
      </div>
    </div>
    );
  }
}

export default App;