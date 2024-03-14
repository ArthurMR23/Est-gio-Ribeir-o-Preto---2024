function reverseString(str) {
  var splitString = str.split(""); // Divide a string em um array de caracteres
  var reverseArray = splitString.reverse(); // Inverte o array
  var joinArray = reverseArray.join(""); // Junta os caracteres em uma string
  return joinArray; // Retorna a string invertida
}

var originalString = "hello";
var reversedString = reverseString(originalString);
console.log(reversedString); // Saída: "olleh"

