var eveningstring = "morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning morning"

console.log(eveningstring)

var eveningArray = eveningstring.split(" ")
console.log(eveningArray)


var container = document.querySelector(".output ul")

// for(var i = 0; i < nameArray.length; i++) {
// 	console.log(nameArray[i])
// }




eveningArray.forEach(buildboxes);

function buildboxes(individual, number) {
	var box =document.createElement("div")
	var caption =document.createElement("p")
	box.classList.add("wrapper")
	box.id = "evening" + number
	caption.textContent = individual
	box.appendChild(caption)
	container.appendChild(box)
}


var list = document.querySelectorAll(".wrapper")

console.log(list)

list.forEach(listen)


function listen(individual, number) {
	individual.addEventListener("mouseover", mouseappear)
}

function mouseappear(event){
	console.log(event.target.id)
	document.getElementById("#" + "event.target.id").style.visibility="visible"
	}












