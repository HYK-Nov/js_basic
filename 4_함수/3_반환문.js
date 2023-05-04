function add(n1, n2) {
    return n1 + n2;
    console.log(`여기는 실행 안 됨`);
}

// 반환값: 함수 호출이 종료될 때 호출 위치에 전달될 값
let r1 = add(5, 7);
console.log(r1);

console.log(add(r1, add(3, 5)));

function showMulti(n1, n2) {
    console.log(`${n1} * ${n2} = ${n1 * n2}`);
}
let result = showMulti(3, 5);
console.log(result);