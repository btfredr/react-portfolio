import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Intro />
        <Skills />
        <Projects />

        <Switch>
          <Route path="/#intro" exact component={Intro}></Route>
          <Route path="/#experience" exact component={Skills}></Route>
          <Route path="/#projects" exact component={Projects}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
