import React from 'react'
import Highlight from 'react-highlight'

const Gsapdesc = () => {
  return (
    <div className="list">
            <div className="item__inner">
              <p className="desc">
              GSAP는 JavaScript를 기반으로 한 강력한 애니메이션 라이브러리<br />
              GSAP을 사용하면 웹 페이지의 다양한 요소들을 부드럽고 멋진 애니메이션으로 만들 수 있다.<br />
              GSAP의 Parallax 효과는 웹 페이지의 여러 레이어가 서로 다른 속도로 스크롤될 때 생기는 입체적인 시각 효과를 만들어내는 기능입니다.<br />
              </p>
            </div>
            <div className="item__inner">
              <p className="desc">
              <details>
               <summary>GSAP 설치</summary> 
              <Highlight className="javascript"> 
{` 
  - CDN을 통해 스크립트 추가
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/gsap.min.js"></script>

  - npm install를 통해 설치   
  " npm install gsap "

  - ScrollTrigger 추가
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
           
`}
              </Highlight>
              </details>
              </p>
            </div>
            <div className="item__inner">
              <p className="desc">
                <h3>GSAP Parallax Effect01</h3>
             <details>

             <summary>GSAP scrollTrigger - 애니메이션 기본 효과</summary>
             <Highlight className="javascript"> 
             <br/>
box1 - 360도 회전하면서 오른쪽으로 500정도 가면서 동그랗게 변하기<br/> 
<br/>  
box2 - trigger: box2, box2가 화면에 나타날때 애니메이션이 시작 <br/>
<br/>
box3 - toggleActions: "play none reverse none": 트리거가 활성화되면 애니메이션을 재생하고,다른 트리거 액션이 없으며, 트리거가 비활성화되면 애니메이션을 역재생하지 않고 유지 <br/>
<br/>
box4 - start: "top 50%": 트리거의 시작 위치를 화면 상단에서 50% 지점으로 설정 , end: "bottom 20%": 트리거의 끝 위치를 화면 하단에서 20% 지점으로 설정 , markers: false: ScrollTrigger의 디버깅을 위한 마커를 표시하지 않음.<br/>
<br/>
box5 - scrub: true: 스크롤 속도에 따라 애니메이션을 부드럽게 조절하는 설정을 활성화,  box5 요소가 화면에 나타날 때, 스크롤 속도에 따라 부드럽게 애니메이션이 진행<br/>
<br/>
box6 - pin: true: 트리거가 활성화될 동안 요소를 고정시키는 설정을 활성화, box6 요소가 화면에 나타나면 스크롤 속도에 따라 부드럽게 애니메이션이 진행되며, 동시에 pin 옵션에 의해 화면에 고정되어 나타난 후 스크롤이 특정 위치(bottom:400px)에 도달하면 다시 해제<br/>
<br/>
box7 - toggleClass:"active", box7가 화면에 나타날 때 2초 동안의 애니메이션 효과가 적용되고, 스크롤 이벤트에 따라 부드럽게 제어되면서 "active" 클래스가 토글<br/>
<br/>
box8 - box8이 화면에 나타날 때, 스크롤 속도에 따라 부드럽게 애니메이션이 진행되며, 다양한 ScrollTrigger 이벤트 콜백이 발생할 때마다 콘솔에 해당 메시지를 출력 <br/>
<br/>
{`
<script>
const box1 = document.querySelector("#section1 .parallax__item__img");
const box2 = document.querySelector("#section2 .parallax__item__img");
const box3 = document.querySelector("#section3 .parallax__item__img");
const box4 = document.querySelector("#section4 .parallax__item__img");
const box5 = document.querySelector("#section5 .parallax__item__img");
const box6 = document.querySelector("#section6 .parallax__item__img");
const box7 = document.querySelector("#section7 .parallax__item__img");
const box8 = document.querySelector("#section8 .parallax__item__img");
const box9 = document.querySelector("#section9 .parallax__item__img");

// 01
gsap.to(box1, {
    duration : 2,
    x: 500,
    borderRadius: 100,
    rotation:360
});

// 02 : trigger
gsap.to(box2, {
    duration: 2,
    x: 500,
    rotation: 360,
    borderRadius: 100,
    scrollTrigger: {
        trigger: box2
    }
});

// 03 :toggleActions
gsap.to(box3, {
    duration: 2,
    x: 500,
    rotation: 360,
    borderRadius: 100,
    scrollTrigger: {
        trigger: box3,
        toggleActions:"play none reverse none" // play pause resume restart complete none
                                                // onEnter onLeave onEnterBack onLeaveBack
    }
});

// 04 : start, end
gsap.to(box4, {
    duration: 2,
    x: 500,
    rotation: 360,
    borderRadius: 100,
    
    scrollTrigger: {
        trigger: box4,
        start: "top 50%",
        end: "bottom 20%",
        toggleActions:"play none reverse none",
        markers: false
    }
});

// 05: scrub
gsap.to(box5, {
    duration: 2,
    x: 500,
    rotation: 360,
    borderRadius: 100,
    
    scrollTrigger: {
        trigger: box5,
        start: "top 50%",
        end: "bottom 20%",
        scrub: true  
    }
});

// 06: pin
gsap.to(box6, {
    duration: 2,
    x: 500,
    rotation: 360,
    borderRadius: 100,
    
    scrollTrigger: {
        trigger: box6,
        start: "top 50%",
        end: "bottom 400px",
        scrub: true, 
        pin: true 
    }
});

// 07 : toggleClass
gsap.to(box7, {
    duration: 2,
    x: 500,
    rotation: 360,
    borderRadius: 100,
    
    scrollTrigger: {
        trigger: box7,
        start: "top center",
        end: "bottom 20%",
        scrub: true, 
        toggleClass:"active",
        id:"box7",
        markers: true
    }
});

// 08. : callback
gsap.to(box8, {
    duration: 2,
    x: 500,
    rotation: 360,
    borderRadius: 100,
    
    scrollTrigger: {
        trigger: box8,
        start: "top center",
        end: "bottom 20%",
        scrub:true, 
        onEnter: () => {console.log("onEneter")},
        onLeave: () => {console.log("onEneter")},
        onEnterBack:() => {console.log("onEneterBack")},
        onLeaveBack:() => {console.log("onLeaveBack")},
        onUpdat: (self) => console.log("onUpdate", self.progress.toFixed(3)),
        onToggle: (self) => console.log("onToggle", self.isActive)
    }
});

</script>
`}
             
             </Highlight>
             </details>
              </p>
            </div>
            <div className="item__inner">
              <p className="desc">
                <h3>GSAP Parallax Effect02</h3>
             <details>

             <summary>GSAP scrollTrigger - Pin 애니메이션</summary>
             <Highlight className="javascript"> 
          {`   
ani1 - section1 내부의 .parallax__item__img 요소에 대한 애니메이션을 추가, 이미지는 회전값이 720도가 되고, 크기가 0으로 축소되며, 경계 반경이 200으로 설정
이어서 이미지에 대한 다음 애니메이션을 추가해서, 이미지는 다시 초기 회전값인 0으로 돌아가며, 크기는 1로 확대되고, 경계 반경은 20으로 설정, 현재 스크롤 위치에서 2000px 아래로 스크롤할 때 애니메이션이 끝남.
  
ani2 - i1, i2, i3 이미지는 y축 방향으로 -200만큼 이동하면서 나타나며, autoAlpha 속성을 이용하여 투명도를 0에서 1로 증가시킵니다. 또한, 이미지의 경계 반경도 200으로 설정, 스크롤될 때 순차적으로 i1이미지, i2이미지, i3이미지 등장하는 이미지 애니메이션

ani3 - autoAlpha: 0: 이미지의 투명도를 0으로 설정하여 처음에는 화면에 보이지 않도록 하고, ease: "back.out(4)": 애니메이션의 이동 효과에 이징 함수를 적용하여 물리적인 효과를 부여합니다. 여기서는 뒤로 튀기는(back) 효과를 사용하고, 효과의 강도는 4로 설정, from: "random"은 ani2 에서는 1,2,3 순서대로 이미지가 나왔다면,
ani3은 1,3,2 or 2,1,3 등등 랜덤으로 이미지 나옴. 

ani4 - scale: 2: 이미지를 2배로 확대, width: "100vw": 이미지의 너비를 화면의 가로 크기와 동일하게 설정, height: "100vh": 이미지의 높이를 화면의 세로 크기와 동일하게 설정, 현재 스크롤 위치에서 3000px 아래로 스크롤할 때 애니메이션이 끝나고, 이미지가 화면에 나타나면서 2배로 확대되고, 스크롤 중에 축소되면서 특정 위치에서 고정되는 애니메이션

ani5 - .to("#section5 .t1",{xPercent: 300},"text"): section5 내의 .t1 클래스를 가진 텍스트 요소에 대한 애니메이션을 추가, 텍스트는 x축 방향으로 300%만큼 이동하고,.to("#section5 .t2",{xPercent: -300},"text"): section5 내의 .t2 클래스를 가진 텍스트 요소에 대한 애니메이션을 추가, 텍스트는 x축 방향으로 -300%만큼 이동하면서, section5 내의 텍스트 요소들이 좌우로 이동하면서 나타나는 애니메이션

ani6 - .to("#section6 .parallax__item__text",{scale:60, duration: 2}): section6 내의 .parallax__item__text 클래스를 가진 텍스트 요소에 대한 애니메이션을 추가하고, 텍스트는 60배로 확대되며, 이 애니메이션은 2초 동안 진행

ani7 - .from() 메서드를 사용하여 .t2, .t3, ..., .t7에 대한 각각의 텍스트 요소에 대한 애니메이션을 추가하고, 각 텍스트는 투명도가 0에서 1로, y축 방향으로 50만큼 이동하면서 나타나게 되고, 각각의 애니메이션은 이전 애니메이션이 끝난 후 1초씩 지연되어 시작 , section7 내의 여러 텍스트 요소들이 제자리에서 차례대로 나타나는 애니메이션

ani8 - section8 내의 텍스트 및 이미지가 특정 방향으로 이동하면서 나타나는 애니메이션을 설정, 첫 번째 텍스트는 화면의 오른쪽에서 왼쪽으로 이동하고, 두 번째 텍스트는 화면의 왼쪽에서 오른쪽으로 이동하고, 3번째 텍스트는 화면의 오른쪽에서 왼쪽으로 이동하고, 마지막 이미지는 오른쪽에서 왼쪽으로 이동하면서 동시에 360도 회전하고, 5.5배로 확대되어 나타납니다.

ani9 - section9 내의 이미지가 2초 동안 60배로 확대되면서 나타나고, 그 후에 투명도를 갖게 되어 사라지는 애니메이션을 구현합니다. 이 애니메이션은 스크롤 중에 특정 위치에서 시작되며, 해당 section이 스크롤되는 동안 이미지가 고정되어 나타남.
`}
{`
<script>
// 01 : 이미지 애니메이션 주기
 const ani1 = gsap.timeline();
 ani1.to("#section1 .parallax__item__img" , {rotation:720, scale: 0, borderRadius: 200})
     .to("#section1 .parallax__item__img" , {rotation:0, scale: 1, borderRadius: 20})
 
 ScrollTrigger.create({
     animation: ani1,
     trigger: "#section1",
     start:"top top",
     end:"+=2000",
     scrub:true,
     pin: true,
     anticipatePin: 1,
     markers: true
 });
 
 
 // 02 : 이미지를 순차적으로 나오기
 const ani2 = gsap.timeline();
 ani2.from("#section2 .i1", {y: -200, autoAlpha:0, borderRadius: 200})
     .from("#section2 .i2", {y: -200, autoAlpha:0, borderRadius: 200})
     .from("#section2 .i3", {y: -200, autoAlpha:0, borderRadius: 200})

 ScrollTrigger.create({
     animation: ani2,
     trigger:"#section2",
     start: "top top",
     end: "+=2000",
     scrub:true,
     pin: true,
     anticipatePin: 1,
 })

 // 03 : 이미지를 랜덤으로 나오기
 const ani3 = gsap.timeline();
 ani3.from("#section3 .parallax__item__img", {
     autoAlpha: 0,
     y: -100,
     ease: "back.out(4)",
     // stagger: 0.1
     stagger: {
         amount:1,
         from: "random"
     }
 });

 ScrollTrigger.create({
     animation: ani3,
     trigger:"#section3",
     start:"top top",
     end: "+=3000",
     scrub: true,
     pin: true
 })

 // 04 : 이미지 축소하기
 const ani4 = gsap.timeline();
 ani4.from("#section4 .parallax__item__img",{
     autoAlpha: 0,
     scale: 2,
     width: "100vw",
     height: "100vh"
 })

 ScrollTrigger.create({
     animation: ani4,
     trigger:"#section4",
     start:"top top",
     end: "+=3000",
     scrub: true,
     pin: true
 })

 // 05 : 텍스트 애니메이션
 const ani5 = gsap.timeline();
 ani5.to("#section5 .t1",{xPercent: 300} ,"text")
     .to("#section5 .t2",{xPercent: -300},"text")
     .to("#section5 .t3",{xPercent: 300}, "text")
     .to("#section5 .t4",{xPercent: -300},"text")
 
 ScrollTrigger.create({
     animation: ani5,
     trigger:"#section5",
     start:"top top",
     end: "+=3000",
     scrub: true,
     pin: true,
 })
 
 // 06 : 텍스트 확대
 const ani6 = gsap.timeline();
 ani6.to("#section6 .parallax__item__text",{scale:60, duration: 2})
     .to("#section6 .parallax__item__text",{autoAlpha : 0})
 
 ScrollTrigger.create({
     animation: ani6,
     trigger:"#section6",
     start:"top top",
     end: "+=4000",
     scrub: true,
     pin: true,
 })
 
 
 // 07 : 텍스트 제자리 애니메이션
 const ani7 = gsap.timeline();
 ani7.from("#section7 .t1", {autoAlpha: 0, duration:1, y:50}, "+=1")
     .from("#section7 .t2", {autoAlpha: 0, duration:1, y:50}, "+=1")
     .from("#section7 .t3", {autoAlpha: 0, duration:1, y:50}, "+=1")
     .from("#section7 .t4", {autoAlpha: 0, duration:1, y:50}, "+=1")
     .from("#section7 .t5", {autoAlpha: 0, duration:1, y:50}, "+=1")
     .from("#section7 .t6", {autoAlpha: 0, duration:1, y:50}, "+=1")
     .from("#section7 .t7", {autoAlpha: 0, duration:1, y:50}, "+=1")

 ScrollTrigger.create({
     animation: ani7,
     trigger:"#section7",
     start:"top top",
     end: "+=6000",
     scrub: true,
     pin: true,
 })

 // 08 : 텍스트 애니메이션
 const ani8 = gsap.timeline();
 ani8.from("#section8 .t1",{x:innerWidth * 1})
     .from("#section8 .t2",{x:innerWidth * -1})
     .from("#section8 .t3",{x:innerWidth * 1})
     .from("#section8 .i1",{x:innerWidth * 1 , rotation: 360, scale: 5.5})
 
 ScrollTrigger.create({
     animation: ani8,
     trigger:"#section8",
     start:"top top",
     end: "+=6000",
     scrub: true,
     pin: true,
     anticipatePin: 0,
     markers: true
 })

 // 09. 이미지 확대
 const ani9 = gsap.timeline();
 ani9.to("#section9 .parallax__item__img",{scale:60, duration: 2})
     .to("#section9 .parallax__item__img",{autoAlpha : 0})
     
 ScrollTrigger.create({
     animation: ani9,
     trigger:"#section9",
     start:"top top",
     end: "+=4000",
     scrub: true,
     pin: true,
 })

</script>
`}
             
             </Highlight>
             </details>
              </p>
            </div>
            <div className="item__inner">
              <p className="desc">
                <h3>GSAP Parallax Effect03</h3>
             <details>

             <summary>GSAP scrollTrigger - 배경 고정시키기</summary>
             <Highlight className="javascript"> 
             <br/>
1. ScrollTrigger 플러그인을 사용하여 페이지에서 #section5라는 요소를 지정한 section으로 고정시키는 애니메이션을 만들고, section이 페이지의 상단에 도달하면 고정되며, markers: true 설정으로 디버깅을 위한 마커를 활성화<br />
<br />
2. 여러 section에 대해 반복문을 통해 ScrollTrigger 플러그인을 생성하여 각각의 section을 페이지에서 고정시키는 애니메이션을 만들고, .parallax__item 클래스를 가진 모든 요소에 대해 고정 트리거를 생성하고, 각 section이 페이지의 상단에 도달하면 고정됩니다. pinSpacing: false는 각 section 사이의 공간을 없애고 연속적으로 고정되도록 함.<br />
<br />
3. panels 배열은 .parallax__item 클래스를 가진 모든 요소를 저장합니다.<br />
tops 배열은 각 섹션에 대한 ScrollTrigger를 생성하여 시작 위치를 저장합니다.<br />
각 섹션에 대해 새로운 ScrollTrigger를 생성하고, 섹션의 높이가 창 높이보다 작으면 섹션 상단을 기준으로, 그렇지 않으면 섹션 하단을 기준으로 고정시킵니다.<br />
마지막으로, ScrollTrigger.create 함수를 사용하여 페이지 전체의 스냅 효과를 설정합니다. 이 효과는 섹션의 시작 위치를 기준으로 페이지를 일정 간격으로 이동시킵니다.<br />
{`
<script>
// 01. 한개 section 고정시키기
const panel = document.querySelector("#section5");

ScrollTrigger.create({
    trigger:panel,
    start: "top top",
    pin: true,
    markers: true
});

// 02. 여러개 section 고정시키기
gsap.utils.toArray(".parallax__item").forEach((panel,i) => {
    ScrollTrigger.create({
        trigger: panel, 
        start: "top top",
        pin: true,
        pinSpacing: false
    })
});

// 03. 스냅 고정 효과 만들기
let panels = gsap.utils.toArray(".parallax__item");
let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));

panels.forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
        pin: true, 
        pinSpacing: false 
    });
});

ScrollTrigger.create({
    snap: {
        snapTo: (progress, self) => {
            let panelStarts = tops.map(st => st.start), 
            snapScroll = gsap.utils.snap(panelStarts, self.scroll()); 
            return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); 
        },
        duration: 0.5
    }
});


</script>
`}
             
             </Highlight>
             </details>
              </p>
            </div>
            <div className="item__inner">
              <p className="desc">
                <h3>GSAP Parallax Effect04</h3>
             <details>

             <summary>GSAP scrollTrigger - 이질감 효과</summary>
             <Highlight className="javascript"> 
    {`       
1. yPercent: -100: 애니메이션 중에 요소의 수직 방향 이동을 나타내며, 여기서는 위로 100% 이동하도록 설정, ease: "none": 애니메이션의 이질감 효과를 주기 위해 이질적인(ease 없는) 움직임을 설정, 설정된 애니메이션은 스크롤 이벤트에 반응하여 ".parallax__item__desc" 클래스를 가진 요소를 수직으로 이동시키고, 이를 통해 이질감을 표현

2. gsap.utils.toArray(".parallax__item__desc").forEach(item => {...}): ".parallax__item__desc" 클래스를 가진 모든 요소를 배열로 가져와서 각 요소에 대해 반복 작업을 수행, yPercent: -200: 각 요소에 대한 애니메이션 중에 요소의 수직 방향 이동을 나타내며, 여기서는 위로 200% 이동하도록 설정 , ease: "none": 애니메이션의 이질감 효과를 주기 위해 이질적인(ease 없는) 움직임을 설정, .parallax__item__desc" 클래스를 가진 여러 개의 요소에 대해 각각 이질감을 표현하는 애니메이션을 설정하고, 스크롤 이벤트에 반응하여 이질감을 나타냅니다.
`} 

{`
<script>
// 01. 이질감 표현하기
gsap.to(".parallax__item__desc", {
    yPercent: -100,
    ease: "none",
    duration: 0.5,
    scrollTrigger: {
        trigger: ".parallax__item__desc",
        start: "top bottom",
        end: "bottom top",
        markers: true,
        scrub: true
    }
})

// 02. 여러개 이질감 표현하기
gsap.utils.toArray(".parallax__item__desc").forEach(item => {
    gsap.to(item, {
        yPercent: -200,
        ease: "none",
        duration: 0.5,
        scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            markers: true,
            scrub: 0.5
        }
    })
});
</script>
`}
             
             </Highlight>
             </details>
              </p>
            </div>
            <div className="item__inner">
              <p className="desc">
                <h3>GSAP Parallax Effect05</h3>
             <details>

             <summary>GSAP scrollTrigger - 나타나기 효과</summary>
             <Highlight className="javascript"> 
             {`
               1. const animate = (item) => {...}: animate 함수는 요소의 등장 애니메이션을 처리합니다. 요소에 설정된 클래스에 따라 등장 방향과 관련된 변수들(x, y)을 설정하고, gsap.fromTo 메서드를 사용하여 애니메이션을 적용, gsap.utils.toArray(".reveal").forEach(item => {...}): ".reveal" 클래스를 가진 모든 요소에 대해 반복 작업을 수행하고,설정된 코드는 스크롤되면서 ".reveal" 클래스를 가진 요소들이 화면에 나타날 때 등장 애니메이션을 수행하며, 각 요소에 설정된 클래스에 따라 다양한 등장 방향과 효과를 부여합니다.
             `}
           
{`
  <script>
  const hide = (item) => {
      gsap.set(item, {autoAlpha: 0});
  }
  const animate = (item) => {
      let x = 0;
      let y = 0;
      let delay = item.dataset.delay;

      if(item.classList.contains("reveal_LTR")){
          x = -100;
          y = 0;
      }else if(item.classList.contains("reveal_BTT")){
          x = 0,
          y = 100
      }else if(item.classList.contains("reveal_TTB")){
          X = 0,
          Y = -100
      }else {
          x = 100,
          y = 0
      }

      gsap.fromTo(item,
          {autoAlpha:0, x: x, y: y}, 
          {autoAlpha:1, x: 0, y: 0, delay, duration: 1.25, overwrite: "auto", ease:"expo"})
  }

  gsap.utils.toArray(".reveal").forEach(item => {
      hide(item);

      ScrollTrigger.create ({
          trigger: item,
          start:"top bottom",
          end : "bottom top",
          markers: true,
          onEnter: () => {animate(item)}
      })
  });
</script>

`}
             
             </Highlight>
             </details>
              </p>
            </div>
            <div className="item__inner">
              <p className="desc">
                <h3>GSAP Parallax Effect06</h3>
             <details>

             <summary>GSAP scrollTrigger - 텍스트 효과</summary>
             <Highlight className="javascript"> 
{`        
1. let text = document.querySelector(".split"): HTML 문서에서 클래스가 "split"인 요소를 선택하여 text 변수에 할당, let splitText = text.innerText;: 선택된 요소의 텍스트 내용을 가져와서 splitText 변수에 저장,  결과적으로, 각 문자 주위에 span 태그가 추가된 문자열이 splitWrap 변수에 저장, text.innerHTML = splitWrap = "span" + splitWrap + "/span";: 기존의 텍스트를 감싸는 span 태그를 추가하여 다시 text 요소의 내용으로 설정합니다. 이렇게 하면 각 문자가 span으로 감싸진 형태로 텍스트가 변환 , 선택한 요소의 텍스트가 문자 단위로 분리되고, 각 문자가 span 태그로 감싸져 시각적인 효과를 얻을 수 있습니다.

2. 클래스가 "split"인 모든 요소의 텍스트가 문자 단위로 분리되고, 각 문자가 span 태그로 감싸져 시각적인 효과를 얻을 수 있습니다. 또한, 보조 기술 사용자를 위해 각 문자는 숨겨진 상태로 제공되지만 aria-label 속성을 통해 의미있는 텍스트가 제공됩니다.

3. 먼저, 각 요소의 텍스트를 문자 단위로 분리하고, 공백 문자는 &nbsp 로 대체하여 각 문자를 span 태그로 감싸는 작업을 하고, 다음으로 GSAP 라이브러리와 ScrollTrigger 플러그인을 사용하여 애니메이션을 적용, 각 문자를 분리하여 span 태그로 감싸고, GSAP를 이용하여 스크롤 시에 등장하는 애니메이션을 적용하여 동적이고 효과적인 텍스트 효과를 구현합니다.

4. let splitClient = new SplitType(target, {type: "line, word, char"});: SplitType을 사용하여 각 요소의 텍스트를 분리합니다. type 옵션을 통해 분리할 단위를 지정하고, "line, word, char" 옵션은 줄, 단어, 문자 단위로 텍스트를 분리하라는 의미, SplitType을 사용하여 텍스트를 분리하고, GSAP를 이용하여 단어 단위로 등장하는 애니메이션을 적용하여 동적이고 효과적인 텍스트 효과를 구현합니다.
`}
{`
 <script>
        // 01. 텍스트 분리하기
        let text = document.querySelector(".split")
        let splitText = text.innerText;
        let splitWrap = splitText.split("").join("</span><span>");
        text.innerHTML = splitWrap = "<span>" + splitWrap + "</span>";

        // 02. 모든 텍스트 분리하기
        document.querySelectorAll(".split").forEach(text => {
            let splitWrap = text.innerText.split("").join("</span><span aria-hidden='true'>");
            text.innerHTML = "<span aria-hidden=true>" + splitWrap + "</span>";
            text.setAttribute("aria-label",text.innerText)
        })

        // 03. 모든 텍스트 분리하기 : 여백 표현하기
        document.querySelectorAll(".split").forEach(text => {
            let theText = text.innerText;
            let newText = "";

            for(let i=0; i<text.innerText.length; i++){
                newText += "<span aria-hidden=true>";
                
                if(text.innerText[i] == " "){
                    newText += "&nbsp";
                }else {
                    newText += text.innerText[i];
                }    
                newText += "</span>";    
            }
            text.innerHTML = newText;
            text.setAttribute("aria-label", theText);
        });

        gsap.utils.toArray(".split").forEach(text => {
            gsap.from(text.querySelectorAll("span"), {
                yPercent: 100,
                autoAlpha:0,
                duration: 1,
                ease:"circ.out",
                stagger: {
                    amount:1,
                    from:"random"
                },
                scrollTrigger: {
                    trigger: text,
                    start: "top bottom",
                    end: "+400",
                    markers: true
                }
            });
        });

        // 04 split-type 사용하기
        const target = gsap.utils.toArray(".split");

        target.forEach(target => {
            let splitClient = new SplitType(target, {tpye: "line, word, char"});
            let lines = splitClient.lines;
            let words = splitClient.words;
            let chars = splitClient.chars;

            gsap.from(words, {
                yPercent:100,
                opacity:0,
                rotation:30,
                duration: 0.7,
                stagger: 0.031,
                scrollTrigger: {
                    trigger: target,
                    start:"top bottom",
                    end:"+400",
                    markers: true
                }
            })
        })

    </script>
`}
             
             </Highlight>
             </details>
              </p>
            </div>
            <div className="item__inner">
              <p className="desc">
                <h3>GSAP Parallax Effect07</h3>
             <details>

             <summary>GSAP scrollTrigger - 배경색 효과</summary>
             <Highlight className="javascript"> 
{`
1. onEnter: () => gsap.to("body", {...}): 트리거가 화면에 진입할 때, gsap.to를 사용하여 body 요소의 배경 색상을 color 값으로 변경합니다. duration 옵션은 애니메이션의 지속 시간을 설정합니다.<br>
2. onEnterBack: () => gsap.to("body", {...}): 트리거가 화면에서 벗어나면서 다시 위로 진입할 때도 마찬가지로 gsap.to를 사용하여 body 요소의 배경 색상을 color 값으로 변경합니다.이 코드를 통해 각 "parallax__item" 요소가 화면에 진입할 때와 화면에서 벗어날 때, 해당 요소의 data-bgcolor 값을 이용하여 body 요소의 배경 색상을 부드럽게 변경합니다. <br>
`}
{`
// data 값으로 배경 변경
gsap.utils.toArray(".parallax__item").forEach(item => {
    let color = item.getAttribute("data-bgcolor");
    
    ScrollTrigger.create({
        trigger: item,
        start:"top 50%",
        end: "bottom 5%",
        markers: true,

        onEnter: () => gsap.to("body", {
            backgroundColor: color,
            duration: 1.4,
        }),
        onEnterBack: () => gsap.to("body", {
            backgroundColor: color,
            duration:1.4,
        })
    });
});
`}
             </Highlight>
             </details>
              </p>
            </div>
            <div className="item__inner">
              <p className="desc">
                <h3>GSAP Parallax Effect08</h3>
             <details>

             <summary>GSAP scrollTrigger - 진행바 효과</summary>
             <Highlight className="javascript"> 
             <br/>
             1. 스크롤 이벤트에 따라 "progress" 요소의 value 속성이 0에서 100으로 부드럽게 증가하는 애니메이션을 만듭니다. <br />
             스크럽 효과는 스크롤 위치에 따라 애니메이션을 부드럽게 조절하여 자연스러운 효과를 제공합니다.<br/>
{`
script>
gsap.to("progress" , {
     value: 100,
     ease:"none",
     scrollTrigger: {scrub:0.3}
});
</script>
`}
             
             </Highlight>
             </details>
              </p>
            </div>
            <div className="item__inner">
              <p className="desc">
                <h3>GSAP Parallax Effect09</h3>
             <details>

             <summary>GSAP scrollTrigger - 메뉴 이동 효과</summary>
             <Highlight className="javascript">
              {`
1. linkST = ScrollTrigger.create({...});: 각 섹션의 스크롤 트리거를 생성합니다. 이 트리거는 스크롤 위치에 따라 링크의 활성 상태를 변경하는 데 사용됩니다.

2. e.preventDefault();: 기본 클릭 동작을 막아 페이지가 즉시 이동하는 것을 방지합니다.

3. gsap.to(window, { duration: 0.5, scrollTo: linkST.start, overwrite: "auto" });: 클릭 이벤트가 발생하면 gsap.to를 사용하여 윈도우를 특정 스크롤 위치로 애니메이션화하여 이동합니다. 이 때, scrollTo 속성에 linkST.start 값을 사용하여 해당 링크의 시작 지점으로 스크롤합니다. 

4. function setActive(link) {...}: 활성 링크를 설정하는 함수입니다. 현재 활성 링크 클래스("active")를 모두 제거하고, 전달받은 링크에 "active" 클래스를 추가합니다.

5. 네비게이션 링크를 클릭하거나 스크롤할 때 해당 섹션으로 부드럽게 이동하면서 활성 링크를 갱신합니다.
`}
{`
<script>
gsap.to("progress" , {
     value: 100,
     ease:"none",
     scrollTrigger: {scrub:0.3}
});
</script>
`}
             
             </Highlight>
             </details>
              </p>
            </div>
            <div className="item__inner">
              <p className="desc">
                <h3>GSAP Parallax Effect10</h3>
             <details>

             <summary>GSAP scrollTrigger - 메뉴 축소 효과</summary>
             <Highlight className="javascript"> 
{` 
1. toggleClass: {...}: 특정 스크롤 범위에 도달하면 클래스를 토글하는 설정을 지정합니다.
className: "is-active": 토글할 클래스 이름을 지정합니다. 스크롤 범위에 도달하면 이 클래스가 특정 대상에 추가되거나 제거됩니다.
targets: "#parallax__nav": 클래스를 토글할 대상 요소를 선택합니다. 여기서는 id가 "parallax__nav"인 요소가 대상이 됩니다.

2. 페이지를 스크롤할 때, 페이지 상단에서 80px 위에 도달하면 "is-active" 클래스를 #parallax__nav 요소에 추가하고, 그 이외의 경우에는 해당 클래스를 제거합니다. 이러한 효과를 통해 일반적으로 페이지 스크롤에 반응하여 네비게이션 바 등을 동적으로 변경하는 UX 디자인을 구현할 수 있습니다.
`}
{`
<script>
ScrollTrigger.create({
    start: "top -80",
    end: 99999,
    toggleClass: {
        className: "is-active",
        targets: "#parallax__nav"
    }
})
</script>
`}
             
             </Highlight>
             </details>
              </p>
            </div>
            <div className="item__inner">
              <p className="desc">
                <h3>GSAP Parallax Effect11</h3>
             <details>

             <summary>GSAP scrollTrigger - 메뉴 숨기기 효과</summary>
             <Highlight className="javascript"> 
             {`
1. ScrollTrigger.create({...}): ScrollTrigger를 생성하여 스크롤 관련 동작을 설정합니다.

2. onUpdate: (self) => {...}: ScrollTrigger에서 스크롤 업데이트 이벤트가 발생할 때 실행되는 콜백 함수를 정의합니다.
self.direction === -1 ? showNav.play() : showNav.reverse(): 스크롤 방향이 위쪽인 경우(self.direction === -1), showNav 애니메이션을 재생하고, 아래쪽인 경우에는 애니메이션을 역재생시켜 네비게이션 바를 나타내거나 감춥니다.<br>

3. 페이지를 스크롤할 때, 스크롤 방향에 따라 #parallax__nav 요소가 나타나거나 사라지도록 하는 효과를 가지고 있습니다.
`}
{`
<script>
const showNav = gsap.from("#parallax__nav", {
    yPercent: -200,
    paused: true,
    duration: 0.2
}).progress(1);

ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
        self.direction === -1 ? showNav.play() : showNav.reverse()
    }
});
</script>
`}
             
             </Highlight>
             </details>
              </p>
            </div>
            <div className="item__inner">
              <p className="desc">
                <h3>GSAP Parallax Effect12</h3>
             <details>

             <summary>GSAP scrollTrigger - 가로 효과</summary>
             <Highlight className="javascript"> 
             1. xPercent: -100 * (sections.length - 1): 모든 섹션을 수평으로 왼쪽으로 이동시킵니다. xPercent 속성은 요소를 수평으로 이동시키는데 사용되며, -100 * (sections.length - 1)은 모든 섹션을 왼쪽으로 이동시키는 값입니다.<br/>
<br/>
2. ease: "none": 애니메이션의 이질적인 부드러움을 의미합니다. 여기서는 등속운동을 사용하여 부드러운 스크롤 효과를 만듭니다.<br/>
<br/>
3. 페이지의 수평 스크롤을 통해 여러 섹션을 연속적으로 이동시키면서, ScrollTrigger를 사용하여 각 섹션을 고정하고 스크롤 중에 부드럽게 이동시키는 효과를 제공합니다.<br/>
<br/>
{`
 <script>
 let sections = gsap.utils.toArray(".parallax__item");


 gsap.to(sections, {
     xPercent: -100 * (sections.length - 1),
     ease: "none",
     scrollTrigger: {
         trigger: "#parallax__cont",
         pin: true,
         scrub: 1,
         snap: 1 / (sections.length - 1),
         end: "+=7000"
     }
 });
</script>
`}
             
             </Highlight>
             </details>
              </p>
            </div>
            <div className="item__inner">
              <p className="desc">
                <h3>GSAP Parallax Effect13</h3>
             <details>

             <summary>GSAP scrollTrigger - 가로 세로 효과</summary>
             <Highlight className="javascript"> 
             <br/>
1. #horizontal이라는 ID를 가진 요소를 선택하여 horizontal 변수에 할당합니다. 이 요소는 수평으로 스크롤되는 부모 컨테이너입니다.<br/>
<br/>
2. xPercent: -100 * (sections.length - 1): 모든 섹션을 수평으로 왼쪽으로 이동시킵니다. xPercent 속성은 요소를 수평으로 이동시키는데 사용되며, -100 * (sections.length - 1)은 모든 섹션을 왼쪽으로 이동시키는 값입니다.<br/>
<br/>
3. ease: "none": 애니메이션의 이질적인 부드러움을 의미합니다. <br/>
<br/>
4. 페이지의 수평 스크롤을 통해 각 섹션을 고정하고 스크롤 중에 부드럽게 이동시키는 효과를 가지고 있습니다.<br/>
<br/>

{`
<script>
const horizontal = document.querySelector("#horizontal");
const sections = gsap.utils.toArray("#horizontal > section");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: horizontal,
        start: "top top",
        end: () => "+=" + (horizontal.offsetWidth - innerWidth),
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1
    }
})

</script>
`}
             
             </Highlight>
             </details>
              </p>
            </div>
            <div className="item__inner">
              <p className="desc">
                <h3>GSAP Parallax Effect14</h3>
             <details>

             <summary>GSAP scrollTrigger - 나타나기 효과</summary>
             <Highlight className="javascript"> 
{`
1. let scrollTween = gsap.to(sections, {...}): GSAP의 to 메서드를 사용하여 섹션에 대한 애니메이션을 정의합니다.
애니메이션은 각 섹션을 수평으로 왼쪽으로 이동시키는 효과를 가지며, ScrollTrigger 플러그인이 적용되어 부드러운 수평 스크롤을 제공합니다.

2. gsap.to(".img4", {...}), gsap.to(".img5", {...}), gsap.to(".img6", {...}):
각각 ".img4", ".img5", ".img6" 클래스를 가진 요소에 대한 별도의 애니메이션을 정의합니다.
각각의 gsap.to에서 사용된 옵션은 다음과 같습니다:
.img4: 세로로 200px 이동하는 y 애니메이션.
.img5: 720도 회전하는 rotation 애니메이션.
.img6: 크기를 0.3배로 축소하는 scale 애니메이션.
`}
{`
<script>
const horizontal = document.querySelector("#horizontal");
const sections = gsap.utils.toArray("#horizontal > section");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: horizontal,
        start: "top top",
        end: () => "+=" + (horizontal.offsetWidth - innerWidth),
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1
    }
})

gsap.to(".img4", {
    y: 200,
    duration: 2,
    ease: "elastic",
    scrollTrigger: {
        trigger: ".img4",
        containerAnimation: scrollTween,
        start: "left center",
        toggleActions: "play none reverse none",
        markers: true,
        id: "img4"
    }
})

gsap.to(".img5", {
    rotation: 720,
    duration: 2,
    ease: "elastic",
    scrollTrigger: {
        trigger: ".img5",
        containerAnimation: scrollTween,
        start: "left center",
        toggleActions: "play none reverse none",
        markers: true,
        id: "img5"
    }
})

gsap.to(".img6", {
    scale: 0.3,
    duration: 2,
    ease: "elastic",
    scrollTrigger: {
        trigger: ".img6",
        containerAnimation: scrollTween,
        start: "left center",
        toggleActions: "play none reverse none",
        markers: true,
        id: "img6"
    }
})

</script>
`}
             
             </Highlight>
             </details>
              </p>
            </div>
            <div className="item__inner">
              <p className="desc">
                <h3>GSAP Parallax Effect15</h3>
             <details>

             <summary>GSAP scrollTrigger - 스무스 효과</summary>
             <Highlight className="javascript"> 
            {`
1. Lenis는 페이지 스크롤에 대한 이벤트를 처리하는 라이브러리입니다.

2. function raf(time) { lenis.raf(time); requestAnimationFrame(raf) }: raf 함수를 정의합니다.
lenis.raf(time)을 호출하여 Lenis 라이브러리가 현재 스크롤 위치에 따라 애니메이션을 처리하도록 합니다.
requestAnimationFrame(raf)를 사용하여 브라우저가 다음 리페인트 전에 raf 함수를 호출하도록 요청합니다.

3. requestAnimationFrame(raf): 최초에 raf 함수를 호출하여 애니메이션 및 스크롤 이벤트에 대한 루프를 시작합니다.
raf 함수는 계속해서 다음 프레임을 요청하여 반복 실행됩니다.

4. Lenis 라이브러리를 사용하여 페이지 스크롤에 대한 이벤트를 감지하고, 스크롤에 따른 애니메이션을 처리하는 루프를 구현합니다.
console.log(e)를 통해 스크롤 이벤트의 정보를 콘솔에 출력하고 있습니다.
`}

{`
 <script>
 const lenis = new Lenis({
     duration: 2,
     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
 });

 lenis.on('scroll', (e) => {
     console.log(e)
 })

 function raf(time) {
     lenis.raf(time)
     requestAnimationFrame(raf)
 }

 requestAnimationFrame(raf)
</script>
`}
             
             </Highlight>
             </details>
              </p>
            </div>
          
          </div>
  )
}

export default Gsapdesc