
var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function() {
    console.log("My event created");
}

//Assigning event handler to an event
eventEmitter.on('myevent',myEventHandler);

//Raise event
eventEmitter.emit('myevent');
