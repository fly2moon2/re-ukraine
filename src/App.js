import React, { Component } from 'react';
//import { connect } from 'react-redux';
// redux toolkit way...
// ref: https://codesandbox.io/s/proud-sound-blm4d?file=/src/App.js:201-377
import { connect, useSelector, useDispatch } from "react-redux";
import TasksPage from './components/TasksPage';
import { createTask, editTask } from './actions';

// redux toolkit example component
import Counter from "./components/Counter";
import Tag from "./components/Tag";

function App() {


  return (
    <>
      <Counter />
{/*       <Tag /> */}
    </>
  );
}

export default App;

// working redux in action example
/*
class App extends Component {
  onCreateTask = ({ title, description }) => {
    this.props.dispatch(createTask({ title, description }));
  };

  onStatusChange = (id, status) => {
    this.props.dispatch(editTask(id, { status }));
  };

  render() {
    return (
      <div className="main-content">
        <TasksPage
          tasks={this.props.tasks}
          onCreateTask={this.onCreateTask}
          onStatusChange={this.onStatusChange}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}

export default connect(mapStateToProps)(App);
*/
// orig. from create-react-app
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
