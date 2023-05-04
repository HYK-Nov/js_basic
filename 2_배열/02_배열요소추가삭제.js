let pets = ['멍멍이', '야옹이', '호야'];
console.log(`pets: ${pets}`);

// pets[3] = '두야';
pets.push('두야');
pets.push('커비');
console.log(`pets: ${pets}`);

let newLength = pets.push('미야', '겨울이');
console.log(`pets: ${pets}, 2개 넣으면: ${newLength}`);

// 마지막 데이터 삭제
let deletedData = pets.pop();
console.log(`pets: ${pets}, 삭제된 데이터: ${deletedData}`);

// 첫 번째 데이터 삭제
deletedData = pets.shift();
console.log(`pets: ${pets}, 삭제된 데이터: ${deletedData}`);

// unshift로 배열 첫 번째에 데이터 추가
newLength = pets.unshift('다성', '라성');
console.log(`pets: ${pets}, 추가 후 길이: ${newLength}`);