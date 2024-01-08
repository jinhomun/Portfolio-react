import React from 'react'
import Highlight from 'react-highlight'

const Youtubedesc = () => {
  return (
    <div className="list">
                        <div className="item__inner">
                            <p className="desc">
                            Soccer Youtube<br/>
                            유튜브 API를 이용해 축구소식를 볼수 있는 축구 관련 유튜브를 모아둔 축구 유튜브 사이트 입니다.<br />
                            <br/>
                            제작순서 <br/>
                            1. 페이지 구성: 'Home', 'Today', 'Youtubers' 페이지를 세분화<br/>
                            2. data.js 작업 및 컴포넌트 세분화: 데이터 관리를 위한 data.js 파일을 작성하고, 컴포넌트 프롭스를 세분화<br/>
                            3. Swiper 및 API 통합: Swiper 라이브러리를 통해 동적인 UI를 구현하고, api.js 파일을 생성하여 YouTube API와의 연동을 구현<br/>
                            4. 채널 페이지 및 영상 API 호출: 채널 페이지를 구성하고, 영상 API를 호출하여 다양한 콘텐츠를 제공<br/>
                            5. 검색 기능 및 UI 개선: 검색 기능을 추가하고, 홈페이지에 추천 영상을 통합하여 사용자가 콘텐츠를 쉽게 찾고 탐색할 수 있도록 UI를 개선<br/>
                            </p>
                        </div>
                        <div className="item__inner">
                            <p className="desc">
                            React Suspense<br/>
                            React Suspense는 비동기적으로 로딩된 컴포넌트가 준비될 때까지 대기하는 데 사용<br/>
                            주로 React.lazy와 함께 사용되어, 동적으로 불러온 컴포넌트가 준비될 때까지 로딩 상태를 처리하는 데 활용<br/>
                            React.Suspense 컴포넌트를 사용하여 특정 영역이나 전체 컴포넌트 트리에 대한 로딩 상태를 처리<br/>
                            <Highlight className="javascript"> 
                            {`import React, { lazy, Suspense } from 'react';
const MyComponent = lazy(() => import('./MyComponent'));

function App() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <MyComponent />
            </Suspense>
        </div>
    );
}`}
                            </Highlight><br/>
                            React.lazy<br/>
                            React.lazy 함수는 동적으로 컴포넌트를 불러올 때 사용<br/>
                            React.lazy 함수는 동적 import()를 기반으로 하는데, import()는 Promise를 반환하며,<br/> 
                            해당 Promise는 비동기적으로 컴포넌트를 가져오는 데 사용<br/>
                            일반적으로, React.lazy는 코드 스플리팅을 통해 큰 번들을 작은 번들로 나누어<br/>
                            불필요한 리소스 로딩을 최소화<br/>
                            <Highlight className="javascript">
                            {`const MyComponent = React.lazy(() => import('./MyComponent'));`}
                            </Highlight><br/>
                            React.lazy와 React.Suspense는 주로 대규모 앱에서 번들 크기를 최적화하고 초기 로딩 시간을 최소화하기 위해 사용<br/>


                            </p>
                        </div>
                        
                    </div>
  )
}

export default Youtubedesc