// <html> => document.documentElement html 태그에 해당
// <body> => document.body body에 해당
// <head> => document.head head에 해당

// document.body 가 null 일 수도있음
// DOM에서 null은 존재하지 않음 이나 해당 노드가 없음을 의미

// 자식 노드 (child node, children) => 바로 자기 직계의 자식 요소를 나타냄
// 후손 노드 (descendants) => 부모 노드 아래의 모든 자식 노드 요소를 나타냄

// elem.childNodes[0] === elem.firstChild 첫번째 자식 노드 확인
// elem.childNodes[elem.childNodes.length - 1] === elem.lastChild 마지막 자식 노드 확인

// childNodes 는 마치 배열같이 보이지만 배열이 아니라 반복 가능한 유사 배열 객체인 컬렉션 이다.
// 진짜 배열을 만드려면 Array.from() 또는 call 함수를 이용하여야 한다.

// 위의 프로퍼티는 모드 탐색용 프로퍼티 이다.

// 같은 부모를 가진 노드는 형제 노드라고 한다.

// 형제 노드에서 다음 형제 노드에 대한 정보는 nextSibling 을 이용하고, 이전의 형제 노드에 대한 정보는 previousSibling을 이용한다.
// 부모 노드에 관한건 parentNode 프로퍼티를 이용한다.

// nextSibling, previouSibling 은 다음과 이전 노드에 관한 정보이다. 하지만 children 프로퍼티는 해당 요소의 자식 노드 중 요소 노드만을 가리킨다.
// firstElementChild와 lastElementChild 프로퍼티는 각각 첫 번째 자식 요소 노드와 마지막 자식 요소 노드를 가리킨다.
// previousElementSibling과 nextElementSibling은 형제 요소 노드를 가리킨다.
// parentElement 는 부모 요소 노드를 가리킨다.

// 위의 프로퍼티를 이용해서 요소노드를 읽어오면 대문자로 반환된다. ex) DIV, UL, SCRIPT

/* 
탐색 프로퍼티를 사용하면 이웃 노드로 바로 이동할 수 있다.

탐색 프로퍼티는 크게 두 개의 집합으로 나뉜다.

모든 노드에 적용 가능한 parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling
요소 노드에만 적용 가능한 parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling
테이블과 같은 몇몇 DOM 요소는 추가 프로퍼티와 콘텐츠에 접속할 수 있게 해주는 컬렉션을 제공한다.
*/

// 과제

// 자식 DOM

/* 
<html>
<body>
  <div>사용자:</div>
  <ul>
    <li>John</li>
    <li>Pete</li>
  </ul>
</body>
</html>
*/
// 아래 DOM 노드에 접근할 방법을 최소 한 가지 이상씩 생각해보세요.

/* 
<div> DOM 노드 
=> div 요소는 body요소의 첫번째 요소노드이기 때문에 document.body.firstElementChild
=> body의 자손 요소노드들 중 1번째 요소노드가 div 이기 때문에 document.body.children[0]
=> body의 자손 노드들 중 첫번째는 공백, 두번째는 div 이기 때문에 document.body.childNodes[1]

<ul> DOM 노드
=> ul 노드는 body의 두번째 요소이자 마지막 요소이다.
=> document.body.lastElementChild , document.body.children[1] 으로 나타낼 수 있다.

두 번째 <li> (Pete)
=> 위의 ul 노드를 찾을 수 있었으니 두번째 li 요소는 ul의 두번째, 마지막 자식 요소이다.
=> document.body.lastElementChild.children[1], document.body.lastElementChild.lastElementChild
 */
