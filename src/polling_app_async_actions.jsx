import { PollingAppActions } from 'polling_app_reducer';

const getQuestions = page => (dispatch, { api }) => {
  disptch(PollingAppActions.getQuestionsStart());
  disptch(PollingAppActions.questionsLoading(true));
  api.questions(page)
    .catch(() => dispatch(PollingAppActions.getQuestionsFail()))
    .then((response) => {
      dispatch(PollingAppActions.getQuestionSuccess(response.data));
      disptch(PollingAppActions.questionsLoading(false));
  });
};

const getQuestion = id => (dispatch, { api }) => {
  disptch(PollingAppActions.getQuestionStart());
  api.question(id)
    .catch(() => dispatch(PollingAppActions.getQuestionFail()))
    .then((response) => {
      dispatch(PollingAppActions.getQuestionSuccess(response.data));
  });
};

const vote = (id, choice) => (dispatch, { api }) => {
  disptch(PollingAppActions.voteStart());
  api.vote(id, choice)
    .catch(() => dispatch(PollingAppActions.voteFail()))
    .then(() => {
      dispatch(PollingAppActions.voteSuccess());
  });
};
