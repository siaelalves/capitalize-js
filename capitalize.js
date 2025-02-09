/**
 * Converte o texto em modo capitalizado, onde apenas a primeira letra de cada palavra fica em maiúscula.
 * @param {string} sentence Sentença a ser capitalizada.
 * @param {number} minLenght Número mínimo de letras numa palavra para que ela seja capitalizada.
 * @param {Array} exceptions Lista de palavras a serem excluídas da capitalização. Aceita um número 
 * indefinido de argumentos. Cada argumento precisa ser do tipo `string`. As palavras dessa lista 
 * serão comparadas incluindo maiúsculas e minúsculas.
 * @return {string} Retorna uma `string` com a primeira letra do valor em `sentence` convertido para maiúscula.
 * @author Siael Alves
 * @copyright © 2025 Copyright Siael Alves
*/
function capitalize(sentence, minLenght = 2, ...exceptions) {
 if (typeof sentence != "string") {
  throw new TypeError(`O argumento "sentence" deveria ser do tipo "string".`);  
 }

 if (sentence == "") {
  throw new Error(`O argumento "sentence" não pode estar vazio.`);
 }

 if (typeof minLenght == "number") {
  throw new TypeError(`O argumento "minLenght" deveria ser do tipo "number".`);
 }

 if (typeof exceptions[Symbol.iterator] != "function") {
  throw new SyntaxError(`O argumento "exception" não é de um tipo iterável.`);
 }

 exceptions.forEach(exception => {
  if (typeof exception != "string") {
   throw new TypeError(`O argumento "exception" deve conter apenas valores do tipo "string".`);
  }
 });

 let words = new Array();
 words = sentence.split(" ");

 words = words.map((word)=>{

  if (exceptions.includes(word)) {
   return word;
  }

  if (word.length > minLenght) {
   let firstLetter = word.substring(0, 1).toUpperCase();
   let otherLetter = word.substring(1).toLowerCase();

   return firstLetter + otherLetter;
  }

  if (word.length <= 2) {
   return word.toLowerCase();
  }
  
 });

 return words.join(" ");
}
