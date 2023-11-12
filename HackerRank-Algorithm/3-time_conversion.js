/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example


Return '12:01:00'.


Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string
representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in  hour format
Returns

string: the time in  hour format
Input Format

A single string  that represents a time in -hour clock format (i.e.:  or ).

Constraints

All input times are valid
Sample Input

07:05:45PM
Sample Output

19:05:45
*/

function timeConversion(s) {
    let time = s.split(":")
    let hour = time[0]
    let minute = time[1]
    let seconds = time[2].substring(0, 2)
    let ampm = time[2].substring(2)
    let newHour;

    if (ampm === "AM" && hour === "12") {
        newHour = "00"
    } else if (ampm === "PM" && hour === "12") {
        newHour = "12"
    } else if (ampm === "PM") {
        newHour = parseInt(hour, 10) + 12
    } else {
        newHour = hour
    }
    return `${newHour}:${minute}:${seconds}`
}
const result = timeConversion('07:05:45PM')
console.log(result)