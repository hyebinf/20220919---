let itemList = document.querySelectorAll(".item");
let btnList = document.querySelectorAll(".btns li button");
let wrapper = document.querySelector(".wrapper");

// 슬라이드 아이템 색상 추가
itemList[0].style.backgroundColor = "pink";
itemList[1].style.backgroundColor = "green";
itemList[2].style.backgroundColor = "yellow";

//forEach()메서드는 주어진 함수를 배열 요소 각각에 대해 실행
//addEventListener()
btnList.forEach(function (btn, idx) {
  btn.addEventListener("click", function () {
    wrapper.style.transform = `translateX(${idx * -100}vw)`;
  });
});
