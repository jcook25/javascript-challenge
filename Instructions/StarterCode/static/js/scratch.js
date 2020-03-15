// Get the value property of the input element
var inputValue = inputElement.property("value");

console.log(inputValue);
console.log(people);

var filteredData = people.filter(person => person.bloodType === inputValue);

console.log(filteredData);
