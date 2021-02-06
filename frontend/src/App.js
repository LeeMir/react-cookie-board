import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostList from './routes/PostList';
import Read from './routes/Read';
import Write from './routes/Write';
import Header from './components/Header'

class App extends Component {
  render() {
    return (     
      <Router>
        <Header></Header>
        <div className="route">
          <Switch>
            <Route exact path="/" component={PostList} />
            <Route path="/read/:postid" component={Read} />
            <Route path="/write" component={Write} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;