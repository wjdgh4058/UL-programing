// getElement*, querySelector*로 요소 검색하기

// 가까이 붙어있지 않고 떨어져 있으면 상대위치를 이용하여 요소노드에 접근해야 한다.

// document.getElementById 혹은 id를 사용해 요소 검색하기
// 요소에 id 속성이 있다면 위치에 상관 없이 id 값을 이용해서 요소 노드에 접근할 수 있습니다.

// id 값은 고유해야 합니다. 만약 id의 값과 같은 이름의 전역 변수가 있고 그 변수에 값이 할당 된다면 id 로 접근이 불가능해 집니다.
// getElementById 는 document 객체를 대상으로 해당 id를 가진 요소노드를 찾아준다. 그렇기 때문에 문서 노드가 아닌 다른 노드엔 호출할 수 없다.

// querySelectorAll => 이 메서드는 해당 요소의 자식 요소중 주어진 CSS선택자에 해당하는 모든 요소를 반환 합니다.

let element = document.querySelectorAll(".container > h1");
console.log(element);

// querySelectorAll 은 CSS 선택자를 활용할 수 있다는 점에서 유용하고, 가상 클래스도 접근할 수 있다.

// querySelector 은 querySelectorAll[0] 과 같으며 해당하는 요소중 첫번째 요소를 반환해 준다.
// 해당하는 첫번째 요소를 찾으면 반환하고 탐색을 종료하기 때문에 모든 요소를 탐색하고 첫번째는 반환하는 querySelectorAll[0] 보다 효율이 좋다.

// elem.matches(CSS) 는 요소 elem 에 주어진 CSS 선택자와 일치하는지 여부를 판단하고 일치하면 true 일치하지 않는다면 false를 반환 합니다.

// elel.closest(CSS) => elem 자신을 포함하여 CSS 선택자와 일치하는 가장 가까운 조상 요소르 찾아서 반환한다. 일치하는 요소노드를 발견하면 반환하고 탐색을 중단한다.

// getElementsBy => 태그나 클래스 등을 이용하여 원하는 노드를 찾아준다. 하지만 querySelector 가 나오면서 많이 사용되진 않는다.
// elem.getElementsByTagName(tag) => 주어진 태그에 해당하는 요소를 찾고, 대응하는 요소를 담은 컬렉션을 반환한다. 매개변수 tag에 "*"이 들어가면, '모든 태그’가 검색된다.
// elem.getElementsByClassName(className) => class 속성값을 기준으로 요소를 찾고, 대응하는 요소를 담은 컬렉션을 반환한다.
// document.getElementsByName(name) => 아주 드물게 쓰이는 메서드로, 문서 전체를 대상으로 검색을 수행한다. 검색 기준은 name 속성값이고, 이 메서드 역시 검색 결과를 담은 컬렉션을 반환한다.

// getElemetsBy 를 사용하는 메서드 들은 살아있는 컬렉션을 반환하기 때문에 문서에 변경이 있다면 컬렉션이 자동 갱신 됩니다.

// 하지만 querySelectorAll 은 정적 컬렉션을 반환하고, 그렇기 때문에 처음 querySelectorAll이 동작 할 당시의 컬렉션은 이후의 변화된 내용이 반영되어 값이 변형되지 않는다.

/*  
테이블과 폼이 있는 문서가 있다고 가정합시다.

아래 조건에 맞는 요소는 어떻게 찾을 수 있을까요?

1. id="age-table"인 테이블
=> elem.getElementById('age-table')

2. 테이블 내의 label 요소 모두(총 3개)
=> table.querySelectorAll('label')

3. 테이블 내의 첫 번째 td(Age가 적힌 곳)
=> table.querySelector('td')

4. name="search"인 form
=> document.getElementsByName(search)

5. 폼의 첫 번째 input
=> form.querySelector('input')

6. 폼의 마지막 input
=> form.querySelectorAll('input')[마지막 인덱스]
*/
