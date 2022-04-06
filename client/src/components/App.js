import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'


const PageOne = () => {
    return <div>Page One</div>
}

const PageTwo = () => {
    return <div>Page Two</div>
}

const App = () => {
    return (
        <div>
            <Router>
              <div>
                <Route exact path='/' component={PageOne} />
                <Route exact path='/pagetwo' component={PageTwo} />
              </div>
            </Router>
        </div>
    )
}

export default App;