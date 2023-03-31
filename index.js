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
const tester = ['dog' , 'cat']
const sentenceSplitter = (str) =>{
  let splitter = str.split(' ')
  return splitter
}
const wordCapitalizer = (array) => {
  return array.map((word) => {
    let splitWord = word.split(' ');
    splitWord[0] = splitWord[0].toUpperCase()
    return splitWord.join(' ')
  })
}
const titleCased = () => {
  return tutorials.map(tutorial => {
    return tutorial.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  });
}


