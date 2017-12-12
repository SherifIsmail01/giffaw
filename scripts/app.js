console.log ("ready");

$(document).on("ready", function(){

	$.ajax({
		method: 'GET',
		url: 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=25',
		dataType: 'json',
		success: onSuccess
	});

	function onSuccess(data) {
			for (var i = 0; i < data.data.length; i++) {

				$("#trending").append(`<img src="${data.data[i].images.original_still.url}"></img>`);
			}
		};	
	
		$(".form-inline").on("submit", function(e) {
			e.preventDefault();
			
			$.ajax({
				method:'GET',
				url: 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + $(".gif-input").val(),
				dataType: 'json',
				success: onSearchSuccess,
			});

			function onSearchSuccess(searchResults) {
				
				for (var i = 0; i < searchResults.data.length; i++) {
					$("#search_results").append(`<img src="${searchResults.data[i].images.original_still.url}"></img>`);
				}

			}

		});












});
