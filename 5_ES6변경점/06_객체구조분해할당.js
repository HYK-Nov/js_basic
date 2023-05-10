const emp = {
    empName: 'ppe',
    age: 30,
    hireDate: '2014-01-01',
    birthDay: '1994-10-15',
};

// 기존 문법
// const empName = emp.empName;
// const age = emp.age;
// console.log(`사원명: ${empName}, 나이: ${age}`);

// const { empName, age } = emp;
// console.log(`사원명: ${empName}, 나이: ${age}`);

const { age: a, birthDay: b, empName: n } = emp;
console.log(`사원명: ${n}, 나이: ${a}`);