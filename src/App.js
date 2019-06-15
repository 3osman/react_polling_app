import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import QuestionList from '../src/components/question_list';
import './App.scss';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" render={() => <Redirect to="/questions" />} />
      <Switch>
        <Route path="/questions" component={QuestionList} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
)

export default App;
