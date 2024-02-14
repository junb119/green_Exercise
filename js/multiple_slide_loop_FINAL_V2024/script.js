const slideWrapper = document.querySelector(".slide_wrapper");
const slideContainer = slideWrapper.querySelector(".slides");
let slides = slideContainer.querySelectorAll("li");
let currentIdx = 0;
let slideCount = slides.length;
const slideWidth = 200;
const slideMargin = 30;
const moveAmt = slideWidth + slideMargin;
const slideToShow = 3;
const prevBtn = slideWrapper.querySelector(".prev");
const nextBtn = slideWrapper.querySelector(".next");
let timer;

//복사본 생성
//슬라이드 요소를 복사해 뒤에 추가
for (let slide of slides) {
  let slideClone = slide.cloneNode(true);
  slideContainer.appendChild(slideClone);
}
//슬라이드 요소를 복사해 앞에 추가
for (let i = 4; i >= 0; i--) {
  let slideClone = slides[i].cloneNode(true);
  slideContainer.prepend(slideClone);
}

//slideContainer의 너비를 지정
slides = slideContainer.querySelectorAll("li");
let newslideCount = slides.length;

//슬라이드 중앙 배치
slideContainer.style.width =
  slideWidth * newslideCount + slideMargin * (newslideCount - 1) + "px";
slideContainer.style.transform = `translateX(${moveAmt * -slideCount}px)`;

//이동함수
function moveSlide(idx) {
  slideContainer.style.left = `${-idx * moveAmt}px`;
  currentIdx = idx;

  if (currentIdx == -slideCount || currentIdx == slideCount) {
    setTimeout(() => {
      slideContainer.classList.remove("animated");
      slideContainer.style.left = 0;
    }, 500);
    setTimeout(() => {
      slideContainer.classList.add("animated");
    }, 550);

    currentIdx = 0;
  }
  console.log(currentIdx);
}
//이전 버튼으로 이동하기
/*
prevBtn.addEventListener('click',()=>{  
  moveSlide(currentIdx-1); 
});

//다음 버튼으로 이동하기
nextBtn.addEventListener('click',()=>{  
  moveSlide(currentIdx+1); 
});
*/
prevBtn.addEventListener(
  "click",
  debounce(() => {
    moveSlide(currentIdx - 1);
  }, 500)
);
nextBtn.addEventListener(
  "click",
  debounce(() => {
    moveSlide(currentIdx + 1);
  }, 500)
);

//debounce

function debounce(callback, time) {
  console.log(typeof callback);
  let slideTrigger = true;
  console.log(slideTrigger);
  return () => {
    if (slideTrigger) {
      callback();
      slideTrigger = false;
      setTimeout(() => {
        slideTrigger = true;
      }, time);
    }
    console.log(slideTrigger);
  };
  console.log(slideTrigger);
}

window.addEventListener("keydown", (e) => {
  debounce(() => {
    if (e.key === "ArrowRight") {
      moveSlide(currentIdx + 1);
    }
    if (e.key === "ArrowLeft") {
      moveSlide(currentIdx - 1);
    }
  }, 500)();
});

function autoSlide() {
  timer = setInterval(() => {
    moveSlide(currentIdx + 1);
  }, 4000);
}

//ul에 마우스가 들어오면 멈추기, 나가면 다시 시작
slideContainer.addEventListener("mouseenter", () => {
  clearInterval(timer);
});
slideContainer.addEventListener("mouseleave", () => {
  autoSlide();
});

let xAxis = {
  downX: 0,
  upX: 0,
};
let yAxis = {
  downY: 0,
  upY: 0,
};

slideContainer.addEventListener("mousedown", (e) => {
  xAxis.downX = e.clientX;
  yAxis.downY = e.clientY;
});
slideContainer.addEventListener("mouseup", (e) => {
  xAxis.upX = e.clientX;
  yAxis.upY = e.clientY;

  let differenceX = Math.abs(xAxis.downX - xAxis.upX);
  let differenceY = Math.abs(yAxis.downY - yAxis.upY);

  if (differenceX > differenceY) {
    // 좌우 > 위아래
    if (xAxis.upX >= xAxis.downX) {
      //swipe to right
      moveSlide(currentIdx - 1);
    } else {
      //swipe to left
      moveSlide(currentIdx + 1);
    }
  } else {
    //위아래 > 좌우
    if (yAxis.upY >= yAxis.downY) {
      //swipe to bottom
    } else {
      //swipe to top
    }
  }
});
