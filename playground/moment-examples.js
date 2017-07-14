var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01am -> 60
// Des 31st 1969 @ 11:59pm -> -60
var now = moment();

console.log('Current timestamp ' + now.unix());

var timestamp = 1499871262;
console.log('Current moment ' + moment.unix(timestamp).format());
console.log('Current moment ' + moment.unix(timestamp).format('MMM D, YYYY @ h:mm a'));
