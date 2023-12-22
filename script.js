const url = 'https://openweather43.p.rapidapi.com/weather?q=Delhi&appid=da0f9c8d90bde7e619c3ec47766a42f4&appid=%3CREQUIRED%3E&units=standard';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6856b6547cmshf2cf672f006d824p1d300ajsn2e71c6571d70',
		'X-RapidAPI-Host': 'openweather43.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
