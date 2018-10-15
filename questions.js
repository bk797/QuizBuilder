const fs = require('fs');
const random = require('./random');

const peopleFile = './resources/people.json';
const planetFile = './resources/planets.json';

const people = JSON.parse(fs.readFileSync(peopleFile));
const planets = JSON.parse(fs.readFileSync(planetFile));

const personHeight = () => {
	const id = random.number(0,people.length);
	const {fields : p} = people[id]; const name = p.name; const height = Number(p.height);
	const question = `How tall is ${name} in cm?`;
	const choices = heightChoices(height);
	return {question:question,choices:choices,answer:height};
}

const heightChoices = (height) => {
	if(Number.isNaN(height)){
		return [1,2,3,4];
	}
	const choices = new Array(70).fill(height-35).map((i,index) => i+index);
	random.shuffle(choices);
	return choices.splice(0,4);
}

const getPlanet = (id) => {
	return planets[id].fields;
}

const personHomeWorld = () => {
	const homeWorldIds = random.distinctNumbers(0,planets.length,5);
	const personId = random.number(0,people.length);
	const {fields : p} = people[personId]; const ans = getPlanet(p.homeworld).name;
	const homeWorlds = homeWorldIds.map(id => planets[id].fields.name);
	if(!homeWorlds.includes(ans)) {homeWorlds.push(ans);}
	random.shuffle(homeWorlds);
	const question = `What is the homeworld of ${p.name}?`;
	return {question:question,choices:homeWorlds.splice(0,4), answer:ans};
}



module.exports =  {ALL_QUESTIONS: [personHeight,personHomeWorld]};