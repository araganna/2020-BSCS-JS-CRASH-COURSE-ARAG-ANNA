let currentDate = new Date()
let weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let year = currentDate.getFullYear()
let date = currentDate.getDate()
let currentDay = weekDay[currentDate.getDay()]
let currentMonth = months[currentDate.getMonth()];
console.log(`Today is ${currentDay}, ${currentMonth} ${date} year ${year}`)