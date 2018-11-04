import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setThemeDark, setThemeLight } from './redux/action'
import NavBar from './components/NavBar'
import CaseTable from './components/CaseTable'
import './App.css';

class App extends Component {
  render() {
    console.log(this.props)
    const setTheme = (event) => {
      this.props.setThemeLight();
    }
    return (
      <div className="App">
        <NavBar />
        <div style={{height:70}} />
        <CaseTable />
      </div>
    );
  }
}


const mapStateToProps = state => ({
   ...state
})

const mapDispatchToProps = dispatch => ({
 setThemeLight: () => dispatch(setThemeLight()),
 setThemeDark: () => dispatch(setThemeDark())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


/*<button onClick={simpleAction}>Test redux action</button>
  <pre>
     {
      JSON.stringify(this.props)
     }
    </pre>
*/
