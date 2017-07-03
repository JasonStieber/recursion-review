// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  switch (typeof obj) {
    case 'boolean':  
    case 'number':
      return obj.toString();
      break;
    case 'string':
      return '"' + obj.toString() + '"';
      break;
    case 'undefined':
      return '{}';
      break;
    case 'function':
      return 'undefined';
      break;
    case 'object':
      if (obj === null) {
        return 'null';
      } else if (Array.isArray(obj)) {
        let objectString = '[';
        for (const element of obj) {
          if (objectString !== '[') {
            objectString += ',';
          }
          objectString += stringifyJSON(element);
        }
        return objectString + ']';
      } else {
        let objectString = '{';
        for (let i = 0; i < Object.keys(obj).length; i++) {
          if (Object.keys(obj)[i] === undefined) { return '{}'; }
          if (objectString !== '{') {
            objectString += ',';
          }
          objectString += property + ':';
          objectString += obj[property]; 
        }  
        objectString += '}';
      }
      break;
    default:
      return undefined;  
      break;
  }
};
