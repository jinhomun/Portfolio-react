import React, { useEffect } from 'react'
import gsap from 'gsap';

import arrow from '../assets/img/Arrow11.svg'
import imgAboutme from '../assets/img/about1.png'
import insta from '../assets/img/insta.svg'
import github from '../assets/img/github.svg'
import mail from '../assets/img/mail.svg'
import comment from '../assets/img/comment.svg'

const Aboutme = () => {
    useEffect(() => {

        gsap.set(".item.i16 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i1 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i14 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i8 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i12 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i13 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i4 .item__inner", {
            opacity: 0,
            y: 30
        });





        gsap.to(".item.i16 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 0.3
        });
        gsap.to(".item.i1 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 0.6
        })
        gsap.to(".item.i14 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 0.9
        })
        gsap.to(".item.i8 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 1.2
        })
        gsap.to(".item.i12 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 1.5
        });
        gsap.to(".item.i13 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 1.5
        })
        gsap.to(".item.i4 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 1.7
        })
        // gsap.to(".item.i16 .item__bg", {
        //     height: "0%",
        //     ease: "power3.inOut",
        //     delay: 1.7
        // })
        // gsap.to(".item.i6 .item__bg", {
        //     height: "0%",
        //     ease: "power3.inOut",
        //     delay: 1.9
        // })
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



        gsap.to(".item.i16 .item__inner", {
            opacity: 1,
            delay: 0.6,
            y: 0
        });
        gsap.to(".item.i1 .item__inner", {
            opacity: 1,
            delay: 0.9,
            y: 0
        });
        gsap.to(".item.i14 .item__inner", {
            opacity: 1,
            delay: 1.2,
            y: 0
        });
        gsap.to(".item.i8 .item__inner", {
            opacity: 1,
            delay: 1.5,
            y: 0
        });
        gsap.to(".item.i12 .item__inner", {
            opacity: 1,
            delay: 1.8,
            y: 0
        });
        gsap.to(".item.i13 .item__inner", {
            opacity: 1,
            delay: 1.8,
            y: 0
        });
        gsap.to(".item.i4 .item__inner", {
            opacity: 1,
            delay: 2.1,
            y: 0
        });


        const linkClickHandler = (linkSelector, destination) => {
            document.querySelector(linkSelector).addEventListener('click', (event) => {
                event.preventDefault(); // 링크의 기본 동작 방지

                gsap.to(".item__bg", {
                    height: "100%",
                    ease: "power3.inOut",
                    onComplete: () => {
                        // 애니메이션이 완료된 후 링크로 이동
                        window.location.href = destination;
                    },
                });
            });
        };

        // ...

        linkClickHandler("#item__wrap3 .item.i4 a", "/");
        linkClickHandler("#item__wrap3 .item.i13 a:nth-of-type(1)", "/contact");
        linkClickHandler("#item__wrap3 .item.i13 a:nth-of-type(2)", "https://github.com/jinhomun");
        linkClickHandler("#item__wrap3 .item.i13 a:nth-of-type(3)", "mailto:answlsgh95@gmail.com");
        linkClickHandler("#item__wrap3 .item.i13 a:nth-of-type(4)", "https://www.instagram.com/coding_jinho/");

    }, []);
    return (
        <>
            <div id="item__wrap3" className="fixed">
                <div className="item i1 black__img">
                    <div className="item__inner">
                        <img src={imgAboutme} alt="이미지" />
                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i2">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i3">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i4 noR home">
                    <div className="item__inner">
                        <a href="/">
                            <p>HOME</p>
                            <img src={arrow} alt="화살표"></img>
                        </a>
                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i5">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i6">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i7 noR img">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i8 noR title">
                    <div className="item__inner">
                        <h3>PASSION</h3>
                        <p className="desc">
                            새로운 기술에 대한 열린 마음과 지속적인 학습의지를 가지고 있어, 새로운 도전에 대한 준비가 되어 있습니다.
                            저의 포트폴리오를 통해 더 자세한 정보를 확인하실 수 있습니다.
                            함께 일하고 성장하는 기회가 있다면 기쁘게 참여하겠습니다.
                        </p>
                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i9">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i10">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i11">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i12 noR title">
                    <div className="item__inner">
                        <h3>try</h3>
                        <p className="desc">
                            풍부한 경험과 깊은 관심을 토대로, 현대적이고 사용자 친화적인 웹 애플리케이션을 만들기 위해 노력하고 있습니다.
                            전공에서 얻은 지식과 실무 경험을 바탕으로, 사용자 경험을 최적화하고 최신 웹 개발 동향을 따라가며
                            항상 성장하고자 노력하고 있습니다.</p>
                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i13 noB icon">
                    <div className="item__inner">
                        <a href="/contact">
                            <img src={comment} alt="" />
                        </a>
                        <a href="https://github.com/jinhomun">
                            <img src={github} alt="" />
                        </a>
                        <a href="mailto:answlsgh95@gmail.com">
                            <img src={mail} alt="" />
                        </a>
                        <a href="https://www.instagram.com/coding_jinho/">
                            <img src={insta} alt="" />
                        </a>
                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i14 noB title">
                    <div className="item__inner">
                        <a className="pageLink" href="contact.html">
                            <h3>CONTACT ME</h3>
                            <p className="desc">안녕하세요!
                                저는 열정적이고 창의적인 프론트엔드 개발자 문진호 입니다.</p>
                        </a>
                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i15 noB title">
                    <div className="item__inner">
                        {/* <!-- <h3>code view</h3>
            <p className="desc">
                skill를 이용하여 만든 소스를
                깃을 통해 볼 수 있습니다.
            </p> --> */}
                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i16 noR noB title">
                    <div className="item__inner">
                        <h2>about me</h2>
                    </div>
                    <div className="item__bg"></div>
                </div>
            </div>
        </>
    )
}

export default Aboutme