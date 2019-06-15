import axios from 'axios';

const ROOT_URL = 'https://polls.apiblueprint.org';

const getQuestions = page => axios({
  url: `${ROOT_URL}/questions`,
  method: 'get',
  parasms: { page }
});

const getQuestion = id => axios({
  url: `${ROOT_URL}/questions/${id}`,
  method: 'get',
});

// https://polls.apiblueprint.org/questions/question_id/choices/choice_id
const postVote = (id, choice) => axios({
  url: `${ROOT_URL}/questions/${id}/choices/${choice}`,
  method: 'post',
});

const api = {
  questions: getQuestions,
  question: getQuestion,
  vote: postVote,
};

export default api;
