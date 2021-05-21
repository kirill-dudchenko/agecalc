const moment = require('moment');
var momentDurationFormatSetup = require("moment-duration-format");

function getAge(dateOfBirth){
    let ageInMs = moment()- moment(dateOfBirth)
    return moment.duration(ageInMs, "milliseconds").format();
}

console.log(getAge("1995-04-03")) //output 26 years, 1 month, 19 days