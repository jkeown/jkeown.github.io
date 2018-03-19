// let date = '4/1/18';
// let venue = 'Yo Momma\'s house';
// let time = 'All the time';

// document.querySelector('.djevent').innerHTML = `
// <td>${date}</td>
// <td>${venue}</td>
// <td>${time}</td>
// `;

////////HTML include import code////////////////

let link = document.querySelector('link[rel="import"]');
let calendar = link.import;
let content = calendar.querySelector('table');
let calendarDiv = document.querySelector('.calendar-div');

calendarDiv.appendChild(content.cloneNode(true));