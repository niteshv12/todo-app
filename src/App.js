import React from 'react';
import './App.css';
import { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch , Link, NavLink } from "react-router-dom";
import TodoList from './components/todo/TodoList';
import Navbar from './components/todo/Navbar';
import Complete from './components/todo/Complete'
import Pending from './components/todo/Pending'


function App() {
  const{count} = useState([]);
  return (
    <Router>
      <div className="todo-app">
        <Navbar />
        <Switch>
          <Route exact path="/complete" component={Complete} />
          <Route exact path="/pending" component={Pending} />
          <Route exact path="/" component={TodoList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
