import React, { Component ,useEffect, useReducer } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import PrincipalView from './components/PrincipalView';
import BarGraph from './components/BarGraph';
import DataTable from './components/DataTable';
import LineGraph from './components/LineGraph';
import PieGraph from './components/PieGraph';
import RenderData from './components/RenderData';
import API, { graphqlOperation } from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';

import { createTodo } from './graphql/mutations';
import awsconfig from './aws-exports';

import { onCreateTodo } from './graphql/subscriptions';


//GET DB INFO 
//import { createTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';


// Action Types
const QUERY = 'QUERY';
const SUBSCRIPTION = 'SUBSCRIPTION';

const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case QUERY:
      return {...state, todos: action.todos};
    case SUBSCRIPTION:
      return {...state, todos:[...state.todos, action.todo]}
    default:
      return state;
  }
};


function Sos() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getData() {
      const todoData = await API.graphql(graphqlOperation(listTodos));
      dispatch({ type: QUERY, todos: todoData.data.listTodos.items });
    }
    getData();

    const subscription = API.graphql(graphqlOperation(onCreateTodo)).subscribe({
      next: (eventData) => {
        const todo = eventData.value.data.onCreateTodo;
        dispatch({ type: SUBSCRIPTION, todo });
      }
    });

    return () => subscription.unsubscribe();

  }, []);


  return (
    <div>
      <button onClick={createNewTodo}>Add Todo</button>
    <div>
      {state.todos.length > 0 ? 
        state.todos.map((todo) => <p key={todo.id}>{todo.name} : {todo.description}</p>) :
        <p>Add some todos!</p> 
      }
    </div>
  </div>
  );
}



//DBINFO 




// Configure Amplify
API.configure(awsconfig);
PubSub.configure(awsconfig);

async function createNewTodo() {
  const todo = { name: "Use AWS AppSync" , description: "Realtime and Offline" };
  await API.graphql(graphqlOperation(createTodo, { input: todo }));
}


class App extends Component {
  render() {
    return(
      <div>
      <Sos/>
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