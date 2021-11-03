import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import UserDetail from "./UserDetail";

function App() {
  return (
    
    <Router> 
      
            <div className="App">
              
            <p style ={{color:'#e8c3c3',fontSize:'40px' }}> <u><b> EMPLOYEE'S  ID </b></u></p>
                <Switch>
                    <Route path="/" exact component={Home} />  //it routes home directory
                    <Route path="/:id" exact component={UserDetail} />  //it routes userdetails directory
                </Switch>
            </div>
        </Router>
  );
}

export default App;
