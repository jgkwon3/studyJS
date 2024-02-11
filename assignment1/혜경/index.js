var button = document.getElementById("btn");

let colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Navy', 'Violet'];

//초기값 설정
document.getElementById("name").innerHTML = 'Red';
document.body.style.backgroundColor = 'red';
//클릭시 change 함수 실행하는 이벤트 발생
button.addEventListener("click", change);

function change() {
    //colors 길이만큼 난수 발생
    let num = Math.floor(Math.random() * colors.length);
    let colorSelect = colors[num];
    //배경색상 변경과 색상 이름 출력
    document.body.style.backgroundColor = colorSelect;
    document.getElementById("name").innerHTML = colorSelect;
}