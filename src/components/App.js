import React from "react";

import { Router, Route } from "react-router-dom";

import Header from "./Header";

import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import history from "../history";

/* 
    Tranditional html redirect using anchor 
    should not be used in react application
    becuase when href='/pagetow' browser would
    make a network reques and recieve the index.html
    once it recieve the hmtl file it would remove the
    previously load hmlt file along with state data
*/

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
