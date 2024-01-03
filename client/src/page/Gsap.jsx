import React, { useEffect } from 'react'
import gsap from 'gsap';

import arrow from '../assets/img/Arrow11.svg'
import imgGsap from '../assets/img/gsap1-1.png'

import "../assets/scss/section/_work.scss"

const Gsap = () => {

  useEffect(() => {

    gsap.set(".item.i1 .item__inner", {
      opacity: 0,
      y: 30
    });
    gsap.set(".item.i7 .item__inner", {
      opacity: 0,
      y: 30
    });
    gsap.set(".item.i9 .item__inner", {
      opacity: 0,
      y: 30
    });
    gsap.set(".item.i5 .item__inner", {
      opacity: 0,
      y: 30
    });
    gsap.set(".item.i3 .item__inner", {
      opacity: 0,
      y: 30
    });
    gsap.set(".item.i4 .item__inner", {
      opacity: 0,
      y: 30
    });
    gsap.set(".item.i15 .item__inner", {
      opacity: 0,
      y: 30
    });
    gsap.set(".item.i16 .item__inner", {
      opacity: 0,
      y: 30
    });




    gsap.to(".item.i1 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 0.3
    });
    gsap.to(".item.i7 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 0.6
    })
    gsap.to(".item.i9 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 0.9
    })
    gsap.to(".item.i5 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 1.2
    })
    gsap.to(".item.i3 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 1.5
    });
    gsap.to(".item.i4 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 1.5
    })
    gsap.to(".item.i15 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 1.7
    })
    gsap.to(".item.i16 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 1.7
    })
    gsap.to(".item.i6 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 1.9
    })
    // gsap.to(".item.i10 .item__bg", {
    //     height: "0%",
    //     ease: "power3.inOut",
    //     delay: 1.9
    // })
    // gsap.to(".item.i13 .item__bg", {
    //     height: "0%",
    //     ease: "power3.inOut",
    //     delay: 1.9
    // })
    // gsap.to(".item.i2 .item__bg", {
    //     height: "0%",
    //     ease: "power3.inOut",
    //     delay: 2.1
    // })
    // gsap.to(".item.i4 .item__bg", {
    //     height: "0%",
    //     ease: "power3.inOut",
    //     delay: 2.1
    // })
    // gsap.to(".item.i5 .item__bg", {
    //     height: "0%",
    //     ease: "power3.inOut",
    //     delay: 2.1
    // })



    gsap.to(".item.i1 .item__inner", {
      opacity: 1,
      delay: 0.6,
      y: 0
    });
    gsap.to(".item.i7 .item__inner", {
      opacity: 1,
      delay: 0.9,
      y: 0
    });
    gsap.to(".item.i9 .item__inner", {
      opacity: 1,
      delay: 1.2,
      y: 0
    });
    gsap.to(".item.i5 .item__inner", {
      opacity: 1,
      delay: 1.5,
      y: 0
    });
    gsap.to(".item.i3 .item__inner", {
      opacity: 1,
      delay: 1.8,
      y: 0
    });
    gsap.to(".item.i4 .item__inner", {
      opacity: 1,
      delay: 1.8,
      y: 0
    });
    gsap.to(".item.i15 .item__inner", {
      opacity: 1,
      delay: 2.1,
      y: 0
    });
    gsap.to(".item.i16 .item__inner", {
      opacity: 1,
      delay: 2.1,
      y: 0
    });

    const linkClickHandler = (linkSelector, destination, 새창여부 = false) => {
      document.querySelector(linkSelector).addEventListener('click', (event) => {
        event.preventDefault(); // 링크의 기본 동작 방지
    
        gsap.to(".item__bg", {
          height: "100%",
          ease: "power3.inOut",
          onComplete: () => {
            // 애니메이션이 완료된 후 링크로 이동
            if (새창여부) {
              window.open(destination, '_blank'); // 새 창에서 링크 열기
            } else {
              window.location.href = destination; // 현재 창에서 링크 열기
            }
          },
        });
      });
    };
    
    // 각 링크에 대해 함수 호출하여 목적지 설정
    linkClickHandler(".item.i1 li:nth-child(1) a", "/gsap");
    linkClickHandler(".item.i1 li:nth-child(2) a", "/quiz");
    linkClickHandler(".item.i1 li:nth-child(3) a", "/search");
    linkClickHandler(".item.i3", "/");
    linkClickHandler(".item.i4", "/quiz");
    linkClickHandler(".item.i15", "https://github.com/jinhomun/GSAP-Parallax-Effect", true); // 새 창에서 열기
    linkClickHandler(".item.i16", "https://jinhomun.github.io/webs2024/javascript/gsap/gsap01.html", true); // 새 창에서 열기

  }, []);
  return (
    <>
      <div id="item__wrap2" class="fixed">
        <div className="item i1 title">
          <div className="item__inner">
            <div className="list">
              <ul>
                <li className="active"><a href="/gsap">1</a></li>
                <li><a href="/quiz">2</a></li>
                <li><a href="/search">3</a></li>
              </ul>
            </div>
            <h2>gsap</h2>
          </div>
          <div className='item__bg'></div>
        </div>
        <div className="item i2">
          <div className="item__inner"></div>
          <div className="item__bg"></div>
        </div>
        <div className="item i3 home" href="/">
          <div className="item__inner">
           
              <p>HOME</p>
              <img src={arrow} alt="화살표"></img>
            
          </div>
          <div className="item__bg"></div>
        </div>
        <div className="item i4 noR home" href="quiz">
          <div className="item__inner">
            
              <p>QUIZ</p>
              <img src={arrow} alt="화살표"></img>
            
          </div>
          <div className="item__bg"></div>
        </div>
        <div className="item i5 skill">
          <div className="item__inner">
            <h3>skill</h3>
            <p className="desc">
              VSC와 JavaScript, HTML, CSS, GSAP, Git를 활용.
            </p>
          </div>
          <div className="item__bg"></div>
        </div>
        <div className="item i6">
          <div className="item__inner"></div>
          <div className="item__bg"></div>
        </div>
        <div className="item i7 noR img">
          <div className="item__inner">
            <img src={imgGsap} alt="gsap01" />
          </div>
          <div className="item__bg"></div>
        </div>
        <div className="item i8">
          <div className="item__inner"></div>
          <div className="item__bg"></div>
        </div>
        <div className="item i9 black">
          <div className="item__inner">
            <p className="desc">
              GSAP(또는 GreenSock Animation Platform)은 웹 애니메이션을 구축하는 데 사용되는 강력한 JavaScript 라이브러리 중 하나입니다. GSAP은 다양한
              애니메이션 효과를 구현하는 데 도움이 되며,
              그 중에서도 "Parallax"는 특정 요소가 스크롤됨에 따라 다르게 움직이는 효과를 지칭합니다.
              "Parallax"는 여러 요소가 서로 다른 속도로 움직이는 효과를 나타내는 디자인 기법입니다.
              GSAP을 사용하여 Parallax 효과를 만들 수 있습니다.
              애니메이션 기본 효과, Pin 애니메이션, 배경 고정시키기 ,이질감 효과 ,나타나기 효과,
              텍스트 효과,배경색 효과, 진행바 효과,메뉴 이동 효과,메뉴 축소 효과,
              메뉴 숨기기 효과,가로 효과,가로 세로 효과,나타나기 효과 ,스무스 효과
            </p>
          </div>
          <div className="item__bg"></div>
        </div>
        <div className="item i10 noB">
          <div className="item__inner"></div>
          <div className="item__bg"></div>
        </div>
        <div className="item i11">
          <div className="item__inner"></div>
          <div className="item__bg"></div>
        </div>
        <div className="item i12 noR">
          <div className="item__inner"></div>
          <div className="item__bg"></div>
        </div>
        <div className="item i13 noB">
          <div className="item__inner"></div>
          <div className="item__bg"></div>
        </div>
        <div className="item i14 noB">
          <div className="item__inner"></div>
          <div className="item__bg"></div>
        </div>
        <div className="item i15 noB title" href="https://github.com/jinhomun/GSAP-Parallax-Effect">
          
              <div className="item__inner">
                <h3>code view</h3>
                  <p className="desc">
                    skill를 이용하여 만든 소스를
                    깃을 통해 볼 수 있습니다.
                  </p>
              </div>
           
          <div className="item__bg"></div>
        </div>
        <div className="item i16 noR noB title" href="https://jinhomun.github.io/webs2024/javascript/gsap/gsap01.html">
       
            <div className="item__inner">
              <h3>site view</h3>
                <p className="desc">
                  깃에 올린 사이트를 직접 볼 수 있습니다.
                </p>
            </div>
          
          <div className="item__bg"></div>
         
        </div>
      </div>
    </>
  )
}

export default Gsap