// cal.js

function createTable2() {
    let num = 1;
    let days = ['Sun', 'Mon', 'Tue', 'Wen', 'Thr', 'Fri', 'Set'];
    let tableTag = document.createElement('table');
    tableTag.setAttribute('border', '1');
    let trTeg1 = document.createElement('tr');
    for (let i = 0; i<days.length; i++){
        let tdTeg1 = document.createElement('td');
        tdTeg1.innerHTML = days[i];
        trTeg1.appendChild(tdTeg1);
    }
    tableTag.appendChild(trTeg1);
    for (let i = 1; i <= 5; i++) {
        let trTeg = document.createElement('tr');
        for (let j = 1; j <= 7; j++) {
            let tdTeg = document.createElement('td');
            tdTeg.innerHTML = num;
            trTeg.appendChild(tdTeg);
            num++;
        }
        tableTag.appendChild(trTeg);
    }
    document.getElementById('sss').appendChild(tableTag);
}

function createCalendar() {
    let userYear = document.getElementById('year').value;
    let userMonth = document.getElementById('month').value;

    let now = new Date(userYear, userMonth-1, 1);
    let firstDay = now.getDay();    // 요일정보: 0(일) ~ 6(토)
    console.log(firstDay);

    let today = new Date(userYear, userMonth, 0);   // 2021, 7, 0 -> 6월의 마지막 날.
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();

    
    
    console.log(`년도: ${year}, 월: ${month}, 일: ${date}`);
    let days = ['Sun', 'Mon', 'Tue', 'Wen', 'Thr', 'Fri', 'Set'];
    let all = "<table border = '1'><tr>";
    for (let i = 0; i < days.length; i++) {
        if (i % 7 == 0) {
            all += "<td style= 'background-color: red; color: white;'>" + days[i] + "</td>";

        } else if (i % 7 == 6) {
            all += "<td style= 'background-color: blue; color: white;'>" + days[i] + "</td>";
        } else {
            all += "<td>" + days[i] + "</td>"

        }
    }
    all += "</tr>";
    // 요일을 위치를 맞춰주기 위해서
    for (let i = 0; i<firstDay; i++){
        all += "<td></td>";
    }
    for (let i = 1; i < date; i++) {
        if ((firstDay+i-1) % 7 == 0) { // 일요일은 빨간색
            all += "<td>" + i + "</td>";
        } else if ((firstDay+i-1) % 7 == 6) { // 토요일은 줄바꿈
            all += "<td>" + i + "</td></tr><tr>"
        } else { // 정상적으로 출력
            all += "<td>" + i + "</td>";
        }
    }
    all += "</tr></table>";
    document.write(all)
}