import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import QuestionList from './components/question_list';
import QuestionDetail from './components/question_detail';
import VoteStatus from './components/vote_status_page';

import './App.scss';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" render={() => <Redirect to="/questions" />} />
      <Switch>
        <Route path="/questions/:questionId/success" component={VoteStatus} />
        <Route path="/questions/:questionId" component={QuestionDetail} />
        <Route path="/questions" component={QuestionList} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
)

export default App;
