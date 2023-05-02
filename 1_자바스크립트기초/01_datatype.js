// es5 문법 태그요소
// let sentence = '<ul>/n/t<li>/n/t/t<a>add</a>';

// es6 문자열 리터럴(`)
let sentence = `
<ul>
    <li>
        <a>aaaa</a>
    </li>
</ul>
`;

// console.log(sentence);
let month = 5;
let day = 5;
let anniversary = '어린이날';
// let message = month + '월 ' + day + '일은 ' + anniversary + '입니다.';
let message = `${month}월 ${day}일은 ${anniversary}입니다.`
// console.log(message);

// 논리 자료형
let flag = false;
console.error(typeof flag);

// 객체 자료형
let hoya = {
    name: '호야',
    age: 9,
    kind: '샤트룩스'
};

console.log(hoya)