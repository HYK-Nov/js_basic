let x = 30;
let y = 40;

let z = '' + x + y;
let z2 = String(x) + y.toString();
console.log(`z의 타입: ${typeof z}, z2의 타입: ${typeof z2}`);

let num = Number('hello');
console.log(`숫자로 바꿀 수 없는 문자를 숫자로: ${num}`);

let num2 = parseInt('12345');
console.log(`숫자로 바꿀 수 있는 문자를 숫자로: ${num2}`);