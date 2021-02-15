import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import AddWorker from '../Workers/AddWorker/AddWorker';
import EditWorker from '../Workers/EditWorker/EditWorker';
import Worker from '../Workers/ShowWorker/Worker';

const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/homepage">
          <HomePage />
        </Route>
        <Route exact path="/worker/:id">
          <Worker />
        </Route>
        <Route exact path="/worker/edit/:id">
          <EditWorker />
        </Route>
        <Route exact path="/add-worker">
          <AddWorker />
        </Route>

        <Route>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};

export default Router;
