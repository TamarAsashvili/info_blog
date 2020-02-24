import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Member from './components/Member';
import Contact from './components/Contact';
import Home from './components/Home';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';

export default class MyRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/member' component={Member} />
        <Route path='*' component={NotFound} />
      </Switch>
    );
  }
}
