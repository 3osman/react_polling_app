import axios from 'axios';

const ROOT_URL = 'https://polls.apiblueprint.org';

export const getQuestions = page => axios({
  url: `${ROOT_URL}/questions`,
  method: 'get',
  parasms: { page }
});

export const getQuestion = id => axios({
  url: `${ROOT_URL}/questions/${id}`,
  method: 'get',
});

// https://polls.apiblueprint.org/questions/question_id/choices/choice_id
export const postVote = (id, choice) => axios({
  url: `${ROOT_URL}/questions/${id}/choices/${choice}`,
  method: 'post',
});
