import './App.css';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './NoMatch';
import SignUpUser from './SignUpUser';
import TeacherSignUp from './TeacherSignUp';

function App() {
  return (
    <div className="App">
         <Router>
      <Switch>
        <Route path = "/home">
          <Home/>
        </Route>
        <Route path = "/signup">
          <SignUpUser/>
        </Route> 
        <Route path = "/teacherSignUp">
          <TeacherSignUp/>
        </Route>     
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route path = "*">
          <NoMatch/>
        </Route>
    </Switch>
  </Router>
    </div>
  );
}

export default App;
