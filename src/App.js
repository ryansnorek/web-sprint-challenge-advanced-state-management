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
    const { dispatch } = this.props;
    dispatch(actions.fetchData());
  }

  render() {
    const { isLoading, errors } = this.props;

    if (isLoading) {
      return <h1>Loading...</h1>
    }
    if (errors) {
      return <h1>Error Loading Data</h1>
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
export default connect(state => {
  const { smurfs, isLoading, errors } = state;
  return { smurfs, isLoading, errors };
 })(App);