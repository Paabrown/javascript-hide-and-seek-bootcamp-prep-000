function getFirstSelector(selector) {
  return document.querySelector(selector)
}

//Way 1 to do this, using "getelement" methods:
function nestedTarget() {
  return document.getElementById("nested").getElementsByClassName('target')[0]
}

//Way 2 to do this. Using simple selectors:
//function nestedTarget() {
//  return document.querySelector('#nested .target')
//}

//Way 3 to do this. Using element methods:
//function nestedTarget() {
//  return document.children[0].children[1].children[0].children[3]
//.children[0].children[0].children[0].children[0]
//}

function increaseRankBy(n) {
  var lis = document.body.querySelectorAll('ul.ranked-list li')

  for (let i = 0; i <= lis.length - 1; i++) {
	lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString()
}
}

function deepestChild() {
  debugger
  let subGrandNode = document.querySelector('#grand-node')
  let next = 0
  let final = 0

  while (subGrandNode) {
    next = subGrandNode.children[0]
    if (!next) {
      final = subGrandNode
    } subGrandNode = next
  } return final
}
