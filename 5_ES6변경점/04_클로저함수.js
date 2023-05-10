// 함수 리턴 가능
function calculator(n1, n2) {

    function add() {
        return n1 + n2;
    }

    return add;
}

const closure = calculator(5, 6);
console.log(typeof closure);
console.log(closure());

// 즉시 실행 함수
// 함수를 선언하고 선언부 뒤에 (); 를 추가로 붙이면 그 함수는 선언과 동시에 실행
// 일회성으로 호출할 함수를 만들 때 많이 사용
(() => {
    console.log(`즉시 실행구문`);
})();