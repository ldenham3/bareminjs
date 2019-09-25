// GOAL: make this more OO. ex every item is a class with a render function. What classes are needed:
// Todo list item


// // VARS
// var element = document.getElementById("app");
// var usrName;
// var textNodeInsert1 = document.createElement('p'); //changed for now, using input for another thing
// var textNodeInsert2 = document.createTextNode("Hello ");
// var textNodeInsert3 = document.createTextNode("Person!");
// var ul = document.createElement('ul');

// element.appendChild(ul);
// element.appendChild(textNodeInsert2);
// element.appendChild(textNodeInsert3);
// element.appendChild(textNodeInsert1);


// BUTTON MESSING WITH
//var button = document.querySelector('.button');

//button.onclick = function () {
//	this.style.backgroundColor = "rgb(255,255,6)";
//}

// function deleteItem(e) {
// 	var deletedNode = e.target.deletedNode;
//     console.log("delete an item: " + deletedNode);
// }



//button = document.querySelector('.button')
//button.onclick = handler

// RANDOM STUFF
// const xTimesTwo = (x) => (
// 	x*2
// )

// console.log(xTimesTwo(2))

// x => x*2

// function toggleSomething(){
// 	alert('test')
// }

// function changeButtonColor(){
// }

//NEW

/**
 * Represents todo list
 */
class ToDoList { //basically full to do list container. classes 'return' (not literally) objects, can use interchangably with objects (obj would have key value pairs, its icky)

	/**
	 * Still havent really figured out why everything needs a render (for react later) or what exactly it holds as it does not necessarily paint or actually render anything
	 */
	render() {

		let container = document.createElement('div'); //create a container for the things that go in the todolist so you can add them as children and return them all
		let list = document.createElement('ul'); //creates unordered list element
		let itemAddButton = document.createElement('button'); //creates button element
		let itemInputField = document.createElement('input'); //creates text input field 
		itemInputField.id = 'typedInName'; //sets the text inpu fields id so you can use the getelementbyid method in the handler

		itemAddButton.innerHTML = 'Add Value' //buttons labels are just the text inside the tags, so add info inside the tags
		itemAddButton.onclick = e => this.clickHandler(e,list); //call onclick on the button and set it to a function with event parameter that maps the event and the list onto clickhandler method which handles everything that needs to happen when the button is clicked

		container.appendChild(list); //add list to container
		container.appendChild(itemAddButton); //add button to container
		container.appendChild(itemInputField); //add input field to container

		return container; //return the container that holds all the elements we just made

	}

	deleteChild(value) {
		let deletedChild = value;
		console.log(deletedChild);
	}

	/**
	 * itemAddButton on click handler method
	 */
	clickHandler(e,ul) { 

		e.target.style.backgroundColor = "green"; //e set by proxy of being a button onclicks first parameter, can be anything you want but generally e, evt, or event. browser expects and sets this which is how it knows its the button to turn green. button would be e.target, the event is e

		let typedInNameValue = document.getElementById("typedInName").value; //set new variable to the value of the element whos id is typedinname, which is set in render

		let listItem = new ToDoItem(typedInNameValue, this); //set new list item variable to a new to do item object whos paramater is value from the constructor below? so set typedInNameValue above when the button is clicked and then create a new todoitem with that value passed in as a parameter

		ul.appendChild(listItem.render()); //append the new object to the UL using render from todoitem which creates an empty li, adds value param (typed in thingy) to list items inner html, creates a new button to go inside the listitem, appends it as a child, and then returns the listitem li it creates

		console.log(ul); //log the list for debugging sake to make sure it was added

		document.getElementById('typedInName').value=''; //clear the field of the typed in value

	}

}

/**
 * Represents an item in the todo list
 */
class ToDoItem { //kicks back a new item when called in todolist's render method to create the new li before adding it to the ul of items

	constructor (value, parent) { //to do items need to be added with a value so the constructor has that as a parameter
		this.value = value; //listen to the class on 'this' again because its a pain
		this.parent = parent;
	}


	render() { //rendering (? still dont get) (i guess creating?) a new to do list li element

		let listItem = document.createElement('li'); //create an empty li element

		listItem.innerHTML = this.value; //set the inside html plaintext for the list item to the value passed in as a parameter to this class's constructor above

		let itemRemoveButton = document.createElement('button'); //create a new button for removing the li from the list

		itemRemoveButton.onclick = e => this.clickHandler(e);

		listItem.appendChild(itemRemoveButton); //append the button as a child element to the new li element

		return listItem; //return the li element we just made

	}

	/**
	 * itemAddButton on click handler method
	 */
	clickHandler(e) { 
		e.target.style.backgroundColor = "pink";
		let somethingParenty = this.parent.deleteChild(this.value);
		console.log(this.value);
	}

}

/**
 * Todo
 * Represents (or it will) the area that contains the functionality to add a new item (ie, input field and button)
 */
class AddNewItemStrip { 

	render() {

	}

}

let element = document.getElementById("app"); //create a new variable and set it equal to the element with the id app which is the empty div in the html file which apparently is how we do things
let newToDoList = new ToDoList(); //create a variable and set it equal to a new todolist object 
element.appendChild(newToDoList.render()); //append the todolist object (which you apparently need to call render to create) to the element variable which is that main parent div













