import React, { useEffect } from 'react'
import gsap from 'gsap';
import RepleList from '../components/reple/RepleList'
import RepleWrite from '../components/reple/RepleWrite'

import insta from '../assets/img/insta.svg'
import github from '../assets/img/github.svg'
import mail from '../assets/img/mail.svg'
import comment from '../assets/img/comment.svg'
import arrow from '../assets/img/Arrow11.svg'

import "../assets/scss/section/_contact.scss"

const Contact = () => {
    useEffect(() => {
        const hideScrollbar = () => {
            const isBgAtTop = gsap.getProperty(".item.i5 .item__bg", "height") === "100%";
            const itemInner = document.querySelector(".item.i5 .item__inner");

            // item__inner의 클래스를 높이에 따라 토글합니다.
            if (itemInner) {
                itemInner.classList.toggle('scrollable', !isBgAtTop);
            }
        };

        gsap.to(".item.i5 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 0.6,
            onComplete: hideScrollbar,
        });

        gsap.set(".item.i1 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i5 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i7 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i15 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i4 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i3 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i14 .item__inner", {
            opacity: 0,
            y: 30
        });





        gsap.to(".item.i1 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 0.3
        });
        gsap.to(".item.i5 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            overflowY: "hidden", // Corrected property name
            delay: 0.6
        });
        gsap.to(".item.i7 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 0.9
        })
        gsap.to(".item.i15 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 1.2
        })
        gsap.to(".item.i4 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 1.5
        });
        gsap.to(".item.i3 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 1.5
        })
        gsap.to(".item.i14 .item__bg", {
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



        gsap.to(".item.i1 .item__inner", {
            opacity: 1,
            delay: 0.6,
            y: 0
        });
        gsap.to(".item.i5 .item__inner", {
            opacity: 1,
            delay: 0.9,
            y: 0
        });
        gsap.to(".item.i7 .item__inner", {
            opacity: 1,
            delay: 1.2,
            y: 0
        });
        gsap.to(".item.i15 .item__inner", {
            opacity: 1,
            delay: 1.5,
            y: 0
        });
        gsap.to(".item.i4 .item__inner", {
            opacity: 1,
            delay: 1.8,
            y: 0
        });
        gsap.to(".item.i3 .item__inner", {
            opacity: 1,
            delay: 1.8,
            y: 0
        });
        gsap.to(".item.i14 .item__inner", {
            opacity: 1,
            delay: 2.1,
            y: 0
        });




        // gsap를 작동하지 않도록 할 링크 선택자를 배열로 저장
        const excludedLinks = [
            "#item__wrap4 .item.i3 a:nth-of-type(2)",
            "#item__wrap4 .item.i3 a:nth-of-type(3)",
            "#item__wrap4 .item.i3 a:nth-of-type(4)",
        ];

        const linkClickHandler = (linkSelector, destination, 새창여부 = false) => {
            const linkElement = document.querySelector(linkSelector);

            // gsap를 작동하지 않도록 할 링크인지 확인
            const isExcluded = excludedLinks.includes(linkSelector);

            linkElement.addEventListener('click', (event) => {
                event.preventDefault(); // 링크의 기본 동작 방지

                if (!isExcluded) {
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
                } else {
                    // gsap를 작동하지 않도록 할 링크일 경우 바로 링크 이동
                    if (새창여부) {
                        window.open(destination, '_blank');
                    } else {
                        window.location.href = destination;
                    }
                }
            });
        };

        // ...

        linkClickHandler("#item__wrap4 .item.i4", "/");
        linkClickHandler("#item__wrap4 .item.i3 a:nth-of-type(1)", "/contact");
        linkClickHandler("#item__wrap4 .item.i3 a:nth-of-type(2)", "https://github.com/jinhomun", true);
        linkClickHandler("#item__wrap4 .item.i3 a:nth-of-type(3)", "mailto:answlsgh95@gmail.com", true);
        linkClickHandler("#item__wrap4 .item.i3 a:nth-of-type(4)", "https://www.instagram.com/coding_jinho/", true);




    }, []);

    return (
        <>
            <div id="item__wrap4" className="fixed">
                <div className="item i1 black title">
                    <div className="item__inner">
                        <h2>Contact</h2>
                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i2">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i3 icon">
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
                <div className="item i4 home" href="/">
                    <div className="item__inner">

                        <p>HOME</p>
                        <img src={arrow} alt="화살표"></img>

                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i5 comment">
                    <div className="list">
                        <div className="item__inner">
                            <h3>COMMENT LIST</h3>
                            <RepleList />
                        </div>
                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i6">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i7 commentinfo">
                    <div className="item__inner">
                        <h3>COMMENT</h3>
                        <RepleWrite />

                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i8">
                    <div className="item__inner"></div>
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
                <div className="item i12">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i13 noB">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i14">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i15 contact">
                    <div className="item__inner">
                        {/* <h3>CONTACT</h3>
                        <form method="POST" action="https://formspree.io/answlsgh95@gmail.com">
                            <input type="text" name="username" placeholder="Your Name" />
                            <input type="email" name="email" placeholder="Your Email" />
                            <input className="message" name="message" placeholder="Message" />
                            <button type="submit">전송</button>
                        </form> */}
                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i16">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>
            </div>
        </>
    )
}

export default Contact