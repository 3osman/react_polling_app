import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PollingAppAsyncActions from '../polling_app_async_actions';
import { PollingAppSelectors } from '../polling_app_selectors';

class QuestionDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      choice: {
        title: '',
        url: null
      }
    };
  }
  componentDidMount() {
    const {questionId} = this.props.match.params;
    this.props.getQuestion(questionId);
  }
  handleChoiceOnClick = ({ choice, url }) =>{
    this.setState({
      choice: {
        title: choice,
        url: url
      }
    });
  }

  handleVoteSubmit = () => {
    this.props.vote(this.state.choice.url, () => {
      this.props.history.push(`${this.props.match.url}/success`);
    });
  }

  render() {
    const { question, choices } = this.props.selectedQuestion;
    const { title } = this.state.choice
    const choicesList = choices ? Object.keys(choices).map((key) => {
      return (
        <div key={key} className={`choices-list ${title === choices[key].choice ? ' active' : ''}`} onClick={() => {
          this.handleChoiceOnClick(choices[key]);
        }}>
          <span>{choices[key].choice} </span>
          <span>{choices[key].votes} Vote</span>
          <span>{choices[key].percentage}%</span>
        </div>
      );
    }) : null;
    return (
      <div className="main-container">
        { this.props.fetchingQuestions && <div className="loading"><span></span></div> }
        {
          question ?
          <div className="wrapper">
            <div className="box question">{question}</div>
            <div className="box choices">
              {choicesList}
              <button className="save-btn" onClick={this.handleVoteSubmit}>Vote</button>
            </div>
          </div>
        :
          <div className="wrapper">
            <div className="box question">No question found</div>
            <Link to={`/`}>
              <button>Go Back</button>
            </Link>
          </div>
        }
      </div>
    )
  }
}

QuestionDetail.propTypes = {
  fetchingQuestions: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  selectedQuestion: PropTypes.object.isRequired,
  getQuestion: PropTypes.func.isRequired,
  vote: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  selectedQuestion: PollingAppSelectors.getQuestion(state),
  fetchingQuestions: PollingAppSelectors.getFetchingQuestions(state),
});

const mapDispatchToProps = dispatch => ({
  vote: (url, callback) => dispatch(PollingAppAsyncActions.vote(url, callback)),
  getQuestion: id => dispatch(PollingAppAsyncActions.getQuestion(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail);
