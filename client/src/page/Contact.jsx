import React, { useEffect } from 'react'
import gsap from 'gsap';
import RepleList from '../components/reple/RepleList'
import RepleWrite from '../components/reple/RepleWrite'

import insta from '../assets/img/insta.svg'
import github from '../assets/img/github.svg'
import mail from '../assets/img/mail.svg'
import comment from '../assets/img/comment.svg'
import arrow from '../assets/img/Arrow11.svg'

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

        linkClickHandler("#item__wrap4 .item.i4 a", "/");
        linkClickHandler("#item__wrap4 .item.i3 a:nth-of-type(1)", "/contact");
        linkClickHandler("#item__wrap4 .item.i3 a:nth-of-type(2)", "https://github.com/jinhomun");
        linkClickHandler("#item__wrap4 .item.i3 a:nth-of-type(3)", "mailto:answlsgh95@gmail.com");
        linkClickHandler("#item__wrap4 .item.i3 a:nth-of-type(4)", "https://www.instagram.com/coding_jinho/");


    }, []);
    return (
        <>
            <div id="item__wrap4" className="fixed">
                <div className="item i1 black title">
                    <div className="item__inner">
                        <h2>Contact me</h2>
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
                <div className="item i4 home">
                    <div className="item__inner">
                        <a href="/">
                            <p>HOME</p>
                            <img src={arrow} alt="화살표"></img>
                        </a>
                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i5 comment">
                    <div className="item__inner">
                        <h3>COMMENT LIST</h3>
                        <RepleList />

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