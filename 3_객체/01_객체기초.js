let cat = {
    name: '호야',
    age: 9,
    hobbies: ['냥기장', '무릎냥이', '시야 가리기'],
    kind: '샤트룩스', // 마지막 요소에도 ,를 붙여야함
};

let caeruleus = {
    name: '물고기',
    age: 1,
    hobbies: ['동족상잔', '눈 뜨기'],
    kind: '바나나 시클리드',
}

console.log(`객체1 타입: ${typeof cat}, 객체2 타입: ${typeof caeruleus}`);
console.log(cat.name);
console.log(caeruleus.age);
console.log(caeruleus.hobbies);
console.log(cat.hobbies[1]);

console.log("----------------------");

// property 유무
// key 값은 반드시 문자열
let ageFlag = 'ageaaaa' in cat; // cat 객체 내부에 age 값 유무
console.log(ageFlag);
console.log("----------------------");

// 객체 순회 반복문
// key를 반복해서 출력
for (let k in caeruleus) {
    console.log(`caeruleus의 키값: ${k}, 매칭 value 값: ${caeruleus[k]}`);
}

// 객체 중첩
let items = {
    store: '편의점',
    productList: [
        {
            name: '버터와플',
            price: 3000,
            count: 30
        },
        {
            name: '오레오',
            price: 1500,
            count: 40
        },
        {
            name: '썬칩',
            price: 3000,
            count: 20
        },
    ],
}