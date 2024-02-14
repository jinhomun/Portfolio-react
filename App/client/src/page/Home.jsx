import React, { useEffect } from "react";
import gsap from "gsap";
// img
import KOR from "../assets/img/KOR.png";
import "../assets/scss/section/_main.scss";

const Home = () => {
  useEffect(() => {
    gsap.set(".item.i3 .item__inner", {
      opacity: 0,
      y: 30,
    });
    gsap.set(".item.i6 .item__inner", {
      opacity: 0,
      y: 30,
    });
    gsap.set(".item.i9 .item__inner", {
      opacity: 0,
      y: 30,
    });
    gsap.set(".item.i7 .item__inner", {
      opacity: 0,
      y: 30,
    });
    gsap.set(".item.i1 .item__inner", {
      opacity: 0,
      y: 30,
    });
    gsap.set(".item.i11 .item__inner", {
      opacity: 0,
      y: 30,
    });
    gsap.set(".item.i12 .item__inner", {
      opacity: 0,
      y: 30,
    });
    gsap.set(".item.i15 .item__inner", {
      opacity: 0,
      y: 30,
    });
    gsap.set(".item.i16 .item__inner", {
      opacity: 0,
      y: 30,
    });
    gsap.set(".item.i10 .item__inner", {
      opacity: 0,
      y: 30,
    });
    gsap.set(".item.i13 .item__inner", {
      opacity: 0,
      y: 30,
    });

    gsap.to(".item.i3 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 0.3,
    });
    gsap.to(".item.i6 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 0.6,
    });
    gsap.to(".item.i9 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 0.9,
    });
    gsap.to(".item.i7 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 1.2,
    });
    gsap.to(".item.i1 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 1.5,
    });
    gsap.to(".item.i11 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 1.5,
    });
    gsap.to(".item.i12 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 1.7,
    });
    gsap.to(".item.i15 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 1.7,
    });
    gsap.to(".item.i16 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 1.7,
    });
    gsap.to(".item.i10 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 1.9,
    });
    gsap.to(".item.i13 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 1.9,
    });
    gsap.to(".item.i2 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 2.1,
    });
    gsap.to(".item.i4 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 2.1,
    });
    gsap.to(".item.i5 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 2.1,
    });

    gsap.to(".item.i3 .item__inner", {
      opacity: 1,
      delay: 0.6,
      y: 0,
    });
    gsap.to(".item.i6 .item__inner", {
      opacity: 1,
      delay: 0.9,
      y: 0,
    });
    gsap.to(".item.i9 .item__inner", {
      opacity: 1,
      delay: 1.2,
      y: 0,
    });
    gsap.to(".item.i7 .item__inner", {
      opacity: 1,
      delay: 1.5,
      y: 0,
    });
    gsap.to(".item.i1 .item__inner", {
      opacity: 1,
      delay: 1.8,
      y: 0,
    });
    gsap.to(".item.i11 .item__inner", {
      opacity: 1,
      delay: 1.8,
      y: 0,
    });
    gsap.to(".item.i12 .item__inner", {
      opacity: 1,
      delay: 2.1,
      y: 0,
    });
    gsap.to(".item.i15 .item__inner", {
      opacity: 1,
      delay: 2.1,
      y: 0,
    });
    gsap.to(".item.i16 .item__inner", {
      opacity: 1,
      delay: 2.1,
      y: 0,
    });
    gsap.to(".item.i10 .item__inner", {
      opacity: 1,
      delay: 2.3,
      y: 0,
    });
    gsap.to(".item.i13 .item__inner", {
      opacity: 1,
      delay: 2.3,
      y: 0,
    });

    const linkClickHandler = (linkSelector, destination) => {
      const links = document.querySelectorAll(linkSelector);

      if (links.length > 0) {
        links.forEach((link) => {
          link.addEventListener("click", (event) => {
            event.preventDefault();

            gsap.to(".item__bg", {
              height: "100%",
              ease: "power3.inOut",
              onComplete: () => {
                // Use window.location.pathname to navigate
                window.location.pathname = destination;
              },
            });
          });
        });
      }
    };

    // 함수 호출 - 각 링크에 대해 개별적으로 호출
    linkClickHandler(".item.i3 .list li:nth-child(1) a", "/gsap");
    linkClickHandler(".item.i3 .list li:nth-child(2) a", "/quiz");
    linkClickHandler(".item.i3 .list li:nth-child(3) a", "/search");

    linkClickHandler(".item.i6 .list li:nth-child(1) a", "/gyobok");
    linkClickHandler(".item.i6 .list li:nth-child(2) a", "/kickoff");

    linkClickHandler(".item.i9 .list li:nth-child(1) a", "/youtube");
    linkClickHandler(".item.i9 .list li:nth-child(2) a", "/movie");
    linkClickHandler(".item.i9 .list li:nth-child(3) a", "/promtopia");
    linkClickHandler(".item.i9 .list li:nth-child(4) a", "/music");
    linkClickHandler(".item.i9 .list li:nth-child(5) a", "/figma");


    linkClickHandler(".item.i15", "/aboutme");
    linkClickHandler(".item.i16", "/contact");
  }, []);

  return (
    <>
      <div id="item__wrap" className="fixed">
        <div className="item i1 black">
          <div className="item__inner">
            <p className="desc">
              디지털 정보통신을 전공으로 공부하였고, 코로나 시국에 대학교를
              다니면서 나의 적성에 맞는 일을 찾고자 노력을 했습니다. 다니던
              대학교를 졸업하고 국비지원학원에서 약 6개월간의
              여정을시작했습니다.
            </p>
            {/* <h3>dev</h3> */}
          </div>
          <div className="item__bg"></div>
        </div>
        <div className="item i2">
          <div className="item__inner"></div>
          <div className="item__bg"></div>
        </div>
        <div className="item i3 title">
          <div className="item__inner">
            <h3>
              script<em>javascript</em>
            </h3>
            <p className="desc">
              gsap효과, 퀴즈효과, 서치효과까지 자바스크립트를 이용하여
              공부하였으며, 알고리즘을 통하여 깊이를 더하다.
            </p>
            <div className="list">
              <ul>
                <li>
                  <a href="/gsap">1</a>
                </li>
                <li>
                  <a href="/quiz">2</a>
                </li>
                <li>
                  <a href="/search">3</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="item__bg"></div>
        </div>
        <div className="item i4 noR">
          <div className="item__inner"></div>
          <div className="item__bg"></div>
        </div>
        <div className="item i5">
          <div className="item__inner"></div>
          <div className="item__bg"></div>
        </div>
        <div className="item i6 title">
          <div className="item__inner">
            <h3>
              Team<em>coding</em>
            </h3>
            <p className="desc3">
              팀 프로젝트를 통해 협업과 의사소통 능력을 향상시키며 다양한 아이디어를 존중하는 중요성을 깨달았고,
              어려움을 함께 극복하며 팀워크와 문제 해결 능력을 향상시켰습니다.
            </p>
            <div className="list">
              <ul>
                <li>
                  <a href="/gyobok">1</a>
                </li>
                <li>
                  <a href="/kickoff">2</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="item__bg"></div>
        </div>
        <div className="item i7 noR title">
          <div className="item__inner">
            <h2>portfolio</h2>
          </div>
          <div className="item__bg"></div>
        </div>
        <div className="item i8">
          <div className="item__inner"></div>
          <div className="item__bg"></div>
        </div>
        <div className="item i9 title">
          <div className="item__inner">
            <h3>
              work<em>coding</em>
            </h3>
            <p className="desc2">
              1. React와 API를 활용한 YoutubeSite<br />
              2. Vue.js와 API를 활용한 MovieSite<br />
              3. Next.js 활용한 Promptopia<br />
              4. React와 API를 활용한 MusicPlay<br />
              5. Next.js와 fabric.js를 활용한 Figma<br />
            </p>
            <div className="list">
              <ul>
                <li>
                  <a href="/youtube">1</a>
                </li>
                <li>
                  <a href="/movie">2</a>
                </li>
                <li>
                  <a href="/promptopia">3</a>
                </li>
                <li>
                  <a href="/music">4</a>
                </li>
                <li>
                  <a href="/figma">5</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="item__bg"></div>
        </div>
        <div className="item i10 noB left">
          <div className="item__inner">
            <h3>WELCOME</h3>
          </div>
          <div className="item__bg"></div>
        </div>
        <div className="item i11 black__me">
          <div className="item__inner">
            {/* <img src={imgME} alt="이미지" /> */}
          </div>
          <div className="item__bg"></div>
        </div>
        <div className="item i12 noR">
          <div className="item__inner">
            <p className="desc3">
              새로운 기술에 대한 열린 마음과 지속적인 학습의지를 가지고 있어,
              새로운 도전에 대한 준비가 되어 있습니다. 저의 포트폴리오를 통해 더
              자세한 정보를 확인하실 수 있습니다. 함께 일하고 성장하는 기회가
              있다면 기쁘게 참여하겠습니다.
            </p>
          </div>
          <div className="item__bg"></div>
        </div>
        <div className="item i13 noB__kr">
          <div className="item__inner">
            <img src={KOR} alt="태극기" />
            <h3>KOR</h3>
          </div>
          <div className="item__bg"></div>
        </div>
        <div className="item i14 noB">
          <div className="item__inner"></div>
          <div className="item__bg"></div>
        </div>
        <div className="item i15 noB title" href="/aboutme">
          <div className="item__inner">
            <h3>ABOUT ME</h3>
            <p className="desc">
              안녕하세요!
              <br />
              저는 열정적이고 창의적인 프론트엔드 개발자 문진호 입니다
            </p>
          </div>
          <div className="item__bg"></div>
        </div>
        <div className="item i16 noR noB" href="/contact">
          <div className="item__inner">
            <h3>CONTACT ME</h3>
            <p className="desc"></p>
          </div>
          <div className="item__bg"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
