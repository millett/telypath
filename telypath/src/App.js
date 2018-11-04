import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setThemeDark, setThemeLight } from './redux/action'
import NavBar from './components/NavBar'
import CaseTable from './components/CaseTable'
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router-dom'
import PatientView from './components/PatientView'
import ReportView from './components/ReportView'

class App extends Component {
  render() {
    const setTheme = (event) => {
      this.props.setThemeLight();
    }
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div style={{height:70}} />
          <Switch>
            <Route exact path="/" component={CaseTable} />
            <Route path="/patientView" component={PatientView} />
            <Route path="/reportView" component={ReportView} />
          </Switch>

        </div>
      </Router>
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
