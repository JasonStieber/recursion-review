/*eslint indent: [2, 2, {"SwitchCase": 1}]*/
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
        let keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
          if (obj[keys[i]] === undefined || 
            typeof obj[keys[i]] === 'function' ||
            Object.keys(obj)[i] === undefined) {
            continue;
          }
          if (objectString !== '{') { objectString += ','; }
          objectString += '"' + keys[i] + '":';
          objectString += stringifyJSON(obj[keys[i]]); 
        }  
        objectString += '}';
        return objectString;
      }
      break;
    default:
      return undefined;  
      break;
  }
};
