const express = require('express');

const question  = require('./questions');
const random = require('./random');

const app = express();

const getQuestion = (req,res) => {
	const  {number} = req.query;
	const {ALL_QUESTIONS} = question;
	const questions = new Array(Number(number)).fill(0).map((i,index) => {
		return Object.assign({},
			{id:index}),
			ALL_QUESTIONS[random.number(0,ALL_QUESTIONS.length)]()
	});
	res.send(questions);
}

app.get('/questions', getQuestion); 

app.listen(3001);
