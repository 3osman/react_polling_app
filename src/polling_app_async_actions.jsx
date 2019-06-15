import { PollingAppActions } from './polling_app_reducer';

const getQuestions = page => (dispatch, getState, { api }) => {
  dispatch(PollingAppActions.getQuestionsStart());
  dispatch(PollingAppActions.questionsLoading(true));
  api.questions(page)
    .catch(() => dispatch(PollingAppActions.getQuestionsFail()))
    .then((response) => {
      dispatch(PollingAppActions.getQuestionsSuccess(response.data ? response.data : []));
      dispatch(PollingAppActions.questionsLoading(false));
  });
};

const getQuestion = id => (dispatch, getState, { api }) => {
  dispatch(PollingAppActions.getQuestionStart());
  api.question(id)
    .catch(() => dispatch(PollingAppActions.getQuestionFail()))
    .then((response) => {
      if (response.data) dispatch(PollingAppActions.getQuestionSuccess(response.data));
  });
};

const vote = (url, callback) => (dispatch, getState, { api }) => {
  dispatch(PollingAppActions.voteStart());
  api.vote(url)
    .catch(() => dispatch(PollingAppActions.voteFail()))
    .then(() => {
      dispatch(PollingAppActions.voteSuccess());
      callback();
  });
};

export default {
  getQuestion,
  getQuestions,
  vote
};
