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

function titleCased(){
  // const tutorials1 = tutorials.split(" ");
 return tutorials.map( (tutorial) => {
              //  return tutorial[0].toUpperCase() + tutorial.substring(0)
              const cap = tutorial.split(" ");
              const captutororial = cap.map( (e) =>{
                return e.charAt(0).toUpperCase() + e.slice(1)
              }).join(" ")
              return captutororial
})}

console.log(titleCased());
// const words = mySentence.split(" ");

// words.map((word) => { 
//     return word[0].toUpperCase() + word.substring(1); 
// }).join(" ");

