import React from 'react';
import TaskCurd from './TaskCurd';

import './App.css';
import HookCrud from './HookCrud';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" component={TaskCurd} exact />
      <Route path="/hook-crud" component={HookCrud} />
    </Router>
    // <>
    //   <TaskCurd />
    //   <HookCrud />
    // </>
  );
}
export default App;
