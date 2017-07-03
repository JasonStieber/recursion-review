// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

var isClass = function(className, node) {
  if (node.classList !== undefined && node.classList.contains(className)) {
    return [node];
  } else {
    return [];
  }
};

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, currentDir) { 
// your code here
  if (currentDir === undefined) {
    return getElementsByClassName(className, document.body);
  }
  var matchedNodes = isClass(className, currentDir);
  var numberOfChildren = currentDir.childNodes.length === 0 ? 0 : 
    currentDir.childNodes.length;
  for (var i = 0; i < numberOfChildren; i++) {
    matchedNodes = matchedNodes.concat(getElementsByClassName(className, 
      currentDir.childNodes[i]));
  }
  matchedNodes.concat(isClass(className, currentDir));
  return matchedNodes;
   
};
