import axios from 'axios';
const ROOT_URL = 'https://polls.apiblueprint.org';

const getQuestions = page => axios({
  url: `${ROOT_URL}/questions`,
  method: 'get',
  params: { page }
});

const getQuestion = id => axios({
  url: `${ROOT_URL}/questions/${id}`,
  method: 'get',
});

const postVote = url => axios({
  url: `${ROOT_URL}${url}`,
  method: 'post',
});

const api = {
  questions: getQuestions,
  question: getQuestion,
  vote: postVote,
};

export default api;
