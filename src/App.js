import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {

  // state = {
  //   smurfs: this.props.smurfs,
  //   isLoading: this.props.isLoading,
  //   errors: this.props.errors
  // }
  
  componentDidMount() {
    
    const { dispatch } = this.props;
    dispatch(actions.fetchData());

  }

  render() {
    console.log("RENDER STATE",this.props)
 
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
const mapStateToProps = state => {
  return { 
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    errors: state.errors
  }
};
export default connect(mapStateToProps)(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.