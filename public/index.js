$('.favoritesForm').on('submit', function(event) {
	event.preventDefault();

	const color = $('#color').val();
	const animal = $('#animal').val();
	const food = $('#food').val();
	const facialFeat = $('#facialFeat').val();
	const song = $('#song').val();
	const movie = $('#movie').val();

	const settings = {
		url: 'http://localhost:8080/favorites',
		data: JSON.stringify({
			color: color,
			animal: animal,
			food: food,
			facialFeat: facialFeat,
			song: song,
			movie: movie
		}),
		dataType: 'json',
		contentType: 'application/json',
		type: 'POST',
		error: function(err) {
			console.log(err);
		},
		success: function(res) {
			window.location = "success.html"
		}
	}

	$.ajax(settings);
})