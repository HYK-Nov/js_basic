let total = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) total += i;
    else continue;
}

console.log(total);