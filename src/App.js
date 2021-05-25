import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Intro />
        <Skills />

        <Switch>
          <Route path="#intro" exact component={Intro}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
