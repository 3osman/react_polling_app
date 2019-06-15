import Immutable from 'seamless-immutable';

const GET_QUESTIONS_START = 'GET_QUESTIONS_START';
const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';
const GET_QUESTIONS_FAIL = 'GET_QUESTIONS_FAIL';
const QUESTIONS_LOADING = 'QUESTIONS_LOADING';
const GET_QUESTION_START = 'GET_QUESTION_START';
const GET_QUESTION_SUCCESS = 'GET_QUESTION_SUCCESS';
const GET_QUESTION_FAIL = 'GET_QUESTION_FAIL';
const VOTE_START = 'VOTE_START';
const VOTE_SUCCESS = 'VOTE_SUCCESS';
const VOTE_FAIL = 'VOTE_FAIL';

export const PollingAppActions = {
  getQuestionsStart: () => ({ type: GET_QUESTIONS_START, payload: { } }),
  getQuestionsSuccess: () => ({ type: GET_QUESTIONS_SUCCESS, payload: { questions } }),
  getQuestionsFail: () => ({ type: GET_QUESTIONS_FAIL, payload: { } }),
  questionsLoading: isLoading => ({ type: QUESTIONS_LOADING, payload: { isLoading } }),
  getQuestionStart: () => ({ type: GET_QUESTION_START, payload: { } }),
  getQuestionSuccess: () => ({ type: GET_QUESTION_SUCCESS, payload: { question } }),
  getQuestionFail: () => ({ type: GET_QUESTION_FAIL, payload: { } }),
  voteStart: () => ({ type: VOTE_START, payload: { } }),
  voteSuccess: () => ({ type: VOTE_SUCCESS, payload: { } }),
  voteFail: () => ({ type: VOTE_FAIL, payload: { } }),
};

const initialState = Immutable({
  questions: [],
  question: {},
  fetchingQuestions: false,
  voteSuccess: false
});

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTION_SUCCESS: {
      return state.set('questions', action.payload.questions);
    }
    case QUESTIONS_LOADING: {
      return state.set('fetchingQuestions', action.payload.isLoading);
    }
    case GET_QUESTION_SUCCESS: {
      return state.set('question', action.payload.question);
    }
    case VOTE_SUCCESS: {
      return state.set('voteSuccess', true);
    }
    case VOTE_FAIL: {
      return state.set('voteSuccess', false);
    }
    default:
      return state;
  }
};
