//bgcClass
//resultColor
//clickBtn

let arr = ["Rgba(133,122,200)", "green", "#F15025", "red", "blue"];

var btn = document.getElementById("clickBtn");
var colorContent = document.getElementById("colorContent");

btn.addEventListener("click", () => {
  let num = Math.random() * (arr.length - 1) + 1;
  let num_floor = Math.floor(num);
  let color = arr[num_floor];
  document.body.style.backgroundColor = color;
  colorContent.innerText = color;
});
