// 주요 노드 프로퍼티

// DOM 노드는 종류에 따라 각각 다른 프로퍼티를 지원한다.
// DOM 노드는 종류에 따라 대응하는 내장 클래스가 다르다.

// HTMLInputElement – 입력 관련 프로퍼티를 제공하는 클래스
// HTMLElement – HTML 요소 메서드와 getter, setter를 제공하는 클래스
// Element – 요소 노드 메서드를 제공하는 클래스
// Node – 공통 DOM 노드 프로퍼티를 제공하는 클래스
// EventTarget – 이벤트 관련 기능을 제공하는 클래스
// Object – hasOwnProperty같이 ‘일반 객체’ 메서드를 제공하는 클래스

// 객체는 CONSTRUCTUOR 프로퍼티를 가지는데 이걸 이용하면 DOM 노드 클래스 이름을 확인할 수 있다.
console.log(document.body.constructor.name);

// console.log(elem)는 요소의 DOM 트리를 출력한다.
// console.dir(elem)는 요소를 DOM 객체처럼 취급하여 출력한다. 따라서 프로퍼티를 확인하기 쉽다는 장점이 있다.

// nodeType 프로퍼티는 DOM 노드의 타입을 알아낼때 사용하는 구식 프로퍼티 이다.

// elem.nodeType == 1 => 요소 노드
// elem.nodeType == 3 => 텍스트 노드
// elem.nodeType == 9 => 문서 객체

// 을 나타내기 때문에 노트 타입을 확인할때 해당하는 숫자 값과 비교하여 확인하기도 한다.

// nodeName 과 tagName 은 노드의 태그이름을 알수 있습니다.
// nodeName 은 모든 노드에 해당하기 때문에 주석, 텍스트 등과 같은 노드에 대해서도 정보를 얻을 수 있는 방면
// tagName 은 요소 노드만 해당하기 때문에 주석 택스트 등과 같은 노드에 접근하면 undefind를 반환하는 것을 알 수있습니다.

// 그렇기 때문에 요소 노드에서는 두가지 모두 동일하게 작동하지만 그 외의 경우에는 tagName을 이용하면 다른 결과를 반환받을 수 있다.

// innerHTML 프로퍼티를 이용하면 요소 안의 HTML을 문자형으로 받아올 수 있고 수정도 가능하다.

console.log(document.getElementById("elem").innerHTML);

// elem.innerHTML+="추가 html" 와 같이 innerHTML 로 요소 안의 내용을 수정할때 += 을 사용하면 원래의 내용에 새로운 내용을 추가할 수 있습니다.
// 하지만 이러한 내용 추가할 때 실제로 작동하는 원리는 추가하는 것이 아니라 덮어 씌워지는 것입니다.
// 기존의 내용을 삭제하고 기존의 내용 + 새로운 내용을 다시 작성하여 덮어 씌어지는 원리입니다.
// 그렇기 때문에 기존의 이미지와 같은 리소스는 전부 다시 로딩이 됩니다.

// innerHTML 이 요소의 안 내용에 접근한 것이라면 outerHTML 은 요소 전체 HTML에 접근하는 것입니다.
// 하지만 outerHTML은 수정된 내용이 저장되지는 않기 때문에 유의해서 사용해야 한다.

// innerHTML 은 요소 노드에만 사용할 수 있다. 요소노드 이외의 요소의 값에 접근하기 위해서는 nodeValue/data 를 이용해야 한다.
// nodeValue 와 data는 크게 차이가 없다.

// textContent 를 이용하면 태그가 없는 것처럼 텍스트만 반환되어 진다. 하지만 실무에서는 많이 쓰이지 않는다.

// hidden 프로퍼티를 이용하면 요소를 보여줄지 말지를 true/false 를 이용하여 결정할 수 있다.

//elem.hidden = true; => elem 요소를 숨김 처리 한다.

