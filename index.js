const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function(splitted) {
    return splitted.split(' ').map(function(capitalizeFirstLetter) {
      return capitalizeFirstLetter.charAt(0).toUpperCase() + capitalizeFirstLetter.slice(1)
    }).join(' ')
  })
}
console.log(titleCased(tutorials));

//function titleCased(array) {
  //var wordArr = array.split(" ");
  //var newArr = wordArr.map(function(word) {
    //return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() ;
  //});
  //return newArr.join(' ');
//}

//console.log(titleCased(tutorials));

//= newTu.map(function(item) {
//return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
//})
//return titleCased;
//}


  //console.log(titleCased(tutorials));
  //.split(" ")
  //.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
  //.join(" ")