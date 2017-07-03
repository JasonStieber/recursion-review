/*eslint indent: [2, 2, {"SwitchCase": 1}]*/
// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  if (typeof json !== 'string') {
    throw new Syntaxerror('Please pass a string');
  }
  var skinyJson = json.trim();
  switch (skinyJson.charAt(0)) {
    case '"':
      if (!skinyJson.endsWith('"')) {
        throw new Syntaxerror('Please pass a valid String Jerk');
      }
      return skinyJson.slice(1, -1);
      break;
    case '{':
      if (!skinyJson.endsWith('}')) {
        throw new Syntaxerror('Please pass a valid object Jerk');
      }
      while()
      return {};
      break;
    case '[':
      if (!skinyJson.endsWith(']')) {
        throw new Syntaxerror('Please pass a valid Array Jerk');
      }
      return [];
      break;
    default:
      if (!isNaN(Number.parseFloat(json))) {
        return Number.parseFloat(json);
      } else if (json === 'true') {
        return true;
      } else if (json === 'false') {
        return false;
      } else if (json === 'null') {
        return null;
      } else if (json === 'undefined') {
        return undefined;
      } 
  


  }
  // your code goes here
};
