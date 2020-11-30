import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer/index";
import Wrapper from "./components/Wrapper/index";
import Nav from "./components/Nav/index";
import Search from "./pages/Saved/index";
import Saved from "./pages/Saved/index";
// import 'bootstrap/dist/css/bootstrap.css';

function App() {
  document.title = "Google Book Search"

  return (
    <Router>
      <div>
        <Nav />
        <Wrapper>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
