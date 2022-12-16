import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Hire from './components/pages/Hire';
import Become from './components/pages/Become';
import Publications from './components/pages/Publications';
import Topic from './components/pages/Topic';
import Saved from './components/pages/Saved';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/hire" component={Hire} />
          <Route path="/become" component={Become} />
          <Route exact path="/publications/:category" component={Publications} />
          <Route path="/publications" component={Publications} />
          <Route path="/topic/:topic"component={Topic} />
          <Route path="/saved" component={Saved} />
        </Switch>
    </Router>
  );
}

export default App;
