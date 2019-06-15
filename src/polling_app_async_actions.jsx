import { PollingAppActions } from './polling_app_reducer';

const getQuestions = page => (dispatch, getState, { api }) => {
  dispatch(PollingAppActions.getQuestionsStart());
  dispatch(PollingAppActions.questionsLoading(true));
  api.questions(page)
    .catch(() => dispatch(PollingAppActions.getQuestionsFail()))
    .then((response) => {
      dispatch(PollingAppActions.getQuestionsSuccess(response.data));
      dispatch(PollingAppActions.questionsLoading(false));
  });
};

const getQuestion = id => (dispatch, { api }) => {
  dispatch(PollingAppActions.getQuestionStart());
  api.question(id)
    .catch(() => dispatch(PollingAppActions.getQuestionFail()))
    .then((response) => {
      dispatch(PollingAppActions.getQuestionSuccess(response.data));
  });
};

const vote = (id, choice) => (dispatch, { api }) => {
  dispatch(PollingAppActions.voteStart());
  api.vote(id, choice)
    .catch(() => dispatch(PollingAppActions.voteFail()))
    .then(() => {
      dispatch(PollingAppActions.voteSuccess());
  });
};

export default {
  getQuestion,
  getQuestions,
  vote
};
