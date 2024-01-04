import React, { useEffect } from 'react'
import gsap from 'gsap';
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark.css";


import arrow from '../assets/img/Arrow11.svg'
import imgGyobok1 from '../assets/img/gyobok1.png'
import imgGyobok2 from '../assets/img/gyobok2.png'
import imgGyobok3 from '../assets/img/gyobok3.png'
import imgGyobok4 from '../assets/img/gyobok4.png'
import SliderScript from '../assets/script/SliderScript'


import "../assets/scss/section/_work.scss"

const Gyobok = () => {

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
        linkClickHandler(".item.i4", "/youtube");
        linkClickHandler(".item.i15", "https://github.com/jinhomun/Gogyobok-site", true);
        linkClickHandler(".item.i16", "https://github.com/jinhomun/Gogyobok-site", true);
        // ...

    }, []);
    return (
        <>
            <div id="item__wrap2" className="fixed">
                <div className="item i1 title">
                    <div className="item__inner">
                        <ul>
                            <li className="active"><a href="/gyobok">1</a></li>
                            <li><a href="/youtube">2</a></li>
                            <li><a href="/movie">3</a></li>
                        </ul>
                        <h2 className="long">gyobok site</h2>
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

                        <p>YOUTUBE</p>
                        <img src={arrow} alt="화살표"></img>

                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i5 skill">
                    <div className="item__inner">
                        <h3>skill</h3>
                        <p className="desc">
                            교복사이트 프로젝트에서 PHP와 Mysql, json, javascript을 활용
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
                                <img src={imgGyobok1} alt="gyobok01" />
                            </div>
                            <div className="slider">
                                <img src={imgGyobok2} alt="gyobok02" />
                            </div>
                            <div className="slider">
                                <img src={imgGyobok3} alt="gyobok03" />
                            </div>
                            <div className="slider">
                                <img src={imgGyobok4} alt="gyobok04" />
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
                    <div className="list">
                        <div className="item__inner">
                            <p className="desc">
                                전국에 있는 고등학교 교복을 모아둔 교복소개 사이트 입니다.<br />
                                "왜 청소년을 위한 커뮤니티는 없을까?" 라는 생각에서 진행하게 된 프로젝트입니다!<br />
                                학교에서 얻을 수 없는 독특한 정보를 제공하고자, <br />
                                전국 고등학교의 교복을 소개하는 커뮤니티 사이트를 제작하였습니다.<br />
                                전국의 교복을 구경하며 좋아요,싫어요 버튼을 누를수 있고, 그에 대한 평가는 댓글로도 자유롭게 논할 수 있습니다.<br />
                                해당 학교의 교복을 각 조회수, 좋아요, 싫어요 순으로 순위를 확인할 수 있습니다.<br />
                                또, "수다방" 커뮤니티에서 학생들만의 이야기로 수다의 꽃을 피울 수 있습니다!<br />
                            </p>
                        </div>
                        <div className="item__inner">
                            <p className="desc">
                                Design<br />

                                1. HEADER<br />
                                - 메인 컬러 : #1976DE, 서브 컬러 : black, white, #D2E7FF<br />
                                - 로고 : 롯데리아 촵땡겨체(LotteriaChab)<br />
                                - 메뉴 : 롯데리아 딱붙어체(LotteriaDdag)<br />
                                <br />
                                2. MAIN<br />
                                - Main Visual<br />
                                1) 애니메이션 교실 배경 이미지<br />
                                2) 메인 문구 폰트 : Londrina Solid 구글 폰트<br />
                                3) 서브 폰트 : 샌드박스 어그로체<br />
                                - Main Section<br />
                                1) 메인 폰트 : 샌드박스 어그로체<br />
                                2) 서브 폰트 : 롯데리아 딱붙어체(LotteriaDdag)<br />
                                <br />
                                3. SUB<br />
                                - 상단 배너 이미지 : 애니메니션 학교 배경, 실사 교복 착용 화보 이미지<br />
                                1) 전체 폰트 : 샌드박스 어그로체<br />
                                2) 교복 상세페이지 : 인스타그램 레이아웃 참고<br />
                                <br />
                                4. FOOTER<br />
                                - Black 색상 배경<br />
                                - 전체 폰트 : 샌드박스 어그로체<br />
                            </p>
                        </div>
                        <div className="item__inner">
                            <p className="desc">
                                CODE VIEW<br />
                                MySQL 정보가져오기<br />
                                <Highlight className="php">
                                    {`<?php
include "../connect/connect.php";
include "../connect/session.php";

// SQL 쿼리 생성
$sql = "SELECT introId, introComment, introView FROM Intro";

// MySQL에서 데이터 가져오기
$result = mysqli_query($connect, $sql);

// introId 및 introComment 값을 저장할 배열 생성
$introData = [];

if ($result) {
    while ($row = mysqli_fetch_assoc($result)) {
        $introData[] = [
            'introId' => $row['introId'],
            'introComment' => $row['introComment'],
            'introView' => $row['introView']
        ];
    }
} else {
    echo "데이터를 가져오는 중에 오류가 발생했습니다.";
}

// PHP 배열을 JavaScript 배열로 출력
echo '<script>let introData = ' . json_encode($introData) . ';</script>';
?>`}
                                </Highlight>
                            </p>
                        </div>
                        <div className="item__inner">
                            <p className="desc">
                                <Highlight className="javascript">
                                    {`// 정보 가져오기
    const fetchgGobok = (selectedRegion = '') => {
        fetch("https://raw.githubusercontent.com/jinhomun/webs2024/main/blog_phpJSON/gobok.json")
            .then(res => res.json())
            .then(items => {
                gobokInfo = items.map((item, index) => {
                    return {
                        infoRegion: item.region,
                        infoName: item.school,
                        infoUniformtypes: item.uniform_types,
                        infoUniformimg: item.uniform_img
                    };
                });

                if (selectedRegion && selectedRegion !== '지역별') {
                    // 선택된 지역에 해당하는 교복 정보만 필터링
                    gobokInfo = gobokInfo.filter(gobok => gobok.infoRegion === selectedRegion);
                }

                updateGobok(gobokInfo); // 필터링된 정보로 교복 정보 업데이트


            });
    }
`}
                                </Highlight>
                            </p>
                        </div>
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
                <div className="item i15 noB title" href="https://github.com/jinhomun/Gogyobok-site">

                    <div className="item__inner">
                        <h3>code view</h3>
                        <p className="desc">
                            skill를 이용하여 만든 소스를
                            깃을 통해 볼 수 있습니다.
                        </p>
                    </div>

                    <div className="item__bg"></div>
                </div>
                <div className="item i16 noR noB title" href="https://github.com/jinhomun/Gogyobok-site">

                    <div className="item__inner">
                        <h3>site view</h3>
                        <p className="desc">
                            깃에 올린 파일을 직접 볼 수 있습니다.
                        </p>
                    </div>

                    <div className="item__bg"></div>
                </div>
            </div>
        </>
    )
}

export default Gyobok