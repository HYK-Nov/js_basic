let total = 0;
let n = 1; // 반복문 제어용

while (n <= 100) {
    if (n % 2 !== 0) total += n;
    n++;
}

console.log(`1~100까지 홀수 총합: ${total}`);   