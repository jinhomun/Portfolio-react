import React from 'react'
import Highlight from 'react-highlight'

const Figmadesc = () => {
  return (
    <div className="list">
      <div className="item__inner">
        <p className="desc">
          <h3>Figma Pro</h3>
          <Highlight>
            fabric.js를 사용하여 캔버스에 커서 채팅, 댓글, 반응 및 드로잉 디자인(모양, 이미지 업로드)을 통한<br />
            실시간 공동 작업과 같은 실제 기능을 추가하는 방법을 보여주는 최소한의 Figma 복제본입니다.
          </Highlight>

        </p>
      </div>
      <div className="item__inner">
        <p className="desc">
          <h3>fabric.js</h3>
          <Highlight>
            fabric.js는 HTML5 캔버스에서 쉽게 상호 작용하는 그래픽 객체를 만들고 관리할 수 있도록 도와주는 JavaScript 라이브러리입니다.<br />
            <br />
            이 라이브러리는 웹 기반의 그래픽 애플리케이션을 쉽게 구축할 수 있도록 다양한 기능을 제공합니다.<br />
            주로 그래픽 디자인, 이미지 편집, 그림 그리기 등과 같은 웹 기반의 그래픽 애플리케이션을 개발할 때 사용됩니다.<br />
            <br />
            일반적으로 fabric.js를 사용하면 다음과 같은 주요 기능을 이용할 수 있습니다:<br />
            <br />
            그래픽 객체 생성 및 관리: 캔버스 위에 다양한 그래픽 객체를 생성하고 관리할 수 있습니다. 텍스트, 이미지, 도형 등 다양한 객체를 쉽게 만들고 조작할 수 있습니다.<br />
            <br />
            이벤트 처리: 마우스 클릭, 드래그 등의 이벤트를 캔버스 및 객체에 쉽게 적용할 수 있습니다. 이를 통해 사용자와의 상호 작용을 구현할 수 있습니다.<br />
            <br />
            애니메이션: 객체의 속성을 변경하여 애니메이션을 생성할 수 있습니다. 이를 통해 부드러운 효과나 동적인 그래픽을 만들 수 있습니다.<br />
            <br />
            일반적인 그래픽 작업: 선, 도형, 텍스트 등의 그래픽 요소를 자유롭게 그릴 수 있습니다. 또한, 그림자 효과, 투명도 조절, 패턴 등을 사용하여 그래픽을 스타일링할 수 있습니다.<br />
          </Highlight>
        </p>
      </div>
      <div className="item__inner">
        <p className="desc">
          <h3>설치</h3>
          <Highlight>
            npx create-next-app@latest<br />

            npm i fabric uuid @liveblocks/client @liveblocks/react<br />
            npx create-liveblocks-app@latest --init --framework react<br />

            npx shadcn-ui@latest init<br />
            Need to install the following packages:<br />
            shadcn-ui@0.8.0<br />
            Ok to proceed? (y) y<br />
            √ Which style would you like to use? » Default<br />
            √ Which color would you like to use as base color? »<br />
            Slate
            √ Would you like to use CSS variables for colors? ... no / yes<br />

            npm i @liveblocks/react-comments<br />
          </Highlight>

        </p>
      </div>
      <div className="item__inner">
        <p className="desc">
          <h3>특징</h3>
          <details>
            <summary>👇👇👇👇👇</summary>
            <Highlight>
              👉 멀티 커서, 커서 채팅 및 반응 : 개별 커서 표시, 실시간 채팅 및 대화형 커뮤니케이션을 위한 반응을 활성화하여 여러 사용자가 동시에 협업할 수 있습니다.<br />
              <br />
              👉 활성 사용자 : 협업 환경에서 현재 활성 사용자 목록을 표시하여 현재 참여 중인 사용자에 대한 가시성을 제공합니다.<br />
              <br />
              👉 댓글 풍선 : 사용자가 캔버스의 특정 요소에 댓글을 첨부하여 디자인 구성 요소에 대한 커뮤니케이션과 피드백을 촉진할 수 있습니다.<br />
              <br />
              👉 다양한 모양 만들기 : 사용자가 캔버스에 다양한 모양을 생성할 수 있는 도구를 제공하여 다양한 디자인 요소를 허용합니다.<br />
              <br />
              👉 이미지 업로드 : 이미지를 캔버스로 가져와 디자인의 시각적 콘텐츠 범위를 확장합니다.<br />
              <br />
              👉 사용자 정의 : 사용자가 디자인 요소의 속성을 조정할 수 있도록 하여 시각적 구성 요소를 사용자 정의하고 미세 조정할 수 있는 유연성을 제공합니다.<br />
              <br />
              👉 Freeform Drawing : 사용자가 캔버스에 자유롭게 그림을 그릴 수 있어 예술적 표현과 창의적인 디자인을 촉진합니다.<br />
              <br />
              👉 실행 취소/다시 실행 : 이전 작업을 취소(실행 취소) 또는 복원(다시 실행)하는 기능을 제공하여 디자인 의사 결정에 유연성을 제공합니다.<br />
              <br />
              👉 키보드 작업 : 사용자가 복사, 붙여넣기, 삭제, 커서 채팅 열기, 반응 등과 같은 기능에 대한 단축키 실행을 포함한 다양한 작업에 키보드 단축키를 활용할 수 있도록 하여 효율성과 접근성을 향상시킵니다.<br />
              <br />
              👉 내역 : 캔버스에서 수행된 작업 및 변경 내역을 시간순으로 검토하여 프로젝트 관리 및 버전 관리에 도움을 줍니다.<br />
              <br />
              👉 캔버스 삭제, 크기 조절, 이동, 지우기, 내보내기 : 삭제, 크기 조절, 이동, 캔버스 지우기, 최종 디자인을 외부로 내보내기 등 디자인 요소를 관리하기 위한 다양한 기능을 제공합니다.<br />
              <br />
              코드 아키텍처, 고급 반응 후크 및 재사용성을 포함한 더 많은 것<br />
            </Highlight>
          </details>


        </p>
      </div>
    </div>
  )
}

export default Figmadesc