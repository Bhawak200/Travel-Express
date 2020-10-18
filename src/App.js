import React from 'react';
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom'
import Homepage  from './Page/homepage.js'
import Destination from './Page/destination.js'
import Contribute from './Page/Contribute.js'
import { Provider } from 'react-redux'
import initstore from './store'

const store=initstore()


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/destination'>
             <Destination/>
          </Route>
          <Route path='/contribute'>
            <Contribute/>
          </Route>
          <Route path='/'>
             <Homepage/>
          </Route>
        </Switch>
     </Router>
    </Provider>
  );
}

export default App;
