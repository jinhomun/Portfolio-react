import React, { useEffect } from 'react'
import gsap from 'gsap';

import arrow from '../assets/img/Arrow11.svg'
import imgMovie1 from '../assets/img/movie1.png'
import imgMovie2 from '../assets/img/movie2.png'
import imgMovie3 from '../assets/img/movie3.png'
import SliderScript from '../assets/script/SliderScript'

import "../assets/scss/section/_work.scss"

const Movie = () => {
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

        // // Call the linkClickHandler function for each link with the correct destination
        linkClickHandler(".item.i1 li:nth-child(1) a", "/gyobok");
        linkClickHandler(".item.i1 li:nth-child(2) a", "/youtube");
        linkClickHandler(".item.i1 li:nth-child(3) a", "/movie");
        linkClickHandler(".item.i3", "/");
        linkClickHandler(".item.i4", "/gyobok");
        linkClickHandler(".item.i15", "https://github.com/jinhomun/OnMovie-site",true);
        linkClickHandler(".item.i16", "https://moviesite-vue-jinho.netlify.app/",true);

        // ...

    }, []);
    return (
        <>
            <div id="item__wrap2" class="fixed">
                <div className="item i1 title">
                    <div className="item__inner">
                        <ul>
                            <li><a href="/gyobok">1</a></li>
                            <li><a href="/youtube">2</a></li>
                            <li className="active"><a href="/movie">3</a></li>
                        </ul>
                        <h2 className="long">movie site</h2>
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
                <div className="item i4 noR home" href="/gyobok">
                    <div className="item__inner">
                        
                            <p>GYOBOK.S</p>
                            <img src={arrow} alt="화살표"></img>
                        
                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i5 skill">
                    <div className="item__inner">
                        <h3>skill</h3>
                        <p className="desc">
                            Movie사이트는 VSC와 HTML, VITE, Vue.js, Sass,API, Netlify, Postman ,Git을 활용
                        </p>
                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i6">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i7 img">
                    <div className="item__inner">
                        <SliderScript />
                        <div className="sliderWrap">
                            <div className="slider">
                                <img src={imgMovie1} alt="movie01" />
                            </div>
                            <div className="slider">
                                <img src={imgMovie2} alt="movie02" />
                            </div>
                            <div className="slider">
                                <img src={imgMovie3} alt="movie03" />
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
                    <div className="item__inner">
                        <p className="desc">
                            vue.js를 이용해서 ON MOVIE라는 사이트를 만들었습니다.<br />
                            ON movie는 영화 팬들을 위한 완벽한 플랫폼입니다.<br />
                            우리는 수많은 영화 데이터베이스를 통합하여 여러 소스의 정보를 한 곳에서 손쉽게 찾아볼 수 있게 했습니다.<br />
                            최신 영화 소식, 평점, 리뷰, 예고편, 그리고 더 많은 콘텐츠를 여기서 만나보세요!<br />
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
                <div className="item i15 noB title" href="https://github.com/jinhomun/OnMovie-site">
                    
                        <div className="item__inner">
                            <h3>code view</h3>
                                <p className="desc">
                                    skill를 이용하여 만든 소스를
                                    깃을 통해 볼 수 있습니다.
                                </p>
                        </div>
                   
                    <div className="item__bg"></div>
                </div>
                <div className="item i16 noR noB title" href="https://moviesite-vue-jinho.netlify.app/">
                 
                        <div className="item__inner">
                            <h3>site view</h3>
                            
                                <p className="desc">
                                    netrify에 올린 파일을 직접 볼 수 있습니다.
                                </p>
                            
                        </div>
                   
                    <div className="item__bg"></div>
                </div>
            </div>
        </>
    )
}

export default Movie