/* 
nodeType
요소 타입을 알고 싶을 때 사용합니다. 요소 노드라면 1을, 텍스트 노드라면 3을 반환합니다. 두 타입 외에도 각 노드 타입엔 대응하는 상숫값이 있습니다. 읽기 전용입니다.

nodeName/tagName
요소 노드의 태그 이름을 알아낼 때 사용합니다. XML 모드일 때를 제외하고 태그 이름은 항상 대문자로 변환됩니다. 요소 노드가 아닌 노드에는 nodeName을 사용하면 됩니다. 읽기 전용입니다.

innerHTML
요소 안의 HTML을 알아낼 수 있습니다. 이 프로퍼티를 사용하면 요소 안의 HTML을 수정할 수도 있습니다.

outerHTML
요소의 전체 HTML을 알아낼 수 있습니다. elem.outerHTML에 무언가를 할당해도 elem 자체는 바뀌지 않습니다. 대신 새로운 HTML이 외부 컨텍스트에서 만들어지고, elem이 삭제된 자리를 채웁니다.

nodeValue/data
요소가 아닌 노드(텍스트, 주석 노드 등)의 내용을 읽을 때 쓰입니다. 두 프로퍼티는 거의 동일하게 동작합니다. 주로 data를 많이 사용하는 편이며 내용을 수정할 때도 이 프로퍼티를 쓸 수 있습니다.

textContent
HTML에서 모든 <태그>를 제외한 텍스트만 읽을 때 사용합니다. 할당 연산을 통해 무언가를 쓸 수도 있는데 이때 태그를 포함한 모든 특수문자는 문자열로 처리됩니다. 사용자가 입력한 문자를 안전한 방법으로 처리하기 때문에 원치 않는 HTML이 사이트에 삽입되는 것을 예방할 수 있습니다.

hidden
true로 설정하면 CSS에서 display:none을 설정한 것과 동일하게 동작합니다.

DOM 노드는 클래스에 따라 이 외에도 다른 프로퍼티를 가집니다. <input> 요소(HTMLInputElement)는 value, type 프로퍼티를, <a> 요소(HTMLAnchorElement)는 href 프로퍼티를 지원하는 것 같이 말이죠. 대부분의 표준 HTML 속성은 대응하는 DOM 프로퍼티를 가집니다.
 */

// 과제

// 후손 노드 개수 세기

/* 
ul과 li 노드로 구성된 트리 구조 문서가 있다고 가정해 봅시다.

li 노드 전체를 대상으로 아래와 같은 작업을 하려 합니다. 조건을 만족시킬 수 있는 코드를 작성해 보세요.

li 노드 안에 있는 텍스트를 출력
=> for (let li of document.querySelectorAll('li')) {
  let title = li.innerHTML;
}

li 노드 아래에 있는 모든 <li> 태그의 개수를 출력
=> document.querySelectorAll('li').length
*/

// 노드타입 맞추기

// 스크립트를 실행 결과를 예측해보세요.

/* 
<html>

<body>
  <script>
    alert(document.body.lastChild.nodeType);
  </script>
</body>

</html>

=> 1 요소노드 이기 때문에 1 이 나올 것이다.
*/

// 주석 안의 태그

// 스크립트를 실행 결과를 예측해보세요.

/* 
<script>
  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // 얼럿 창엔 어떤 내용이 출력될까요?
</script>

=> BODY 가 나올 것이다. body 의 내용을 수정해 주었기 때문에 body의 firstChild 는 주석이 된다. 이 주석의 data이기 때문에 내용만 나오고 그렇기 때문에 대문자인 BODY 가 출력된다.
*/

// DOM 계층 구조와 document
aa;
/* 
document는 어떤 클래스에 속할까요?
=> HTMLDocument

DOM 계층 구조에서 document이 속한 클래스는 어디에 위치해 있을까요?
=>

이 클래스는 Node, Element, HTMLElement 중 어떤 클래스를 상속받을까요?
*/
