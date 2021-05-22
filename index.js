const moment = require('moment');
const momentDurationFormatSetup = require("moment-duration-format");

function getAge(dateOfBirth){
    let age = moment.duration(moment().diff(dateOfBirth))
    return moment.duration(age, "milliseconds").format();
}

console.log(getAge("1995-04-03")) //output 26 years, 1 month, 19 days

// const moment = require('moment');

// let currentDate = moment()
// let dateOfBirth = moment("1995-04-03")

// let duration = moment.duration(currentDate.diff(dateOfBirth))

// console.log(moment.duration(duration).humanize())

// занятие

// const moment = require('moment')
// const now = moment()
// const birthday = moment('03/04/1995', 'DD/MM/YYYY')
// const age = now.diff(birthday)
// const agedur = moment.duration(age)

// console.log(agedur.humanize())