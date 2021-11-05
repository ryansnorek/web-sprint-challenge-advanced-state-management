import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchData());
}
  render() {
    if (this.props.isLoading) {
      return <h1>Loading...</h1>
    }
    return (
      <div className="App">
        <Header />
        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}
export default connect(state => state.isLoading)(App);