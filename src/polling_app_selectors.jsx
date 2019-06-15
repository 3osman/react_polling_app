import { createSelector } from 'reselect';

const getPollingAppState = state => state;
const getQuestions = createSelector(getPollingAppState, appState => appState.questions);
const getQuestion = createSelector(getPollingAppState, appState => appState.question);
const getVoteSuccess = createSelector(getPollingAppState, appState => appState.voteSuccess);
const getFetchingQuestions = createSelector(getPollingAppState, appState => appState.fetchingQuestions);

export const PollingAppSelectors = {
  getQuestions,
  getQuestion,
  getVoteSuccess,
  getFetchingQuestions,
};
