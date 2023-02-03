# 20 strict mode

# strict mode란?

```jsx
function foo(){
	x=10;
}
foo();
console.log(x); //10
```

이런 코드의 경우 x가 전역 객체에 등록되어 선언하지도 않았는데도 불구하고 등록이 된다.

이를 암묵적 전역이라 한다.

이런 현상을 방지하기 위해 strict mode가 추가되었다.(ES5부터)

# strict mode의 적용

사용하려면 전역의 선두 또는 함수 몸체에 ‘use strict’;를 추가한다.

전역의 선두에 하면 전체에 적용된다.

```jsx
'use strict';
function foo(){
	x=10; //Error
}
foo();
```

함수의 선두에도 사용가능하다.

```jsx

function foo(){
	'use strict';
	x=10; //Error
}
foo();
```

# 전역에 strict mode적용을 피하기

```html
<html>
	<head>
	</head>
	<body>
		<script> 'use strict';</script>
		<script> x=1; </script>
	</body>
</html>
```

위의 경우 두번째 script인 x=1은 오류를 발생시키지 않는다.

script별로 use strict를  혼용하는 경우 오류를 발생시킬 수 있다.

따라서 이런 경우 즉시 실행함수로 스크립트 전체를 감싸서 스코프를구분하고 즉시 실행 함수의 선두에 strict mode를 적용한다.

# strict mode가 발생시키는 에러

### 암묵적 전역

선언하지 않은 변수를 참조하면 ReferenceError가 발생한다.

```jsx
(function(){
	'use strict';
	x=1;
	console.log(X); //ReferenceError
}());
```

### 변수, 함수, 매개변수의 삭제

delete 연산자로 변수, 함수, 매개변수를 삭제하면SyntaxError가 발생한다.

```jsx
(function(){
	'use strict';
	var x=1;
	delete x; //SyntaxError
	function foo(a){
		delete a; //SyntaxError
	}
	delete foo; //SyntaxError
}());
```

### 매개변수 이름의 중복

중복된 매개변수 이름을 사용하면 SyntaxError가 발생한다.

```jsx
(function(){
	'use strict';
	function foo(x,x){
		return x+x; //SyntaxError
	}
	console.log(foo(1,2));
}());
```

### with 문의 사용

with문은 전달된 객체를 스코프 체인에 추가한다.

with문은 동일 객체의 프로퍼티를 반복해서 사용할 때 객체 이름을 생략하여 코드가 간단해 지지만 성능과 가독성이 나빠진다.

```jsx
(function(){
	'use strict';
	with({x:1}){
		console.log(x);
	}
}());
```

# strict mode 적용에 의한 변화

### 일반 함수의 this

strict mode에서는 전역 this가 undefined이다.

### arguments 객체

strict mode에서는 매개변수에 전달된 인수를 재할당 하여 변경해도 arguments객체에 반영되지 않는다.

```jsx
(function(a){
	'use strict';
	a=2;
	console.log(arguments);
}(1));
```