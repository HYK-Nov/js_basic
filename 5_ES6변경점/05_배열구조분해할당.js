const userNames = ['김', '강', '박'];

// 구조분해할당에 의한 분할저장
const [kim, kang, park] = userNames;

console.log(`kim: ${kim}, knag: ${kang}, park: ${park}`);

// 변수 값 교환
let first = 10;
let second = 20;

console.log(`교환 전: f: ${first}, second: ${second}`);
[first, second] = [second, first];
console.log(`교환 후: f: ${first}, second: ${second}`);

const numbers = [1, 3, 5, 7, 9, 11];
const [one, three, ...others] = numbers;
console.log(`one: ${one}, three: ${three}, others: ${others}`);

console.log("-------------------");
const foods = ['1', '2', '3', '4', '5'];
const newFoods = [foods, '6', '7', '8'];
console.log(`추가 확인: ${newFoods}`);
// 일반 확장을 하려고 하는 경우, 첫째로 이중배열처리가 되고,
// 두 번째는 얕은 복사가 일어나는 문제가 있음
foods[0] = '크로켓';
console.log(`foods: ${foods}, newFoods: ${newFoods}`);

// 깊은 복사를 이용해 배열 확장 및 깊은 복사 처리 가능
const advFoods = [...foods, '9', '10', '11'];
console.log(newFoods)

foods[1] = '마요';
console.log(`foods: ${foods}, advFoods: ${advFoods}`);