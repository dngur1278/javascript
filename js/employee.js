// employee.js
// json -> obj : JSON.parse()

let json = `[{"id":1,"first_name":"Rosie","last_name":"Joly","email":"rjoly0@examiner.com","gender":"Bigender","ip_address":"51.190.96.125"},
{"id":2,"first_name":"Garey","last_name":"Tomadoni","email":"gtomadoni1@discovery.com","gender":"Non-binary","ip_address":"137.113.70.39"},
{"id":3,"first_name":"Pieter","last_name":"Sherrott","email":"psherrott2@addtoany.com","gender":"Genderfluid","ip_address":"36.120.56.62"},
{"id":4,"first_name":"Ernestus","last_name":"Iliff","email":"eiliff3@instagram.com","gender":"Polygender","ip_address":"197.169.219.231"},
{"id":5,"first_name":"Avigdor","last_name":"Lead","email":"alead4@engadget.com","gender":"Agender","ip_address":"90.43.187.241"},
{"id":6,"first_name":"Jasmine","last_name":"Walenta","email":"jwalenta5@narod.ru","gender":"Genderqueer","ip_address":"55.222.127.137"},
{"id":7,"first_name":"Linnet","last_name":"Cadman","email":"lcadman6@uiuc.edu","gender":"Polygender","ip_address":"144.251.110.87"},
{"id":8,"first_name":"Rubi","last_name":"Gribbins","email":"rgribbins7@rambler.ru","gender":"Genderqueer","ip_address":"43.93.60.184"},
{"id":9,"first_name":"Leanor","last_name":"Coaten","email":"lcoaten8@ibm.com","gender":"Agender","ip_address":"75.202.230.9"},
{"id":10,"first_name":"Damita","last_name":"Serraillier","email":"dserraillier9@gmpg.org","gender":"Genderqueer","ip_address":"45.161.215.61"}]`;

XMLHttpRequest
let data = JSON.parse(json);
console.log(data);

// for (let row of data) {
//     console.log(row);
// }

let tableTag = document.createElement('table');
createTable();

function createTable() {
    tableTag.setAttribute('border', '1');
    createTitle();
    createHead2();
    for (let row of data) {
        let trTag = document.createElement('tr');
        // click event가 발생할 때 실행할 function이름
        trTag.setAttribute('id', row.id);   // tr을 id값으로 찾아올 용도 .
        trTag.onclick = showDetail;
        trTag.onmouseover = changeColor;
        trTag.onmouseout = originColor;

        for (let field in row) {
            if (field != 'ip_address') {
                let tdTag = document.createElement('td');
                let text = document.createTextNode(row[field]);
                tdTag.appendChild(text);
                trTag.appendChild(tdTag);
            }
        }
        // 버튼 추가
        let bt = document.createElement('button');
        let bttx = document.createTextNode("DEL");
        bt.appendChild(bttx);
        let tdTag = document.createElement('td');
        bt.onclick = delTr;
        tdTag.appendChild(bt);
        trTag.appendChild(tdTag);
        tableTag.appendChild(trTag);
    }
    document.getElementById('show').appendChild(tableTag);
   
}
// ----------------------화면 만들어서 보여주는 부분-------------------

// if(firstRow){
//     for (let ff in row) {
//         let td = document.createElement('td');
//         let text = document.createTextNode(ff);
//         td.appendChild(text);
//         trTag.appendChild(td);
//     }
//     tableTag.appendChild(trTag);
//     trTag = document.childElement('tr');
// }


// function createHead(){
//     let row = data[0];
//     let tr = document.childElement('tr');
//     for (let field in row) {
//         let td = document.createElement('td');
//         let text = document.createTextNode(field);
//         td.appendChild(text);
//         trTag.appendChild(td);
//     }
//     tableTag.appendChild(tr);
// }

function createTitle() {
    let titleTr = document.createElement('tr');
    let titleTh = document.createElement('th');
    titleTh.setAttribute('colspan', '6');
    let title = document.createTextNode('사원정보')
    titleTh.appendChild(title);
    titleTr.appendChild(titleTh);
    tableTag.appendChild(titleTr);
}


function createHead2() {
    let title = ['id', 'first_name', 'last_name', 'email', 'gender', 'Delete'];
    let tr = document.createElement('tr');
    for (let field of title) { // 배열일 경우 for ... of
        let th = document.createElement('th');
        th.style.border = "1px solid black";
        let text = document.createTextNode(field);
        th.appendChild(text);
        tr.appendChild(th);
    }
    tableTag.appendChild(tr);
}

// input에 회원정보 값 보기
function showDetail() {
    let inputs = document.getElementsByTagName('input'); // document.guerySelectorAll();
    for (let i = 0; i < inputs.length; i++){
        inputs[i].value = this.childNodes[i].childNodes[0].nodeValue;
    }
}

function changeColor() {
    this.style.backgroundColor = 'gray';
}

function originColor() {
    this.style.backgroundColor = '';
}

function delTr(e) { // 한 라인 삭제
    //alert('delete');    // 경고창 띄우기
    e.stopPropagation();  // 이벤트 전파 차단
    // 데이터 삭제 ...... id를 기준으로 데이터 삭제
    // 보이는 화면에서 삭제
    let id = this.parentNode.parentNode.childNodes[0].childNodes[0].nodeValue;
    console.log(id);
    this.parentNode.parentNode.remove()

    // 실제 데이터 삭제
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].id, id);
        if (data[i].id == parseInt(id)) { // 6 == '6' => true
            data.splice(i, 1); // delete data[i]; // 배열 메소드 ..splice()
            break;
        }
    }
    console.log(data);
}

// 테이블 행 추가
function addRow() {
    let id = document.getElementById('eid').value;
    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let gender = document.getElementById('gender').value;
    let ary = [id, first_name, last_name, email, gender];


    let tr = document.createElement('tr');
    tr.onmouseover = changeColor;
    tr.onmouseout = originColor;
    for (let f of ary) {
        let td = document.createElement('td');
        let text = document.createTextNode(f);
        td.appendChild(text);
        tr.appendChild(td);
    }
    let bt = document.createElement('button');
    let bttx = document.createTextNode("DEL");
    bt.appendChild(bttx);
    let tdTag = document.createElement('td');
    bt.onclick = delTr;
    tdTag.appendChild(bt);
    tr.appendChild(tdTag);
    tableTag.appendChild(tr);

    document.getElementsByTagName('table')[0].appendChild(tr);
}

function modRow() {
    let id = document.getElementById('eid').value;  // Id항목의 id의 value속성.

    let findTr = document.getElementById(id);
    findTr.childNodes[1].childNodes[0].nodeValue = document.getElementById('first_name').value;
    findTr.childNodes[2].childNodes[0].nodeValue = document.getElementById('last_name').value;
    findTr.childNodes[3].childNodes[0].nodeValue = document.getElementById('email').value;
    findTr.childNodes[4].childNodes[0].nodeValue = document.getElementById('gender').value; 
}