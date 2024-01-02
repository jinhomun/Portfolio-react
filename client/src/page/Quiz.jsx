import React, { useEffect } from 'react'
import gsap from 'gsap';

import arrow from '../assets/img/Arrow11.svg'
import imgQuiz from '../assets/img/quiz1.png'


const Quiz = () => {
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

        const linkClickHandler = (linkSelector, destination) => {
            document.querySelector(linkSelector).addEventListener('click', (event) => {
                event.preventDefault(); // Prevent the default behavior of the link

                gsap.to(".item__bg", {
                    height: "100%",
                    ease: "power3.inOut",
                    onComplete: () => {
                        // Navigate to the link after the animation completes
                        window.location.href = destination;
                    },
                });
            });
        };

        // // Call the linkClickHandler function for each link with the correct destination
        linkClickHandler(".item.i1 li:nth-child(1) a", "/gsap");
        linkClickHandler(".item.i1 li:nth-child(2) a", "/quiz");
        linkClickHandler(".item.i1 li:nth-child(3) a", "/search");
        linkClickHandler(".item.i3 a", "/");
        linkClickHandler(".item.i4 a", "/search");
        linkClickHandler(".item.i15 a", "https://github.com/jinhomun/QuizEffect");
        linkClickHandler(".item.i16 a", "https://jinhomun.github.io/webs2024/javascript/quiz/quizEffect01.html");

        // ...

    }, []);
    return (
        <>
            <div id="item__wrap2" class="fixed">
                <div className="item i1 title">
                    <div className="item__inner">
                        <ul>
                            <li><a href="/gsap">1</a></li>
                            <li className="active"><a href="/quiz">2</a></li>
                            <li><a href="/search">3</a></li>
                        </ul>
                        <h2>quiz</h2>
                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i2">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i3 home">
                    <div className="item__inner">
                        <a href="/">
                            <p>HOME</p>
                            <img src={arrow} alt="화살표"></img>
                        </a>
                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i4 noR home">
                    <div className="item__inner">
                        <a href="/search">
                            <p>SEARCH</p>
                            <img src={arrow} alt="화살표"></img>
                        </a>
                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i5 skill">
                    <div className="item__inner">
                        <h3>skill</h3>
                        <p className="desc">
                            VSC와 JavaScript, HTML, CSS, JSON, Git를 활용.
                        </p>
                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i6">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i7 noR img ">
                    <div className="item__inner">
                        <img src={imgQuiz} alt="quiz01" />
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
                            JSON(JavaScript Object Notation)은 데이터를 표현하기 위한 경량의 데이터 교환 형식입니다.<br />
                            JSON은 사람이 읽고 쓰기 쉽고, 기계가 해석하고 생성하기도 쉽습니다. <br />
                            주로 웹 애플리케이션에서 데이터를 전송하거나 저장하기 위해 사용됩니다.<br />
                            <br />
                            정보처리 기능사, 웹디자인 기능사 필기 JSON 파일을 이용하여, 문제 정보와 정답을 불러오고
                            선택자: querySelector(), querySelectorAll() , 매서드 : innerHTML, classNameList 이벤트 : addEventListener() 를 이용해서 퀴즈를 만들었습니다<br />
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
                <div className="item i15 noB title">
                    <div className="item__inner">
                        <h3>code view</h3>
                        <a href="https://github.com/jinhomun/QuizEffect">
                            <p className="desc">
                                skill를 이용하여 만든 소스를
                                깃을 통해 볼 수 있습니다.
                            </p>
                        </a>
                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i16 noR noB title">
                    <div className="item__inner">
                        <h3>site view</h3>
                        <a href="https://jinhomun.github.io/webs2024/javascript/quiz/quizEffect01.html">
                            <p className="desc">
                                깃에 올린 사이트를 직접 볼 수 있습니다.
                            </p>
                        </a>
                    </div>
                    <div className="item__bg"></div>
                </div>
            </div>
        </>
    )
}

export default Quiz