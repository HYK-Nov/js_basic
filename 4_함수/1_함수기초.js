// 함수 정의 (실행과 별개)
function makeFood(sauce) {
    console.log(`면을 삶습니다.`);
    console.log(`${sauce}를 넣고 면수와 볶습니다.`);
    console.log(`${sauce} 스파게티 완성`);
}

// 함수 호출
makeFood('미스소스');

// 원 넓이
function calcCircle(r) {
    return 3.14 * Math.pow(r, 2);
}

console.log(calcCircle(3))