// fetch()를 이용해서 rest 서버에 요청을 넣거나 결과를 받아올 수 있음
async function loadPersonList() {
    // fetch의 첫 번째 파라미터는 요청 주소
    const response = await fetch(`http://localhost:8080/resttest/person-list`); // GET방식
    // 요청 결과로 받은 response 객체의 body에 담긴 json만 추출
    const jsonData = await response.json();
    console.log(jsonData);
}

function loadPersonList2() {
    fetch(`http://localhost:8080/resttest/person-list`)
        .then(response => response.json())
        .then(jsonData => console.log(jsonData))
}