let n1 = 10;
let n2 = '20';

console.log(`n1 + n2 = ${n1 + n2}`);

let n3 = n1 + '';
console.log(`더하기 전: ${typeof n1}, 더한 후: ${typeof n2}`);

let n4 = '100' * 55;
console.log(`문자 100 * 정수 55 : ${n4}`);

let n5 = +'99'; // 정수화
console.log(`단항 연산자가 적용된 문자: ${typeof n5}`);

console.log("------------------------------------");
// j에서 0, '', null, undefined, NaN은 거짓

// falsy
if (undefined) console.log('undefined!');
if (null) console.log('null');
if (0) console.log('0!');
if ("") console.log('""!');
if (NaN) console.log('NaN!');

// truthy
if (1) console.log('0이 아닌 숫자');
if (-100.234) console.log('음수도 0만 아니면 됨');
if ('     ') console.log('공백문자');
if ('hello') console.log('일반문자');
if ([]) console.log('빈 리스트도 가능');