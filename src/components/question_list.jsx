import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionRow from './question_row';
import PropTypes from 'prop-types';
import { PollingAppSelectors } from '../polling_app_selectors';
import PollingAppAsyncActions from '../polling_app_async_actions';

class QuestionList extends Component {
  componentDidMount() {
    this.props.getQuestions(this.props.page);
  }
  render() {
    const { questions } = this.props;
    let questionRows = Object.keys(questions).map((key, index) =>(
      <QuestionRow
        key={key}
        title={questions[key].question}
        publishedAt={questions[key].published_at}
        url={questions[key].url}
      />
    ));
    return (
      <div className="main-container">
        <div className="main-header">
          <h1>Vote Now</h1>
        </div>
        {this.props.fetchingQuestions && <div className="loading"><span> Loading </span></div> }
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
  page: PropTypes.number.isRequired,
  getQuestions: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  questions: PollingAppSelectors.getQuestions(state),
  fetchingQuestions: PollingAppSelectors.getFetchingQuestions(state),
  page: PollingAppSelectors.getPage(state),
});

const mapDispatchToProps = dispatch => ({
  getQuestions: page => dispatch(PollingAppAsyncActions.getQuestions(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
