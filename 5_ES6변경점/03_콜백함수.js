function showEvenNumber(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) console.log(i); 1
    }
}

function showOddNumber(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) console.log(i); 1
    }
}

// 1차 개선(짝수 홀수 여부 지정)
function showEvenOrOddNumber(n, delimeter) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === delimeter) console.log(i);
    }
}

function showMultipleNumber(n, m) {
    for (let i = 1; i <= n; i++) {
        if (i % m === 0) console.log(i);
    }
}

showMultipleNumber(10, 3);

// 콜백 형식으로 전환
function showNumber(n, code) {
    for (let i = 1; i <= n; i++) {
        if (code(i)) console.log(i);
    }
}

const callback = (n) => { return n % 3 === 0 };
showNumber(20, callback);