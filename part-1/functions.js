function month(date) {

  if (!(d instanceof Date)) {
    return "Not a valid Date";
  }

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'October',
    'November',
    'December']

    let anyDate = new Date(date)

    let index = anyDate.getMonth()
    return months[index]
}

module.exports = {month}


//-------------------------------------

function reverseSentence(string) {
  let newStr = string.split(' ').reverse().join(' ')
  return newStr
}

//-------------------------------------


function nameProps(obj) {
  let keys = Object.keys(obj)
  return keys
}

//-------------------------------------

function filterBetween(array, min, max) {


}
