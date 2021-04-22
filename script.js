window.addEventListener("load", function() {
	console.log("loads");
	fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
		// Access the JSON in the response
		response.json().then( function(json) {
			console.log(json);
			const div = document.getElementById('container');
			for (let i = 0, i < json.length) {
				div.innerHTML = `
					<div class="astronaut">
						 <div class="bio">
								<h3>${json[i].firstName.value} ${json[i].lastName.value}</h3>
								<ul>
									 <li>Hours in space: ${json[i].hoursInSpace.value}</li>
									 <li>Active: ${json[i].active.value}</li>
									 <li>Skills: ${json[i].skills.value}</li>
								</ul>
						 </div>
						 <img class="avatar" src="${json[i].picture.value}">
					</div>
				`;
			}
		});
	});
});