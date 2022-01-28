module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let brackets = {
    ')': '(',
    '}': '{',
    ']': '[',
    '|': '|'
  }
  if (str.length === 0) {
    return true;
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] ) {

    } else {
      
    }
  }
  return !stack.length
}
