function getBoxOffice() {
    fetch(`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230505`)
        .then(response => response.json())
        .then(jsonData => console.log(jsonData))
}