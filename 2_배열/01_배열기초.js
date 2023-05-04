let a = 10;
let b = a;

a = 15;

console.log(`a: ${a}, b: ${b}`);

let arr1 = [1, 2, 3, 4];
let arr2 = arr1;
arr1[1] = 999;
arr2[0] = 777;

console.log(`arr1: ${arr1}, arr2: ${arr2}`);

console.log("-----------------------------");
// 배열 생성
// 배열 변수 이름 관례 : 복수형, list 접두어
let fruits = ['망고', '망고스틴', '포도'];
// 객체 생성
let notlist = {
    0: '딸기',
    1: '바나나',
    2: '사과'
}
console.log(`fruits의 자료형: ${typeof fruits}, nolist의 자료형: ${typeof notlist}`);
console.log(`fruits: ${fruits}, nolist: ${notlist}`);

// 자료 개수 확인
console.log(`fruits의 자료 개수: ${fruits.length}`);

// 배열 데이터 참조
console.log(`fruit의 첫 데이터: ${fruits[0]}`);
console.log(`fruits의 마지막 데이터: ${fruits[fruits.length - 1]}`);

// 배열 요소 수정
fruits[1] = '파인애플';
console.log(`변경 후: ${fruits}`);

// 수정 시 주의사항: JS는 0번부터 자료를 집어넣지 않아도 됨
// fruits[4] = '복숭아';
// console.log(fruits);

// 배열 내부 데이터 전체 조회
// index로 조회
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 향상된 for문 전체 조회
for (let i of fruits) {
    console.log(i);
}