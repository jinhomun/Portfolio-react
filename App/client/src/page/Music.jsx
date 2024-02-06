import React, { useEffect } from "react";
import gsap from "gsap";

import imgMusic1 from "../assets/img/music01.png";
import imgMusic2 from "../assets/img/music02.png";
import imgMusic3 from "../assets/img/music03.png";
import arrow from "../assets/img/Arrow11.svg";

import SliderScript from "../assets/script/SliderScript";

import Promdesc from "../components/desc/Promdesc";
import Musicdesc from "../components/desc/Musicdesc";

const Music = () => {
  useEffect(() => {
    gsap.set(".item.i1 .item__inner", {
      opacity: 0,
      y: 30,
    });
    gsap.set(".item.i7 .item__inner", {
      opacity: 0,
      y: 30,
    });
    gsap.set(".item.i9 .item__inner", {
      opacity: 0,
      y: 30,
    });
    gsap.set(".item.i5 .item__inner", {
      opacity: 0,
      y: 30,
    });
    gsap.set(".item.i3 .item__inner", {
      opacity: 0,
      y: 30,
    });
    gsap.set(".item.i4 .item__inner", {
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

    gsap.to(".item.i1 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 0.3,
    });
    gsap.to(".item.i7 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 0.6,
    });
    gsap.to(".item.i9 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 0.9,
    });
    gsap.to(".item.i5 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 1.2,
    });
    gsap.to(".item.i3 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 1.5,
    });
    gsap.to(".item.i4 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 1.5,
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
    gsap.to(".item.i6 .item__bg", {
      height: "0%",
      ease: "power3.inOut",
      delay: 1.9,
    });
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
      y: 0,
    });
    gsap.to(".item.i7 .item__inner", {
      opacity: 1,
      delay: 0.9,
      y: 0,
    });
    gsap.to(".item.i9 .item__inner", {
      opacity: 1,
      delay: 1.2,
      y: 0,
    });
    gsap.to(".item.i5 .item__inner", {
      opacity: 1,
      delay: 1.5,
      y: 0,
    });
    gsap.to(".item.i3 .item__inner", {
      opacity: 1,
      delay: 1.8,
      y: 0,
    });
    gsap.to(".item.i4 .item__inner", {
      opacity: 1,
      delay: 1.8,
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
    gsap.to(".item.i6 .item__inner", {
      opacity: 1,
      delay: 2.1,
      y: 0,
    });

    // gsap를 작동하지 않도록 할 링크 선택자를 배열로 저장
    const excludedLinks = [".item.i15", ".item.i16"];

    const linkClickHandler = (linkSelector, destination, 새창여부 = false) => {
      const linkElement = document.querySelector(linkSelector);

      // gsap를 작동하지 않도록 할 링크인지 확인
      const isExcluded = excludedLinks.includes(linkSelector);

      linkElement.addEventListener("click", (event) => {
        event.preventDefault(); // 링크의 기본 동작 방지

        if (!isExcluded) {
          gsap.to(".item__bg", {
            height: "100%",
            ease: "power3.inOut",
            onComplete: () => {
              // 애니메이션이 완료된 후 링크로 이동
              if (새창여부) {
                window.open(destination, "_blank"); // 새 창에서 링크 열기
              } else {
                window.location.href = destination; // 현재 창에서 링크 열기
              }
            },
          });
        } else {
          // gsap를 작동하지 않도록 할 링크일 경우 바로 링크 이동
          if (새창여부) {
            window.open(destination, "_blank");
          } else {
            window.location.href = destination;
          }
        }
      });
    };

    // // Call the linkClickHandler function for each link with the correct destination

    linkClickHandler(".item.i1 li:nth-child(1) a", "/youtube");
    linkClickHandler(".item.i1 li:nth-child(2) a", "/movie");
    linkClickHandler(".item.i1 li:nth-child(3) a", "/promptopia");
    linkClickHandler(".item.i1 li:nth-child(4) a", "/music");
    linkClickHandler(".item.i3", "/");
    linkClickHandler(".item.i4", "/youtube");
    linkClickHandler(".item.i6", "/contact");
    linkClickHandler(
      ".item.i15",
      "https://github.com/jinhomun/project_music_player",
      true
    );
    linkClickHandler(
      ".item.i16",
      "https://project-music-player-moon.netlify.app/",
      true
    );
    // ...
  }, []);
  return (
    <>
      <div id="item__wrap2" className="fixed">
        <div className="item i1 title">
          <div className="item__inner">
            <ul>
              <li><a href="/youtube">1</a></li>
              <li><a href="/movie">2</a></li>
              <li><a href="/promptopia">3</a></li>
              <li className="active"><a href="/music">4</a></li>
            </ul>
            <h2 className="long">MusicPlay</h2>
          </div>
          <div className="item__bg"></div>
        </div>
        <div className="item i2">
          <div className="item__inner"></div>
          <div className="item__bg"></div>
        </div>
        <div className="item i3 home">
          <div className="item__inner" href="/">
            <p>HOME</p>
            <img src={arrow} alt="화살표"></img>
          </div>
          <div className="item__bg"></div>
        </div>
        <div className="item i4 noR home" href="/youtube">
          <div className="item__inner">
            <p>Youtube</p>
            <img src={arrow} alt="화살표"></img>
          </div>
          <div className="item__bg"></div>
        </div>
        <div className="item i5 skill">
          <div className="item__inner">
            <h3>skill</h3>
            <p className="desc">
              MusicPlay에서 React와 RapidApi, tailwindcss을 활용
            </p>
          </div>
          <div className="item__bg"></div>
        </div>
        <div className="item i6 title" href="/contact">
          <div className="item__inner">
            <h3>CONTACT ME</h3>
            <p className="desc">궁금하신점이 있으면 남겨주세요!</p>
          </div>
          <div className="item__bg"></div>
        </div>
        <div className="item i7 img">
          <div className="item__inner">
            <SliderScript />
            <div className="sliderWrap">
              <div className="slider">
                <img src={imgMusic1} alt="Music1" />
              </div>
              <div className="slider">
                <img src={imgMusic2} alt="Music2" />
              </div>
              <div className="slider">
                <img src={imgMusic3} alt="Music3" />
              </div>
            </div>
          </div>
          <div className="item__bg"></div>
        </div>
        <div className="item i8">
          <div className="item__inner"></div>
          <div className="item__bg"></div>
        </div>
        <div className="item i9 black">
          <Musicdesc />
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
        <div
          className="item i15 noB title"
          href="https://github.com/jinhomun/project_music_player"
        >
          <div className="item__inner">
            <h3>code view</h3>
            <p className="desc">
              skill를 이용하여 만든 소스를 깃을 통해 볼 수 있습니다.
            </p>
          </div>

          <div className="item__bg"></div>
        </div>
        <div
          className="item i16 noR noB title"
          href="https://project-music-player-moon.netlify.app/"
        >
          <div className="item__inner">
            <h3>site view</h3>
            <p className="desc">netlify에 올린 사이트를 직접 볼 수 있습니다.</p>
          </div>

          <div className="item__bg"></div>
        </div>
      </div>
    </>
  );
};

export default Music;
