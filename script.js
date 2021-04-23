window.addEventListener("load", function() {
	console.log("loads");
	fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
		// Access the JSON in the response
		response.json().then( function(json) {
			json.sort(compare);
			console.log(json);
			const div = document.getElementById('container');
			for (let i = 0; i < json.length; i++) {
				console.log("i: " + i);
				if (json[i].active === true) {
					tag = `<li><span id="true">Active: ${json[i].active}</span></li>`;
				}
				else {
					tag = `<li>Active: ${json[i].active}</li>`;
				}
				div.innerHTML = div.innerHTML + `
					<div class="astronaut">
						 <div class="bio">
								<h3>${json[i].firstName} ${json[i].lastName}</h3>
								<ul>
									 <li>Hours in space: ${json[i].hoursInSpace}</li>
									 ${tag}
									 <li>Skills: ${json[i].skills.join(", ")}</li>
								</ul>
						 </div>
						 <img class="avatar" src="${json[i].picture}">
					</div>
				`;
			}
		});
	});
	function compare(a, b) {
		if (a.hoursInSpace > b.hoursInSpace) {
			return -1;
		}
		if (a.hoursInSpace < b.hoursInSpace) {
			return 1;
		}
		return 0;
	}
	console.log(json.length);
	document.body.h1.innerHTML.value = `Astronauts (count: ${json.length})`;
});