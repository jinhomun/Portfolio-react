// SliderScript.js
import { useEffect } from 'react';

const SliderScript = () => {
    useEffect(() => {
        // 이미지 슬라이드를 위한 변수 설정
        var slideIndex = 0;
        showSlides();

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("slider");

            // 모든 이미지를 숨김
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            // 다음 이미지를 보여줌
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = "block";

            // 2초마다 슬라이드 변경
            setTimeout(showSlides, 3000);
        }
    }, []); // useEffect가 한 번만 실행되도록 빈 의존성 배열 사용

    return null; // 이 컴포넌트는 아무것도 렌더링하지 않으므로 null 반환
};

export default SliderScript;