import { createSelector } from 'reselect';

const getPollingAppState = state => state.pollingApp;
const getQuestions = createSelector(getPollingAppState, appState => appState.questions);
const getQuestion = createSelector(getPollingAppState, appState => appState.question);
const getVoteSuccess = createSelector(getPollingAppState, appState => appState.voteSuccess);
const getFetchingQuestions = createSelector(getPollingAppState, appState => appState.fetchingQuestions);
const getPage = createSelector(getPollingAppState, appState => appState.page);
const getVoteStatus = createSelector(getPollingAppState, appState => appState.voteSuccess);
export const PollingAppSelectors = {
  getQuestions,
  getQuestion,
  getVoteSuccess,
  getFetchingQuestions,
  getPage,
  getVoteStatus
};
