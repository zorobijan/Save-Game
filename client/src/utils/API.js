// const search = async (query) =>
//   axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${query}&rating=pg`);

// export default { search };


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2f8555ca11msh4b39654458e20aap10f591jsne0d3634b5035',
		'X-RapidAPI-Host': 'game-prices.p.rapidapi.com'
	}
};
const search = async () =>

fetch('https://game-prices.p.rapidapi.com/game/left-4-dead?region=us&type=game', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

export default { search };





// import axios from 'axios';

// let url = `https://game-prices.p.rapidapi.com/game/minecraft`

// const options = {
//   method: 'GET',
//   url: 'https://game-prices.p.rapidapi.com/games',
//   params: {title: 'minecraft', region: 'us', offset: '0', limit: '10'},
//   headers: {
//     'X-RapidAPI-Key': '2f8555ca11msh4b39654458e20aap10f591jsne0d3634b5035',
//     'X-RapidAPI-Host': 'game-prices.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

// fetch(url)
// .then(function (response) {
//   console.log(response)
//   return response.json();
// })

// const search = async (query) =>
//   axios.get(`https://game-prices.p.rapidapi.com/game/minecraft`);

// export default { search };
