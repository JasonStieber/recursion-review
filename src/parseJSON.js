/*eslint indent: [2, 2, {"SwitchCase": 1}]*/
// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  if (typeof json !== 'string') {
    throw new Syntaxerror('Please pass a string');
  }
  var skinyJson = json.trim();
  switch(skinyJson.charAt(0)){
    case '"':
      if(!skinyJson.endsWith('"')){
        throw new Syntaxerror('Please pass a valid String Jerk');
      }
      return skinyJson.slice(1,-1);
      break;
    case '{':
      return parseJSON()




  }
  // your code goes here
};
