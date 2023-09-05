
//burda xarakterlerin sayini sorusur
let word = "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
function findStringLength(str) {
  return str.length;
}

let c = findStringLength(word)
console.log(c);






//herflerin sayini tapmaq
/*let word = "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
// console.log(word.length);


function findLetterCount(str) {
  let chars=[' ', '.', ',', '!', '?', ':', ';', '-', '(', ')', '[', ']', '{', '}', '"', "'", '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let herfler=[]
  for (let i = 0; i < str.length; i++) {
      if(chars.includes(str[i])){
        continue
      }
      else{
        herfler.push(str[i])
      }
  }

console.log(herfler.length);
}


findLetterCount(word)*/