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

let fruits = ['Apple', 'Orange', 'Mango', 'Melon'];

function addFruit() {
    let addVal = document.getElementById('add').value;
    fruits[fruits.length] = addVal;
    document.getElementById('add').value = null;
    removeFromDoc();
    createElements();
}


// 요소를 생성.
function createElements(e) {
    // let ulTag = document.getElementsByTagName('ul');
    let ulTag = document.createElement('ul');
    ulTag.setAttribute('id', 'fruit');
    for (let fruit of fruits) {
        let liTag = document.createElement('li');
        liTag.appendChild(document.createTextNode(fruit));
        ulTag.appendChild(liTag);
    }

    document.body.appendChild(ulTag);
}

function removeFromDoc() {
    if(document.getElementById('fruit')){
        document.getElementById('fruit').remove(); // <ul id='fruit'></ul> 지움 
    }
}