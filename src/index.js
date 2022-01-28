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
    if (isClose(str[i])) {
      if (brackets[str[i]] !== stack.pop()) {
        return false;
      }
    } else {
      stack.push(str[i])
    }
  }
  return !stack.length
  function isClose(item) {
    return [')', '}', ']', '|'].indexOf(item) > -1;
  }
}
