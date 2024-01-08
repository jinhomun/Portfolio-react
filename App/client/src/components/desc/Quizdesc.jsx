import React from 'react'
import Highlight from 'react-highlight'

const Quizdesc = () => {
  return (
    <div className="list">
                        <div className="item__inner">
                            <p className="desc">
                            자바스크립트의 여러 기능과 메서드를 활용하여  객관식과 주관식 퀴즈를 만들어보았습니다.<br />
                            아래는 퀴즈에서 사용된 주요 개념들입니다.<br />
                            
                            <details>
                                <summary>Method</summary>
                                <Highlight className="javascript"> 
                                - 변수 : 변수는 데이터를 저장하거나 참조하기 위한 메모리 공간의 이름이다.<br />

                                - 배열 : 동일한 데이터 형식의 요소들을 순서대로 저장하는 자료 구조이다.<br />

                                - 객체 :  key-value 쌍으로 구성된 데이터를 저장하는 자료 구조로, 각 key는 고유한 식별자이며, 이에 대응하는 value는 해당 key와 연관된 데이터를 담고 있다.<br />

                                - 익명 함수 : 이름이 없는 함수로, 변수에 할당하여 사용되며 주로 즉시 실행 함수나 콜백 함수 등에서 활용된다.<br />

                                - 매개변수 함수 : 다른 함수에 전달되거나 호출될 때 입력값을 받아들이는 함수이다.<br />

                                - 화살표 함수 : ES6에서 도입된 함수 표현식의 간결한 형태로, 함수를 선언하는 데 사용되며 this의 동작 방식이 일반 함수와 다르다.<br />

                                - querySelector() : 문서 객체 모델에서 특정 CSS 선택자에 해당하는 첫 번째 요소를 반환하는 메서드입니다.<br />

                                - querySelectorAll() : 문서 내에서 특정 CSS 선택자에 해당하는 모든 요소를 NodeList로 반환하는 메서드입니다.<br />

                                - innerText : DOM에서 특정 HTML 요소의 텍스트 콘텐츠를 읽거나 설정하는 속성입니다.<br />

                                - classList.add() : 특정 HTML 요소의 클래스 목록에 새로운 클래스를 추가합니다.<br />

                                - classList.remove() : 특정 HTML 요소의 클래스 목록에서 지정된 클래스를 제거합니다.<br />

                                - addEventListener() :  HTML 요소에 이벤트를 감지하고 해당 이벤트가 발생했을 때 실행할 함수를 등록하는 메서드입니다.<br />

                                - for(): 일반적인 반복문으로, 배열이나 객체 등의 iterable한 자료구조를 반복하며 코드 블록을 실행합니다.<br />

                                - forEach() : 배열의 각 요소에 대해 콜백 함수를 실행하는 배열 메서드입니다. 반복문의 초기화, 조건, 증가 부분을 명시하지 않고, 대신에 각 요소에 대한 로직을 콜백 함수로 전달하여 사용합니다.<br />

                                forEach()는 보다 간결하고 함수형 프로그래밍 스타일에 부합하는 반면, for()는 반복문의 세부 사항을 직접 제어할 수 있어 더 유연한 사용이 가능합니다. <br />

                                - 다중 if 문 : 여러 개의 조건문을 순차적으로 평가하고, 첫 번째로 참이 되는 조건문의 블록을 실행하는 JavaScript 제어 구조입니다.<br />

                                - textContent() : DOM 요소의 속성 중 하나로, 해당 요소의 텍스트 내용을 가져오거나 설정하는 데 사용되는 속성입니다.<br />

                                - trim() : 문자열의 양 끝에서 공백을 제거하는 메서드입니다.<br />

                                - toLowerCase() : 문자열의 모든 문자를 소문자로 변환하는 메서드입니다.<br />
                                
                                - alert() : 브라우저에서 간단한 알림 창을 표시하는 JavaScript 함수입니다.<br />

                                - break() : 반복문이나 switch 문에서 실행을 중단하고 해당 블록을 빠져나오는 JavaScript 키워드입니다.<br />

                                - join(): 배열의 모든 요소를 문자열로 결합하여 반환하는 메서드입니다.<br />

                                - push(): 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환하는 메서드입니다.<br />
                            </Highlight>
                            </details>
                            </p>
                        </div>
                        <div className="item__inner">
                            <p className="desc">
                            <h3>QuizEffect01 & QuizEffect02</h3>
                          
                            <details>
                                <summary>Main.html</summary>
                                <Highlight className="javascript"> 
                                {`<main id="main">
        <div class="quiz__wrap">
            <div class="quiz">
                <div class="quiz__header">
                    <span class="quiz__date"></span>  // 시험년도
                    <span class="quiz__type"></span>  // 시험과목  
                </div>
                <div class="quiz__main">
                    <div class="quiz__question">
                       <em></em>.  // 문제번호
                       <span></span> // 문제내용
                    </div>

                    <div class="quiz__animation">   // 퀴즈 애니메이션 
                        <div class="wrapper">
                            <div class="card-container">
                                <div class="dog">
                                    <div class="head">
                                        <div class="ears"></div>
                                        <div class="face"></div>
                                        <div class="eyes">
                                            <div class="teardrop"></div>
                                        </div>
                                        <div class="nose"></div>
                                        <div class="mouth">
                                            <div class="tongue"></div>
                                        </div>
                                        <div class="chin"></div>
                                    </div>
                                    <div class="body">
                                        <div class="tail"></div>
                                        <div class="legs"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="quiz__input">
                        <input type="text" placeholder="정답을 입력해주세요!">  // 정답 입력 
                    </div>
                    <div class="quiz__answer"></div> // 정답
                    <div class="quiz__desc"></div>  // 정답에 대한 해설
                </div>
                <div class="quiz__footer">
                    <button class="quiz__confirm">정답 확인하기</button> // 정답 확인하기 버튼
                </div>
            </div>
        </div>
    </main>
    <!-- //main --> `}
                            </Highlight>
                            </details>
                            <details>
                            <summary>QuizEffect01 - Script & 설명</summary>
                            <Highlight className="javascript">
                            <br/>
1. 문제 정보 및 선택자 정의: infoDate, infoType, infoNum, infoQuestion, infoAnswer, infoDesc: 문제 정보를 담고 있는 변수들.<br/>
각각의 정보를 웹 페이지에서 특정 요소에 출력하기 위한 선택자들을 정의합니다.<br/>
예를 들어: quizDate = quizWrap.querySelector(".quiz__date"): 이 코드는 quizWrap 내에서 클래스가 "quiz__date"인 첫 번째 자식 요소를 찾아 quizDate 변수에 할당합니다.<br/>
<br/>
2. 문제 출력: 각 선택자를 사용하여 문제 정보를 웹 페이지에 출력합니다.<br/>
innerText는 자식 요소의 숨겨진 텍스트를 포함하여 텍스트 콘텐츠를 반환합니다.<br/>
<br/>
3. 정답 해설 숨기기: 초기에 정답과 해설을 숨기기 위해 해당 요소들에 none 클래스를 추가합니다.<br/>
<br/>
4. 정답 확인하기: 정답 확인 버튼(quizConfirm)에 이벤트 리스너를 등록합니다.<br/>
사용자가 입력한 답(quizInput.value)과 정답(infoAnswer)을 비교하여, 맞으면 like 애니메이션을, 틀리면 dislike 애니메이션을 적용합니다.<br/>
정답과 해설을 나타내는 요소들을 화면에 표시하고, 정답 입력을 받는 입력란과 정답 확인 버튼을 숨깁니다.<br/>
<br/>
                            
{`
<script>
    // 문제 정보
    const  infoDate ="2021년 10월";         // infoDate : 정보날짜
    const  infoType ="정보처리 기능사";     //  infoType : 정보유형   
    const  infoNum = "1";                 //  infoNum : 문제 번호
    const  infoQuestion = "CPU의 정보처리 속도 단위 중 초당 100만 개의 연산을 수행한다는 의미의 단위는?" // infoQuestion: 문제이름
    const  infoAnswer = "MIPS"            // infoAnswer: 문제 정답
    const  infoDesc =  "LIPS는 초당 1개, KIPS는 초당 1000개, MIPS는 초당 1000000의 연산을 수행하는 것을 의미합니다." // infoDesc: 문제 해설

    // 선택자
    const quizWrap = document.querySelector(".quiz__wrap");
    const quizDate = quizWrap.querySelector(".quiz__date");
    const quizType = quizWrap.querySelector(".quiz__type");
    const quizNum = quizWrap.querySelector(".quiz__question em");
    const quizQuestion = quizWrap.querySelector(".quiz__question span");
    const quizAnswer = quizWrap.querySelector(".quiz__answer");
    const quizDesc = quizWrap.querySelector(".quiz__desc");
    const quizConfirm = quizWrap.querySelector(".quiz__confirm");
    const quizInput = quizWrap.querySelector(".quiz__input input");
    const quizAnimation = quizWrap.querySelector(".quiz__animation");

    // 문제 출력
    quizDate.innerText = infoDate;
    quizType.innerText = infoType;
    quizNum.innerText = infoNum;
    quizQuestion.innerText = infoQuestion ;
    quizAnswer.innerText = infoAnswer;
    quizDesc.innerText = infoDesc;

    // 정답 해설 숨기기
    quizAnswer.classList.add("none");
    quizDesc.classList.add("none");

    // 정답 확인하기
    quizConfirm.addEventListener("click", () => {
        const userAnswer = quizInput.value;

        if(infoAnswer == userAnswer){
            quizAnimation.classList.add("like");   
        }else {
            quizAnimation.classList.add("dislike");
        }
        quizAnswer.classList.remove("none");
        quizDesc.classList.remove("none");
        quizConfirm.classList.add("none");
        quizInput.classList.add("none");
    });
</script>
`}
                            </Highlight>

                            </details>
                            <details>
                            <summary>QuizEffect02 - Script & 설명</summary>
                            <Highlight className="javascript">
                            <br/>
1. HTML 요소 선택자 정의: quizWrap: HTML 문서 내의 클래스가 "quiz__wrap"인 요소를 선택합니다.<br/>
나머지 선택자들은 quizWrap 내에서 특정 클래스를 가진 하위 요소들을 모두 선택(querySelectorAll)합니다.<br/>
<br/>
2. 퀴즈 정보 배열 생성: quizInfo 배열은 각 퀴즈의 정보를 객체 형태로 가지고 있습니다.<br/>
각 객체는 퀴즈의 날짜, 유형, 번호, 문제, 정답, 해설을 포함합니다.<br/>
<br/>
3. 반복문을 사용한 HTML 동적 생성: for문을 사용하여 quizInfo 배열의 각 요소를 반복하면서 해당 정보를 HTML 문서 내의 퀴즈 요소에 동적으로 할당합니다.<br/>
<br/>
4. forEach 메서드를 사용한 HTML 동적 생성: forEach 메서드를 사용하여도 마찬가지로 배열의 각 요소를 반복하면서 HTML 동적 생성을 수행합니다<br/>
forEach 메서드는 for문보다 코드가 더 간결하고 함수형 프로그래밍 스타일을 지원하므로, 일부 개발자는 forEach를 선호합니다.<br/>
<br/>
5. 퀴즈 정답과 해설 숨기기: forEach 메서드를 사용하여 모든 퀴즈의 정답과 해설을 처음에는 화면에서 숨깁니다. <br/>
<br/>
6. 정답 확인 이벤트 등록: forEach 메서드를 사용하여 각 정답 확인 버튼(quizConfirm)에 클릭 이벤트를 등록합니다.<br/>
클릭 시, 사용자가 입력한 답과 실제 정답을 비교하여 알맞은 피드백 애니메이션을 적용하고, 정답과 해설을 화면에 표시하며 입력란과 확인 버튼을 숨깁니다.<br/>
<br/>
                            
{`
<script>
// 선택자
 const quizWrap = document.querySelector(".quiz__wrap");
 const quizDate = quizWrap.querySelectorAll(".quiz__date");
 const quizType = quizWrap.querySelectorAll(".quiz__type");
 const quizNum = quizWrap.querySelectorAll(".quiz__question em");
 const quizQuestion = quizWrap.querySelectorAll(".quiz__question span");
 const quizAnswer = quizWrap.querySelectorAll(".quiz__answer");
 const quizDesc = quizWrap.querySelectorAll(".quiz__desc");
 const quizConfirm = quizWrap.querySelectorAll(".quiz__confirm");
 const quizInput = quizWrap.querySelectorAll(".quiz__input input");
 const quizAnimation = quizWrap.querySelectorAll(".quiz__animation");

 // 문제정보
 const quizInfo = [
     {
         infoDate:"2019년 상시",
         infoType:"정보처리기능사",
         infoNum :"1",
         infoQuestion:"현재 수행 중에 있는 명령어 코드(code)를 저장하고 있는 임시 저장 장치는?",
         infoAnswer:"명령 레지스터",
         infoDesc:"명령 레지스터(IR)는 현재 수행 중인 명령어를 보관"
     } , 
     {
         infoDate:"2020년 4회",
         infoType:"정보처리 기능사",
         infoNum :"2",
         infoQuestion:"1비트(bit)를 기억할 수 있는 능력을 가진 기억의 최소단위로 클록이 있는 순서 회로에 기억된 기억 소자는?",
         infoAnswer:"플립플롭",
         infoDesc:"플립플롭은  1비트('0' 또는 '1')의 정보를 기억할 수 있는 최소의 기억 소자로 RS 플립플롭, JK 플립플롭, D플립플롭, T플립플롭 등이 있음"
     },
     {
         infoDate:"2021년 1회",
         infoType:"정보처리 기능사",
         infoNum :"3",
         infoQuestion:"누를 때마다 ON, OFF가 교차되는 스위치를 만들고자 할 때 사용되는 플립플롭은?",
         infoAnswer:"T 플립플롭",
         infoDesc:"입력이 '0'이면 전 상태 불변, 입력이 '1'이면 전 상태의 보수값"
     } 

 ];

 //  for()
 for(let i=0; i<quizInfo.length; i++){
     quizDate[i].textContent = quizInfo[i].infoDate;
     quizType[i].textContent = quizInfo[i].infoType;
     quizNum[i].textContent = quizInfo[i].infoNum;
     quizQuestion[i].textContent = quizInfo[i].infoQuestion;
     quizAnswer[i].textContent = quizInfo[i].infoAnswer;
     quizDesc[i].textContent = quizInfo[i].infoDesc;
 }

 // forEach()
 quizInfo.forEach((el,i) => {
     quizDate[i].textContent = quizInfo[i].infoDate;
     quizType[i].textContent = quizInfo[i].infoType;
     quizNum[i].textContent = quizInfo[i].infoNum;
     quizQuestion[i].textContent = quizInfo[i].infoQuestion;
     quizAnswer[i].textContent = quizInfo[i].infoAnswer;
     quizDesc[i].textContent = quizInfo[i].infoDesc;
 });


 
 // forEach()
 quizInfo.forEach((el,i) => {
     quizAnswer[i].style.display = "none";
     quizDesc[i].style.display = "none";
 });

 // 정답확인
 quizConfirm.forEach(function(btn, num){
     btn.addEventListener("click", function(){
         const userAnswer = quizInput[num].value;
        
         if(userAnswer === quizInfo[num].infoAnswer){
             quizAnimation[num].classList.add("like");
         }else {
             quizAnimation[num].classList.add("dislike");
         }
         quizAnswer[num].style.display ="block";
         quizDesc[num].style.display = "block";
         quizConfirm[num].style.display = "none";
         quizInput[num].style.display = "none"; 
     });
 });      
</script>
`}
                            </Highlight>
                            
                            </details>
                            </p>
                        </div>
                        <div className="item__inner">
                            <p className="desc">
                            <h3>QuizEffect03 & QuizEffect04</h3>
                          
                            <details>
                                <summary>Main.html</summary>
                                <Highlight className="javascript"> 
                                {`<main id="main">
        <div class="quiz__wrap">
            <div class="quiz">
                <div class="quiz__header"></div>   // 문제 년도 & 과목
                <div class="quiz__main">
                    <div class="quiz__question"></div> // 문제 내용
                    <div class="quiz__choice">  // 객관식(4지선다형)
                        <label for="choice1">
                            <input type="radio" id="choice1" name="choice" value="1">
                            <span></span>
                        </label>
                        <label for="choice2">
                            <input type="radio" id="choice2" name="choice" value="2">
                            <span></span>
                        </label>
                        <label for="choice3">
                            <input type="radio" id="choice3" name="choice" value="3">
                            <span></span>
                        </label>
                        <label for="choice4">
                            <input type="radio" id="choice4" name="choice" value="4">
                            <span></span>
                        </label>
                    </div>
                    <div class="quiz__answer none"></div>  // 정답
                    <div class="quiz__desc none"></div>   // 해설
                </div>
                <div class="quiz__footer">
                    <button class="quiz__confirm">정답 확인하기</button> // 정답 버튼
                </div>
            </div>
        </div>
    </main>
    <!-- //main --> `}
                            </Highlight>
                            </details>
                            <details>
                            <summary>QuizEffect03 - Script & 설명</summary>
                            <Highlight className="javascript">
                            <br/>
1. 문제 정보 및 선택자 정의: infoDate, infoType, infoNum, infoQuestion, infoChoice, infoAnswer, infoDesc: 문제 정보를 담고 있는 변수들.<br/>
각각의 정보를 웹 페이지에서 특정 요소에 출력하기 위한 선택자들을 정의합니다.<br/>
예를 들어: quizDate = quizWrap.querySelector(".quiz__date"): 이 코드는 quizWrap 내에서 클래스가 "quiz__date"인 첫 번째 자식 요소를 찾아 quizDate 변수에 할당합니다.<br/>
<br/>
2. 퀴즈 정보 배열 생성: quizInfo 배열은 각 퀴즈의 정보를 객체 형태로 가지고 있습니다.<br/>
각 객체는 퀴즈의 날짜, 유형, 번호, 문제, 정답, 해설을 포함합니다.<br/>
<br/>
3. 문제 출력: for 루프를 사용하여 quizInfo의 정보를 HTML 요소에 동적으로 적용합니다. 퀴즈의 제목, 질문, 선택지 등이 화면에 표시됩니다.<br/>
<br/>
4. 정답 확인: 정답 확인 버튼을 클릭하면 선택된 선택지의 값을 확인하여 정답 여부를 판단합니다.<br/>
선택된 값이 정답과 일치하면 정답 메시지를 표시하고, 그렇지 않으면 오답 메시지와 함께 정답과 설명을 표시합니다.<br/>
선택지를 선택하지 않은 경우 경고 메시지를 표시합니다.<br/>
<br/>
5. CSS 클래스 조작: 퀴즈의 정답과 설명은 초기에 화면에서 숨겨져 있습니다. 정답 확인 시에 해당 내용을 표시하기 위해 CSS 클래스(none)를 추가 및 제거합니다.<br/>
<br/>
                            
{`
<script>
// 선택자
const quizWrap = document.querySelector(".quiz__wrap");
const quizHeader = quizWrap.querySelector(".quiz__header")
const quizQuestion = quizWrap.querySelector(".quiz__question");
const quizAnswer = quizWrap.querySelector(".quiz__answer");
const quizDesc = quizWrap.querySelector(".quiz__desc");
const quizChoice = quizWrap.querySelectorAll(".quiz__choice span");
const quizSelect = quizWrap.querySelectorAll(".quiz__choice input");
const quizConfirm = quizWrap.querySelector(".quiz__confirm");

// 문제정보
const quizInfo = [
    {
        infoDate : "2016년 4회",
        infoType : "웹디자인 기능사",
        infoNum : "01",
        infoQuestion : "다음 중 디자인의 기본 요소들로 옳은 것은?",
        infoChoice : ["선, 색채, 공간, 수량", "점, 선, 면, 질감", "시간, 수량, 구조, 공간", "면, 구조, 공간, 수량"],
        infoAnswer : "2",
        infoDesc : "디자인의 기본 요소에는 점, 선, 면, 질감이 있습니다."
    }
];

// 문제출력
for(let i=0; i< quizInfo.length; i++){
    quizHeader.innerHTML = quizInfo[i].infoDate + " " + quizInfo[i].infoType;
    quizQuestion.innerHTML = quizInfo[i].infoNum + ". " + quizInfo[i].infoQuestion;
    quizAnswer.innerText = quizInfo[i].infoAnswer;
    quizDesc.innerText = quizInfo[i].infoDesc;

    for(let j=0; j< quizChoice.length; j++){
        quizChoice[j].innerText = quizInfo[i].infoChoice[j];
    }
}

// 정답 확인
quizConfirm.addEventListener("click", () => {
    let selectedChoice = null;

    for(i=0; i<quizSelect.length; i++){
        if(quizSelect[i].checked){
            selectedChoice = quizSelect[i].value;
            break;
        }
    }

    if(selectedChoice !== null){
        if(selectedChoice == quizInfo[0].infoAnswer){
            alert("정답입니다.");
            quizDesc.classList.remove("none");
        } else {
            alert("오답입니다.");
            quizAnswer.classList.remove("none");
            quizDesc.classList.remove("none");
        }
    } else {
        alert("보기를 선택하세요!😂");
    }
});

</script>
`}
                            </Highlight>

                            </details>
                            <details>
                            <summary>QuizEffect04 - Script & 설명</summary>
                            <Highlight className="javascript">
                            <br/>
1. 선택자 정의 : document.querySelector 및 document.querySelectorAll를 사용하여 HTML 문서에서 퀴즈와 관련된 요소들을 선택합니다.<br/>
<br/>
2. 문제 정보 정의 : quizInfo 배열에 퀴즈 정보를 객체 형태로 저장합니다. 날짜, 유형, 번호, 질문, 정답, 설명 등의 정보가 포함됩니다.<br/>
<br/>
3. 문제 출력 : for 루프를 사용하여 quizDate, quizType, quizNum, quizQuestion, quizAnswer, quizDesc 등의 요소에 퀴즈 정보를 적절히 출력합니다.<br/>
<br/>
4. forEach()를 활용한 동일한 작업 : forEach를 사용하여 퀴즈 정보를 출력하는 부분이 중복되는 부분을 더 간결하게 작성합니다.<br/>
<br/>
5. 정답 숨기기 : forEach를 사용하여 정답과 설명을 숨기는 작업을 수행합니다.<br/>
<br/>
6. 정답 확인 및 애니메이션 적용 : quizConfirm 버튼에 대해 forEach를 사용하여 각 버튼에 이벤트 리스너를 추가합니다. <br/>
사용자가 입력한 답안과 정답을 비교하고, 그에 따라 애니메이션을 적용하여 피드백을 제공합니다.<br/>
정답 및 설명을 표시하고, 입력과 버튼을 숨기는 등의 동작을 수행합니다.<br/>
<br/>
                            
{`
<script>
// 선택자
 const quizWrap = document.querySelector(".quiz__wrap");
 const quizDate = quizWrap.querySelectorAll(".quiz__date");
 const quizType = quizWrap.querySelectorAll(".quiz__type");
 const quizNum = quizWrap.querySelectorAll(".quiz__question em");
 const quizQuestion = quizWrap.querySelectorAll(".quiz__question span");
 const quizAnswer = quizWrap.querySelectorAll(".quiz__answer");
 const quizDesc = quizWrap.querySelectorAll(".quiz__desc");
 const quizConfirm = quizWrap.querySelectorAll(".quiz__confirm");
 const quizInput = quizWrap.querySelectorAll(".quiz__input input");
 const quizAnimation = quizWrap.querySelectorAll(".quiz__animation");

 // 문제정보
 const quizInfo = [
     {
         infoDate:"2019년 상시",
         infoType:"정보처리기능사",
         infoNum :"1",
         infoQuestion:"현재 수행 중에 있는 명령어 코드(code)를 저장하고 있는 임시 저장 장치는?",
         infoAnswer:"명령 레지스터",
         infoDesc:"명령 레지스터(IR)는 현재 수행 중인 명령어를 보관"
     } , 
     {
         infoDate:"2020년 4회",
         infoType:"정보처리 기능사",
         infoNum :"2",
         infoQuestion:"1비트(bit)를 기억할 수 있는 능력을 가진 기억의 최소단위로 클록이 있는 순서 회로에 기억된 기억 소자는?",
         infoAnswer:"플립플롭",
         infoDesc:"플립플롭은  1비트('0' 또는 '1')의 정보를 기억할 수 있는 최소의 기억 소자로 RS 플립플롭, JK 플립플롭, D플립플롭, T플립플롭 등이 있음"
     },
     {
         infoDate:"2021년 1회",
         infoType:"정보처리 기능사",
         infoNum :"3",
         infoQuestion:"누를 때마다 ON, OFF가 교차되는 스위치를 만들고자 할 때 사용되는 플립플롭은?",
         infoAnswer:"T 플립플롭",
         infoDesc:"입력이 '0'이면 전 상태 불변, 입력이 '1'이면 전 상태의 보수값"
     } 

 ];

 //  for()
 for(let i=0; i<quizInfo.length; i++){
     quizDate[i].textContent = quizInfo[i].infoDate;
     quizType[i].textContent = quizInfo[i].infoType;
     quizNum[i].textContent = quizInfo[i].infoNum;
     quizQuestion[i].textContent = quizInfo[i].infoQuestion;
     quizAnswer[i].textContent = quizInfo[i].infoAnswer;
     quizDesc[i].textContent = quizInfo[i].infoDesc;
 }

 // forEach()
 quizInfo.forEach((el,i) => {
     quizDate[i].textContent = quizInfo[i].infoDate;
     quizType[i].textContent = quizInfo[i].infoType;
     quizNum[i].textContent = quizInfo[i].infoNum;
     quizQuestion[i].textContent = quizInfo[i].infoQuestion;
     quizAnswer[i].textContent = quizInfo[i].infoAnswer;
     quizDesc[i].textContent = quizInfo[i].infoDesc;
 });


 
 // forEach()
 quizInfo.forEach((el,i) => {
     quizAnswer[i].style.display = "none";
     quizDesc[i].style.display = "none";
 });

 // 정답확인
 quizConfirm.forEach(function(btn, num){
     btn.addEventListener("click", function(){
         const userAnswer = quizInput[num].value;
        
         if(userAnswer === quizInfo[num].infoAnswer){
             quizAnimation[num].classList.add("like");
         }else {
             quizAnimation[num].classList.add("dislike");
         }
         quizAnswer[num].style.display ="block";
         quizDesc[num].style.display = "block";
         quizConfirm[num].style.display = "none";
         quizInput[num].style.display = "none"; 
     });
 });      
</script>
`}
                            </Highlight>
                            
                            </details>
                            </p>
                        </div>
                        <div className="item__inner">
    <p className="desc">
        <h3>QuizEffect05</h3>

        <details>
            <summary>Main.html</summary>
            <Highlight className="javascript">
                {`<main id="main">
        <div class="quiz__wrap"></div>
</main>
    <!-- //main -->   `}

            </Highlight>
        </details>

        <details>
            <summary>QuizEffect05 - Script & 설명</summary>
            <Highlight className="javascript">
                <br />
                1. 선택자 정의 : document.querySelector를 사용하여 HTML 문서에서 퀴즈와 관련된 요소를 선택합니다.<br />
                <br />
                2. 문제 정보 정의 : quizInfo 배열에 퀴즈 정보를 객체 형태로 저장합니다. 날짜, 유형, 질문, 선택지, 정답, 설명 등의 정보가 포함됩니다.<br />
                <br />
                3. updateQuiz 함수 : 이 함수는 특정 인덱스의 퀴즈 정보를 받아와 해당 퀴즈의 HTML을 동적으로 생성하고, 페이지에 출력합니다.<br />
                퀴즈의 헤더(날짜와 유형), 메인 부분(문제, 선택지, 정답, 설명), 푸터(정답 확인과 다음 문제로 이동 버튼)으로 구성됩니다.<br />
                템플릿 문자열을 사용하여 동적으로 HTML을 생성합니다.<br />
                <br />
                4. 정답 확인 함수 (checkAnswer) : 사용자가 선택한 답과 정답을 비교하여 피드백을 제공합니다.<br />
                선택한 답이 없을 경우 알림을 표시합니다.<br />
                <br />
                5. 페이지 로드 후 초기화 : DOMContentLoaded 이벤트를 사용하여 페이지 로드가 완료되면 초기 퀴즈를 업데이트합니다.<br />
                <br />
{`
<script>
    //선택자
    const quizWrap = document.querySelector(".quiz__wrap");

    // 문제 정보
    const quizInfo = [
            {
                infoDate : "2006년 5회",
                infoType : "정보처리 기능사",
                infoQuestion : "이항(binary) 연산에 해당하는 것은?",
                infoChoice : ["COMPLEMENT","AND","ROTATE","SHIFT"],
                infoAnswer : "2",
                infoDesc : "단항연산 : ROTATE, SHIFT, MOVE, NOT(COMPLEMENT)"
            },
            {
                infoDate : "2006년 5회",
                infoType : "정보처리 기능사",
                infoQuestion : "프로그램이 컴퓨터의 기종에 관계없이 수행될 수 있는 성질을 의미하는 것은?",
                infoChoice : ["가용성","신뢰성","호환성","안전성"],
                infoAnswer : "3",
                infoDesc : "컴퓨터의 기종에 관계없이 동작하므로 호환성입니다. 호환성이란 까스활명수, 까스명수, 베아제등 이름은 틀리지만 소화제의 기능을 하는것처럼 기종에 관계없이 동작할수 있는 것들을 말합니다."
            },
            {
                infoDate : "2006년 5회",
                infoType : "정보처리 기능사",
                infoQuestion : "제어장치가 앞의 명령 실행을 완료한 후, 다음에 실행 할 명령을 기억장치로부터 가져오는 동작을 완료할 때까지의 주기를 무엇이라고 하는가?",
                infoChoice : ["fetch cycle","transfer cycle","search time","run time"],
                infoAnswer : "1",
                infoDesc : "명령어를 가지고 오는것을 fetch cycle 이라고 합니다."
            }
        ];
                
    let currentIndex = 0;  // 현재 문제 변수 값(현재 풀고 있는 값)
    
// 문제출력
const updataQuiz = (index) => {
    let quizWrapTag = 
        <div className="quiz">
            <div className="quiz__header">"2006년 5회" "정보처리 기능사"</div>
            <div className="quiz__main">
                <div className="quiz__question">1 . "이항(binary) 연산에 해당하는 것은?"</div>
                <div className="quiz__choice">
                    <label for="choice1">
                        <input type="radio" id="choice1" name="choice" value="1"/>
                        <span>"COMPLEMENT"</span>
                    </label>
                    <label for="choice2">
                        <input type="radio" id="choice2" name="choice" value="2"/>
                        <span>"AND"</span>
                    </label>
                    <label for="choice3">
                        <input type="radio" id="choice3" name="choice" value="3"/>
                        <span>"ROTATE"</span>
                    </label>
                    <label for="choice4">
                        <input type="radio" id="choice4" name="choice" value="4"/>
                        <span>"SHIFT"</span>
                    </label>
                </div>
                <div className="quiz__answer none">2
                </div>
                <div className="quiz__desc none">"단항연산 : ROTATE, SHIFT, MOVE, NOT(COMPLEMENT)"
                </div>
            </div>
            <div className="quiz__footer">
                <button className="quiz__confirm">정답 확인하기</button>
                <button className="quiz__next none">다음 문제</button>
            </div>
        </div>
    
    quizWrap.innerHTML = quizWrapTag;

    // 선택자
    const quizConfirm = quizWrap.querySelector(".quiz__confirm");
    const quizNext = quizWrap.querySelector(".quiz__next");
    
    // 정답 확인 버튼
    quizConfirm.addEventListener("click", () => {
        checkAnswer();
        quizConfirm.classList.add("none");   // 정답 버튼 삭제
        quizNext.classList.remove("none");   // 다음 버튼 추가
    });

    // 다음 문제 버튼
    quizNext.addEventListener("click", () => {
        if(currentIndex < quizInfo.length -1){
            quizNext.classList.add("none");         // 다음 버튼 삭제
            quizConfirm.classList.remove("none");   // 정답 버튼 추가
            currentIndex++;                         // 문제 번호 추가
        updataQuiz(currentIndex);                   //퀴즈 반영
        }else {
            alert("퀴즈가 종료되었습니다.");
        }
    });
};

// 정답 확인
const checkAnswer = () => {
    const selectedChoice = quizWrap.querySelector("input[name='choice']:checked");
    
    if(!selectedChoice){
        alert("답을 선택해주세요");
    };
    
    const userAnswer = selectedChoice.value;                    // 사용자가 클릭한 정답
    const corrcetAnswer = quizInfo[currentIndex].infoAnswer;   //정답지의 정답
    const quizElement = quizWrap.querySelector(".quiz");
    const descElement = quizWrap.querySelector(".quiz__desc");
    const answerElement = quizWrap.querySelector(".quiz__answer");
    if(userAnswer === corrcetAnswer){
        quizElement.classList.add("good");
        descElement.classList.remove("none");
    } else {
        quizElement.classList.add("bad");
        answerElement.classList.remove("none");
        descElement.classList.remove("none");
    }
    descElement.classList.remove("none");
};

// 점수 업데이트
const updateScore = () => {
    const scoreElement = document.querySelector(".quiz__score");
    scoreElement.textContent = quizScore; // 점수 업데이트
}
// 페이지가 로드된 후 실행
document.addEventListener("DOMContentLoaded", () => {
    updataQuiz(currentIndex);
});
</script>
            `}
            </Highlight>
            
        </details>


                            </p>
                        </div>
                        <div className="item__inner">
    <p className="desc">
        <h3>QuizEffect06(Json)</h3>

        <details>
            <summary>Main.html</summary>
            <Highlight className="javascript">
          {`<main id="main">
        <div class="quiz__wrap"></div>
        <div class="quiz__check">정답 확인</div>
</main>`}
            </Highlight>
        </details>

        <details>
            <summary>QuizEffect06 - Script & 설명</summary>
            <Highlight className="javascript">
            <br/>
1. 선택자 및 초기화 : HTML 문서 내의 특정 클래스를 가진 요소들을 JavaScript로 선택하고, 퀴즈 정보 및 점수를 담을 변수들을 초기화합니다. <br/>
<br/>
3. 퀴즈 출력 : updataQuiz 함수는 quizInfo 배열을 순회하면서 각 퀴즈를 HTML 형태로 구성하여 동적으로 화면에 출력합니다. 각 퀴즈는 선택지가 랜덤으로 섞여서 표시됩니다.<br/>
<br/>
4. 정답 확인 및 점수 계산 : 사용자가 선택한 답을 확인하고, 맞으면 해당 퀴즈를 '정답'으로 표시하고 점수를 증가시킵니다.<br/>
틀린 경우에는 '오답'으로 표시하고 정답을 보여줍니다.<br/>
<br/>
5. 최종 점수 알림 : 사용자가 모든 퀴즈에 대한 답을 확인한 후에는 총 맞은 갯수를 알리는 알림창이 뜨게 됩니다.<br/>
<br/>
6. 페이지 로딩 후 실행 : DOMContentLoaded 이벤트가 발생하면 fetchQuiz 함수가 호출되어 초기 데이터를 가져와 퀴즈를 출력합니다.<br/>
<br />
7. Script는 링크클릭!! 👉 <a href="https://github.com/jinhomun/QuizEffect/blob/main/Quiz/quizEffect06.html"><em>GitHub Link</em></a>

            </Highlight>
            
        </details>


                            </p>
                        </div>
                        <div className="item__inner">
    <p className="desc">
        <h3>QuizEffect07(cbt)</h3>

        <details>
            <summary>Main.html</summary>
            <Highlight className="javascript">
          {`<main id="main">
       <div class="cbt__box">
            <h2>기능사 시험</h2>
            <select id="cbtSelect1">
                <option value="gineungsaJC2005_02">정보처리기능사 2005년 2회</option>
                <option value="gineungsaJC2005_04">정보처리기능사 2005년 4회</option>
                <option value="gineungsaJC2005_05">정보처리기능사 2005년 5회</option>
                <option value="gineungsaJC2006_01">정보처리기능사 2006년 1회</option>
                <option value="gineungsaJC2006_02">정보처리기능사 2006년 2회</option>
                <option value="gineungsaJC2006_03">정보처리기능사 2006년 3회</option>
                <option value="gineungsaJC2006_05">정보처리기능사 2006년 5회</option>
                <option value="gineungsaJC2007_01">정보처리기능사 2007년 1회</option>
                <option value="gineungsaJC2007_02">정보처리기능사 2007년 2회</option>
                <option value="gineungsaJC2007_04">정보처리기능사 2007년 4회</option>
                <option value="gineungsaJC2007_05">정보처리기능사 2007년 5회</option>
                <option value="gineungsaJC2008_01">정보처리기능사 2008년 1회</option>
                <option value="gineungsaJC2008_02">정보처리기능사 2008년 2회</option>
                <option value="gineungsaJC2008_04">정보처리기능사 2008년 4회</option>
                <option value="gineungsaJC2009_01">정보처리기능사 2009년 1회</option>
                <option value="gineungsaJC2009_04">정보처리기능사 2009년 4회</option>
                <option value="gineungsaJC2009_05">정보처리기능사 2009년 5회</option>
                <option value="gineungsaJC2010_02">정보처리기능사 2010년 2회</option>
                <option value="gineungsaJC2010_05">정보처리기능사 2010년 5회</option>
                <option value="gineungsaJC2011_01">정보처리기능사 2011년 1회</option>
                <option value="gineungsaJC2011_02">정보처리기능사 2011년 2회</option>
                <option value="gineungsaJC2011_04">정보처리기능사 2011년 4회</option>
                <option value="gineungsaJC2011_05">정보처리기능사 2011년 5회</option>
            </select>
            <select id="cbtSelect2">
                <option value="gineungsaWD2009_05">웹디자인기능사 2009년 1회</option>
                <option value="gineungsaWD2010_01">웹디자인기능사 2010년 1회</option>
                <option value="gineungsaWD2010_02">웹디자인기능사 2010년 2회</option>
                <option value="gineungsaWD2010_04">웹디자인기능사 2010년 4회</option>
                <option value="gineungsaWD2010_05">웹디자인기능사 2010년 5회</option>
                <option value="gineungsaWD2011_01">웹디자인기능사 2011년 1회</option>
                <option value="gineungsaWD2011_02">웹디자인기능사 2011년 2회</option>
                <option value="gineungsaWD2011_04">웹디자인기능사 2011년 4회</option>
                <option value="gineungsaWD2011_05">웹디자인기능사 2011년 5회</option>
                <option value="gineungsaWD2012_02">웹디자인기능사 2012년 2회</option>
                <option value="gineungsaWD2012_04">웹디자인기능사 2012년 4회</option>
                <option value="gineungsaWD2013_02">웹디자인기능사 2013년 2회</option>
                <option value="gineungsaWD2013_04">웹디자인기능사 2013년 4회</option>
                <option value="gineungsaWD2013_05">웹디자인기능사 2013년 5회</option>
                <option value="gineungsaWD2014_01">웹디자인기능사 2014년 1회</option>
                <option value="gineungsaWD2014_04">웹디자인기능사 2014년 4회</option>
                <option value="gineungsaWD2014_05">웹디자인기능사 2014년 5회</option>
                <option value="gineungsaWD2015_01">웹디자인기능사 2015년 1회</option>
                <option value="gineungsaWD2015_03">웹디자인기능사 2015년 3회</option>
                <option value="gineungsaWD2015_04">웹디자인기능사 2015년 4회</option>
                <option value="gineungsaWD2015_05">웹디자인기능사 2015년 5회</option>
                <option value="gineungsaWD2016_01">웹디자인기능사 2016년 1회</option>
                <option value="gineungsaWD2016_04">웹디자인기능사 2016년 4회</option>
            </select>
            <p>
                당신의 이름은 <input type="text" class="cbt__select__input"> 입니다. <br>
                <em class="cbt__select__title">정보처리기능사 2005년 2회</em> 문제를 선택했습니다. <br>
                시작하겠습니까?<br>
                총 시간은 60분이며, 60점 이상 맞아야 합격입니다.
            </p>
            <button class="cbt__box__start">시작하기</button>
       </div>
       <div class="cbt__wrap none">
        <div class="cbt__header">
            <h1  class="cbt__title">정보처리기능사 2005년 2회 기출문제</h1>
            <div class="cbt__time">남은시간 <span>60분 00초</span></div>
        </div>
        <!-- //cbt__header -->

        <div class="cbt__conts">
            <div class="cbt__quiz">
                
            </div>
        </div>
        <!-- //cbt__conts -->

        <div class="cbt__aside">
            <div class="cbt__name">수험자 : 문진호</div>
            <div class="cbt__submit">답안지 제출하기</div>
            <div class="cbt__giveup">포기하기</div>
            <div class="cbt__again none">다시 풀기</div>
            <div class="cbt__omr"></div>
        </div>
        <!-- //cbt__aside -->
    </div>
</main>
<!-- //main -->`}
            </Highlight>
        </details>

        <details>
            <summary>QuizEffect07 - Script & 설명</summary>
            <Highlight className="javascript">
            <br/>
1. 선택자 및 초기화 : HTML 문서 내의 특정 클래스 및 요소들을 JavaScript로 선택하고, 필요한 변수들을 초기화합니다.<br/>
<br/>
2. 퀴즈 데이터 가져오기 : 사용자가 선택한 옵션에 따라 외부 JSON 파일에서 퀴즈 데이터를 비동기적으로 가져와 quizInfo 배열에 저장합니다.<br/>
<br/>
3. 문제 출력 : updateQuiz 함수는 quizInfo 배열을 순회하면서 각 퀴즈를 HTML 형태로 구성하여 동적으로 화면에 출력합니다.<br/>
퀴즈는 선택지가 랜덤으로 섞여서 표시됩니다.<br/>
<br/>
4. 타이머 및 시작하기 : 사용자가 시작하기 버튼을 누르면 이름을 입력받고, 시간이 제한된 60분 동안 퀴즈를 풀게 됩니다.<br/> 
타이머는 1초 간격으로 감소하며, 시간이 종료되면 알림이 표시됩니다.<br/>
<br/>
5. 정답 확인 및 점수 계산 : 사용자가 모든 문제에 대한 답을 선택한 후 제출하기 버튼을 누르면, 정답을 확인하고 점수를 계산하여 알림으로 표시합니다.<br/>
<br/>
6. 포기하기 및 다시 풀기 : 사용자가 포기하기 버튼을 누르면 정답과 해설을 표시하고, 다시 풀기 버튼을 통해 퀴즈를 처음부터 다시 풀 수 있습니다.<br/>
<br/>
7. 이벤트 리스너 등록 : 페이지가 로드된 후에는 각종 버튼에 대한 클릭 이벤트 리스너가 등록되어 사용자의 상호작용을 처리합니다.<br/>
<br/>
8. Script는 링크클릭!! 👉 <a href="https://github.com/jinhomun/QuizEffect/blob/main/Quiz/quizEffect07.html"><em>GitHub Link</em></a>
 </Highlight>
 
            
        </details>


                            </p>
                        </div>
                    </div>
  )
}

export default Quizdesc