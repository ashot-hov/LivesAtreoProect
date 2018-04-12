var date = new Date();
var datearr = date.toDateString().match(/([\w\d]*)/g);
var current_date = {
  day: datearr[0],
  month: datearr[2],
  date: datearr[4],
  year: datearr[6]
};
document.getElementsByClassName("date")[0].innerHTML = current_date.date;
document.getElementsByClassName("month")[0].innerHTML = current_date.month;
document.getElementsByClassName("year")[0].innerHTML = current_date.year;
var d = "",
  c = "";

function getday() {
  if (date.getMonth() == 2) {
    if (current_date.year % 4 == 0) {
      if (current_date.year % 100 == 0) {
        return 29;
      }
      if (current_date.year % 400 != 0) {
        return 28;
      } else {
        return 29;
      }
    } else {
      return 28;
    }
  }
  return 0;
}
var feb = getday();
var days = [
  "31",
  feb,
  "31",
  "30",
  "31",
  "30",
  "31",
  "31",
  "30",
  "31",
  "30",
  "31"
];
var dayname = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
/*
d += "<li class='date-small'>M</li>";
d += "<li class='date-small'>Tu</li>";
d += "<li class='date-small'>W</li>";
d += "<li class='date-small'>Th</li>";
d += "<li class='date-small'>F</li>";
d += "<li class='date-small'>Sat</li>";
d += "<li class='date-small'>Sun</li>";
*/


// if (i >= current_date.date%date.getDay()) {
  //  if (i + 1 - date.getDay() != current_date.date) {
  //    d += "<li class='date-small'>" + (i + 1 - date.getDay()) + "</li>";
  //    if ((i + 1 - date.getDay()) % 7 == 0) {
  //      d += "";
  //    }
  //  } else {
  //    d += "<li class='date-small today'>" + (i + 1 - date.getDay()) + "</li>";
  //    if ((i + 1 - date.getDay()) % 7 == 0) {
  //      d += "";
  //    }
  //  }
  // }else{
  //    d += "<li class='date-small'>&nbsp;</li>";
  // }



for (var i = 0; i < days[date.getMonth()] * 1; i++) {
    if(i+1 == current_date.date){
      cur = " today";
    }else{
      cur = "";
    }
    
    d += "<li class = 'date-small"+cur+"'>"+(i+1)+"</li>";
}
var fill = (days[date.getMonth()] * 1)%7;
for(i = 0;i <= fill;++i){
  d += "<li class = 'date-small'>&nbsp;</li>";
}
c += "<div class='day-full'>" + dayname[date.getDay()] + "day</div>";
document.getElementsByClassName("calendar")[0].innerHTML += c;
document.getElementsByClassName("datelist")[0].innerHTML = d;


let livesDay = document.querySelectorAll(".date-small");
console.log(livesDay);
let viewCalc = document.querySelector(".calc");



for(let i = 0; i < livesDay.length; i++){
 livesDay[i].addEventListener("click", function(){
  this.classList.toggle("workday");
  viewCalc.classList.toggle("view");
 })
}
















let input = document.querySelector("input"),
  sumArr = [],
  sum = 0;
  // count.innerHTML = 0;


input.oninput = function(){
  // console.log(this.value);
  this.value = this.value.replace (/\D/gi, '').replace (/^0+/, '')
  // out.innerText = this.value;
}

btn.onclick = function(){
  let mony = document.createElement("div");
  // document.body.(mony, count);
  wrap.appendChild(mony);
  mony.classList.add("mony");
  mony.innerText = input.value;
  input.value = "";


  sumArr.push(mony.innerHTML);
  console.log(sumArr);

  let numArr = []
  for(i = 0; i < sumArr.length; i++){
    numArr.push(Number(sumArr[i]));
  }
  // numArr.push(Number(sumArr));
  console.log(numArr);

  for(let i = 0; i < numArr.length; i++){
    sum = sum + parseInt(numArr[i]);
    // sum =+ mony.innerHTML;
    // console.log(sum);  
  }

  // numArr.reduce(function(a,b){
  //  // return previousValue + currentValue;
  //  return console.log(a + b);
  // })

  let mysum = numArr.reduce(add, 0);
  function add(a,b){
    return a + b;
  }

  console.log(mysum);

  count.innerText = mysum;




  if(mony.innerText == ""){
    mony.parentNode.removeChild(mony);
  }


  

  result();

  // console.log(mony.innerHTML);
}

function result(){
  let allMony = document.querySelectorAll(".mony");
  // console.log(allMony);

}


// var arr = ['2', '6', '7'];
// var sum=0;
// for(var i=0;i<arr.length;i++){
//     sum = sum + parseInt(arr[i]);

// }
// alert(sum); 

// Сделать значение count равной суммы всех числел масива   (sum)