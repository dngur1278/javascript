// event.js
console.log(this);

function changeValue() {
    // id = "num3"의 value속성을 읽어와서 그 값의 upperCase 변환.
    let elem = document.getElementById('num3').value;
    //console.log(elem);
    //conlsole.log(elem.toUpperCase());
    document.getElementById('num3').value = elem.toUpperCase();

}

let obj = {
    name: "Hong",
    hobby: ["running", "eating", "sleeping"],
    pet: [{
        dog: "똥순이"
    }, {
        cat: "야옹이"
    }, {
        cockroach: "바퀴"
    }]
}
console.log(obj.name);
console.log(obj.hobby[0]);
console.log(obj['hobby'][1]);
console.log(obj.pet[0].dog);
console.log(obj.pet[1].cat);

// 요소를 생성.
function createElements() {
    let fruits = ['Apple', 'Orange', 'Mango', 'Melon'];
    let ulTag = document.getElementsByTagName('ul');
    for (let fruit of fruits) {
        let liTag = document.createElement('li');
        liTag.appendChild(document.createTextNode(fruit));
        ulTag[0].appendChild(liTag);
    }
}
// let ulTag = document.getElementsByTagName('ul');    // document의 li태그 찾기
// let liTag = document.createElement('li');   // <li>Apple</li>
// let apple = document.createTextNode('Apple');
// liTag.appendChild(apple);
// ulTag[0].appendChild(liTag);

// liTag = document.createElement('li');
// let orange = document.createTextNode('Orange');
// liTag.appendChild(orange);
// ulTag[0].appendChild(liTag);