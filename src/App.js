import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import PrincipalView from './components/PrincipalView';
import BarGraph from './components/BarGraph';
import DataTable from './components/DataTable';
import LineGraph from './components/LineGraph';
import PieGraph from './components/PieGraph';
import RenderData from './components/RenderData';
import ApolloClient from 'apollo-boost';


class App extends Component {
  render() {
    return(
      <div>
      <RenderData/>
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/BarGraph">
              <BarGraph/>
            </Route>
            <Route path="/LineGraph">
              <LineGraph/>
            </Route>
            <Route path="/PieGraph">
              <PieGraph/>
            </Route>
            <Route path="/">
              <PrincipalView/>
            </Route>
          </Switch>
      </div>
    </Router>
    </div>
    );
    
  }
}

export default App;