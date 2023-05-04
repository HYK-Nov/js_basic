outer: for (let i = 0; i < 3; i++) {
    inner: for (let j = 0; j < 2; j++) {
        if (i === j) {
            break outer; // break outer or break inner(inner 생략 가능)
        }
        console.log(`${i}, ${j}`);
    }
}