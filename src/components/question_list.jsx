import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionRow from './question_row';
import { PollingAppSelectors } from '../polling_app_selectors';
import PollingAppAsyncActions from '../polling_app_async_actions';
import PropTypes from 'prop-types';

class QuestionList extends Component {
  componentDidMount() {
    this.props.getQuestions();
  }
  render() {
    const { questions } = this.props;
    let questionRows = Object.keys(questions).map((key, index) =>(
      <QuestionRow
        key={key}
        title={questions[key].question}
        publishedAt={questions[key].published_at}
        choices={questions[key].choices.length}
        url={questions[key].url}
      />
    ));
    return (
      <div className="App">
        <div className="App-header ">
          <h1>Questions</h1>
        </div>
        {this.props.fetchingQuestions && <div className="loading"><span></span></div> }
        <div className="container">
          {questionRows}
        </div>
      </div>
    );
  }
}

QuestionList.propTypes = {
  fetchingQuestions: PropTypes.bool.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  getQuestions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  questions: PollingAppSelectors.getQuestions(state),
  fetchingQuestions: PollingAppSelectors.getFetchingQuestions(state),
});

const mapDispatchToProps = dispatch => ({
  getQuestions: page => dispatch(PollingAppAsyncActions.getQuestions(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
