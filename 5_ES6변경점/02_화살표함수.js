const multi = (n1, n2) => n1 * n2;
console.log(multi(1, 2));

const r1 = multi(10, 3);
console.log(`multi 함수 결과: ${r1}`);

const sayHello = () => console.log('안녕하세요');
sayHello();

// 객체 내부에서 메서드로 사용되는 화살표 함수
const kim = {
    name: 'JS',
    age: 25,
    greeting: sayHello, // 상단에 이미 선언된 sayHello 입력
    study: () => console.log("공부합시다."),
}
kim.greeting();
kim.study();

const pow = (n) => n ** 2;
console.log(pow(3));