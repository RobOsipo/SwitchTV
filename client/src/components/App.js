import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate.js'
import StreamDelete from './streams/StreamDelete.js'
import StreamEdit from './streams/StreamEdit.js'
import StreamList from './streams/StreamList.js'
import StreamShow from './streams/StreamShow.js'


const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Route exact path='/' component={StreamList} />
          <Route path='/streams/new' component={StreamCreate} />
          <Route path='/streams/edit' component={StreamEdit} />
          <Route path='/streams/delete' component={StreamDelete} />
          <Route path='/streams/show' component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;



