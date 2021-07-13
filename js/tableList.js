// tableList.js
let data = [{
    name: "이름",
    eng: "영어",
    math: "수학"
}, {
    name: "홍길동",
    eng: "100",
    math: "90"
}, {
    name: "김민수",
    eng: "90",
    math: "95"
}];

/* <table border="1">
    <tr>
        <td>이름</td>
        <td>영어</td>
        <td>수학</td>
    </tr>

    <tr>
        <td>홍길동</td>
        <td>100</td>
        <td>90</td>
    </tr>
</table> */
createTable();
function crateTable2() {
    let all = '<table border="1">';
    for (let row1 of data) {
        all += "<tr>";
        for (let field1 in row1) {
            all += "<td>" + row1[field1] + "</td>";
        }
        all += "</tr>";
    }
    all += '</table>';
    document.write(all);
}

function createTable() {
    let tableTag = document.createElement('table');
    tableTag.setAttribute('border', '1');
    for (let row of data) {
        let trTeg = document.createElement('tr');
        for (let field in row) {
            let tdTeg = document.createElement('td');
            // if (field == 'name'){
            //     tdTeg.style.backgroundColor = "gray";
            // }
            let text = document.createTextNode(row[field]);
            tdTeg.appendChild(text); // <td>이름</td>
            trTeg.appendChild(tdTeg);
        }
        tableTag.appendChild(trTeg);
    }
    document.getElementById('show').appendChild(tableTag);
}