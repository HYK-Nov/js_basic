let list = ['A', 'B', 'C', 'D'];
let count = 0;
let target = 'C';

// indexOf(): 인덱스 찾기
let index = list.indexOf(target);
console.log(`찾은 인덱스: ${index}`);

// slice(): 배열 잘라내고 사본 배열 반환
let slicedList = list.slice(1, 4);
console.log(`잘린 배열: ${slicedList}, 원본 배열: ${list}`);

// 끝 인덱스를 적지 않으면 시작부터 끝까지 전부 복사
slicedList = list.slice(2);
console.log(`잘린 배열: ${slicedList}, 원본 배열: ${list}`);

// 원본 배열 그대로 "깊은"복사
slicedList = list.slice();
slicedList[0] = 'G';
console.log(`복사 배열: ${slicedList}, 원본 배열: ${list}`);

// reverse는 인덱스 기준 역순 나열. 원본 배열이 변경됨
console.log("--------------------------------");
let nums = [10, 20, 30, 40, 50];
let copyNums = nums.slice();
copyNums.reverse();
console.log(`원본: ${nums}, 복사본: ${copyNums}`);

// concat(): 배열 2개를 연결(배열1 길이 + 배열2 길이  = 결과 리스트 길이)
console.log("--------------------------------");
let arr1 = [10, 20, 30];
let arr2 = [100, 900, 700, 1000];

let concatedArr = arr1.concat(arr2);
console.log(`합쳐진 배열: ${concatedArr}`);

// includes(): 배열내 특정 데이터 유무 확인
console.log("--------------------------------");
let resultFlag = list.includes("J");
console.log(`포함여부 : ${resultFlag}`);