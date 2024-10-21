function checkStringLength(len, maxLength){
  return len >= maxLength;
}

function isPalindrome (str){
  const cleanedStr = str.replaceAll(' ', '').toLowerCase;
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;

}
