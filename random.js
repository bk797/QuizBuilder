
const shuffle = (arr,index) => {
	arr.forEach((e,index,arr) => {
		const swapIndex = Math.trunc(Math.random() * (index+1));
		arr[index] = arr[swapIndex];
		arr[swapIndex] = e;
	});
}

const getDistinctRandomNumbers = (min,max,elements) => {
	const range = max-min;
	const arr = new Array(range).fill(0).map((i,index) => index+min);
	shuffle(arr)
	return arr.splice(0,elements);
}

const getRandomNumber = (min,max) => {
	return Math.trunc(Math.random() * (max-min));
}


module.exports = {distinctNumbers: getDistinctRandomNumbers, number: getRandomNumber, shuffle: shuffle};