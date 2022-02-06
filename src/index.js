module.exports = function check(str) {
  let stack = [];
  let brackets = {
    ')': '(',
    '}': '{',
    ']': '[',
    '2': '1',
    '4': '3',
    '6': '5'
  }
  let countStick = 0;
  let countSeven = 0;
  let countEight = 0;
  let mm = 'some';
  let tf = 'some';
  if (str.length === 0) {
    return true;
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i]==='|') {
      Stick(str[i]);
	  if (tf == false) {
		  return false
	  }
      continue;
    }
	if (str[i]==='7') {
      Seven(str[i]);
	  if (tf == false) {
		return false
	  }
      continue;
    }
	if (str[i]==='8') {
      Eight(str[i]);
	  	  if (tf == false) {
		  return false
	  }
      continue;
    }
    if (isClose(str[i])) { // если скобочка закрывающаяся
      if (brackets[str[i]] !== stack.pop()) {//не равен последней в стеке
        return false;
      }
    } else { //кладем в стек, если скобочка открывающаяся
      stack.push(str[i])
    }
  }
  
  return stack.length === 0
  
  function isClose(item) {
    return [')', '}', ']', '2', '4', '6'].indexOf(item) > -1;
  } 

  function Stick(item) {
	  ++countStick;
    if (countStick % 2 !== 0) {
		
      stack.push(item)
    } else {
      if (item !== stack.pop()) {//не равен последней в стеке
        tf =  false;
    }
  }}
  
    function Seven(item) {
	  ++countSeven;
    if (countSeven % 2 !== 0) {
      stack.push(item)
    } else {
      if (item !== stack.pop()) {//не равен последней в стеке
        tf =  false;
    }
  }}
    function Eight(item) {
	  ++countEight;
    if (countEight % 2 !== 0) {
      stack.push(item)
    } else {
      if (item !== stack.pop()) {//не равен последней в стеке
        tf =  false;
    }
  }}

}

