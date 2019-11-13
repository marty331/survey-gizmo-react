const express = require('express');
const request = require('request');

const app = express();

require('dotenv').config({path: __dirname + '/../.env'});

const api_token = process.env.API_TOKEN;
const api_token_secret = process.env.API_TOKEN_SECRET;
const survey_id = process.env.SURVEY_ID;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});
app.use(express.json());

app.get('/survey', (req, res) => {
  request(
    { url: 'https://restapi.surveygizmo.com/v5/survey/' + survey_id + '?api_token=' + api_token + '&api_token_secret=' + api_token_secret },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

app.put('/sendSurvey', (req, res) => {
  console.log('req body : ', req.body);
  var sendUrl = 'https://restapi.surveygizmo.com/v5/survey/' + survey_id + '/surveyresponse?_method=PUT' + '&api_token=' + api_token + '&api_token_secret=' + api_token_secret
  for (let answer of req.body.answers) {
    sendUrl = sendUrl + "&data[" + answer.questionId + "][value=" + answer.value ;
  }
  console.log('sendUrl: ', sendUrl)
  request(
    { url: sendUrl },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      console.log('response: ', body);
    }
  )
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
