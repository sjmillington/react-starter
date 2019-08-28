import React, { Component } from 'react';
import routes from './routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage';
import Header from './components/Header';

class App extends Component {
  
  render(){

    const content = routes.map(route => {
      return (
        <Route key={route.link} path={route.link} component={route.component} />
      )
    })

    return(
      <div className="App">
        <Router>
          <Header routes={routes} />       
          <Switch>
            {content}
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Router>        
      </div>
    )
  }
}

export default App;
