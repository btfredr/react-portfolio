import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="#intro" exact component={Nav}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
