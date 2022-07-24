const validateBrackets = (string) => {
  const stack = [];
  for(let i = 0; i < string.length; i++) {
    const char = string.charAt(i);
    if(char != "{" && char != "}" ) continue;
    
    stack.push(char)
    if(stack.length <= 1) continue;

    if(stack[stack.length - 2] == "{" && stack[stack.length - 1] == "}") {
      stack.splice(stack.length - 2, 2);
    }
  }

  return stack.length == 0;
}

module.exports = validateBrackets;

/* 
  After writing the above without using google --because that's what I would normally do when encountering a new 
  problem rather than try to reinvent the wheel-- I decided to search for 'javascript validate bracket pairs'  
  Here's a solution I probably would have copy-pasted instead of writing my own 😉
  https://medium.com/analytics-vidhya/javascript-check-valid-parentheses-with-a-stack-bc7b1bab26c2
*/