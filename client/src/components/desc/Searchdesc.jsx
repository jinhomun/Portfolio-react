import React from 'react'
import Highlight from 'react-highlight'

const Searchdesc = () => {
  return (
    <div className="list">
    <div className="item__inner">
        <p className="desc">
        자바스크립트의 여러 기능과 메서드를 활용하여  CSS속성의 검색기능을 만들어보았습니다.<br />
        아래는 CSS속성 검색기능에서 사용된 주요 개념들입니다.<br />
        <details>
        <summary>QuizEffect-method</summary> 
        <Highlight className="javascript"> 
        - SearchEffect 이용해서 CSS속성을 검색 할수 있도록 만들었습니다.<br/>
        - SearchEffect01에서는 indexOf()/search()를 이용하여 검색박스에 CSS속성이름을 넣으면 결과값이 나오도록 했습니다.<br/>
        - SearchEffect02에서는 include()를 이용하여 CSS속성의 유형을 검색하면 검색한 유형의 CSS속성만 나오도록 했습니다.<br/>
        - SearchEffect03에서는 charAt()를 이용하여 선택한 알파벳이 CSS속성의 첫글자로 시작하는 CSS속성만 나오도록 했습니다.<br/>
        - SearchEffect04에서는 find()를 이용하여 CSS속성을 클릭하면 CSS속성의 설명이 나오도록 했습니다.<br/>
        - SearchEffect05에서는 filter()를 이용해서 CSS속성의 중요도에 따라 CSS속성이 나오도록 했습니다.<br/>
        - SearchEffect06에서는 sort(), reverse()를 이용해서 CSS속성이 정렬 되도록 했습니다.<br/>
        <br/>
        - indexOf() : 배열에서 특정 요소의 인덱스를 반환하는 JavaScript의 배열 메서드입니다.<br/>
        해당 요소가 배열 내에 존재하지 않으면 -1을 반환합니다.<br/>
        - search() :  문자열에서 정규 표현식을 검색하여 해당 패턴의 인덱스를 반환하는 JavaScript의 문자열 메서드입니다.<br/>
        - includes() : 배열이 특정 요소를 포함하고 있는지 여부를 확인하여 true 또는 false를 반환하는 JavaScript 배열 메서드입니다.<br/>
        - charAt() : 문자열에서 지정된 인덱스에 해당하는 문자를 반환하는 JavaScript 문자열 메서드입니다.<br/>
        - find() : 주어진 판별 함수를 만족하는 배열의 첫 번째 요소의 값을 반환하거나, 만족하는 요소가 없을 경우 undefined를 반환하는 JavaScript 배열 메서드입니다.<br/>
        - filter() : 주어진 함수로 구현된 조건을 만족하는 모든 배열 요소를 새로운 배열로 반환하는 JavaScript 배열 메서드입니다.<br/>
        - sort(): 배열의 요소를 정렬하여 배열을 반환하는 JavaScript 배열 메서드 입니다.<br/>
        - reverse(): 배열의 순서를 뒤집어 반환하는 JavaScript 배열 메서드 입니다.<br/>

        </Highlight>
        </details>
        </p>
    </div>
    <div className="item__inner">
        <p className="desc">
        <h3>Canvas</h3>
        <details>
        <summary>Index - canvas</summary> 
        <Highlight className="javascript"> 
{` three.js 설치
<script src='https://cdnjs.cloudflare.com/ajax/libs/three.js/93/three.min.js'></script>
        `}
        <br/>
        1. Three.js를 사용하여 3D 공간에 흥미로운 그래픽을 생성하는 간단한 웹 페이지의 스크립트입니다. <br/>
        <br/>
        2. Scene, Camera, Renderer 설정 : THREE.Scene(): 씬(3D 공간)을 나타냅니다.<br/>
        THREE.PerspectiveCamera(): 원근 투영 카메라를 생성하며, 초기 위치는 (0, 0, 400)입니다.<br/>
        THREE.WebGLRenderer(): WebGL을 이용한 렌더러를 생성하며, 특정 설정들(안티앨리어싱, 투명도 등)이 있습니다.<br/>
        <br/>
        3. 오브젝트 설정 : THREE.IcosahedronGeometry, THREE.TetrahedronGeometry: 각각 정다면체와 정20면체의 기하학적 모양을 정의합니다. <br/>
        THREE.MeshPhongMaterial: 물체의 재질을 설정하는데, 색상, 그림자 등을 정의합니다. <br/>
        THREE.Mesh: 기하학적 모양과 재질을 결합하여 실제 3D 메쉬를 생성합니다. <br/>
        <br/>
        4. 오브젝트 배치와 애니메이션 : circle, skelet, particle: 각각의 오브젝트 그룹을 나타냅니다.<br/>
        scene.add(): 각 그룹에 오브젝트를 추가합니다.<br/>
        animate(): 애니메이션 함수로, 각 그룹을 회전시키고, 프레임을 갱신하여 애니메이션을 구현합니다.<br/>
        requestAnimationFrame(): 브라우저가 다음 애니메이션 프레임을 그리도록 요청합니다.<br/>
        <br/>
        5. 조명 설정: THREE.AmbientLight, THREE.DirectionalLight: 조명을 설정합니다. <br/>
        AmbientLight는 주변광, DirectionalLight는 특정 방향에서 오는 광원을 나타냅니다. <br/>
        <br/>
        6. 이벤트 리스너 : onWindowResize(): 창 크기 조정 이벤트에 대응하여 카메라 비율을 조정하고 렌더러 크기를 업데이트합니다. <br/>
        <br/>
{`
<body>
<div id="canvas"></div>

<nav class="nav">
<ul>
<li class="active"><a href="searchEffect01.html">1</a></li>
<li><a href="searchEffect02.html">2</a></li>
<li><a href="searchEffect03.html">3</a></li>
<li><a href="searchEffect04.html">4</a></li>
<li><a href="searchEffect05.html">5</a></li>
<li><a href="searchEffect06.html">6</a></li>
</ul>
</nav>

<script src='https://cdnjs.cloudflare.com/ajax/libs/three.js/93/three.min.js'></script>
<script>
// 화면 설정
const scene = new THREE.Scene();

// 카메라 설정
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 400;
scene.add(camera);

// 렌더링 설정
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.autoClear = false;
renderer.setClearColor(0x000000, 0.0);
document.getElementById('canvas').appendChild(renderer.domElement);

// 오브젝트 설정
const circle = new THREE.Object3D();
const skelet = new THREE.Object3D();
const particle = new THREE.Object3D();

scene.add(circle);
scene.add(skelet);
scene.add(particle);

// 01
const geometry1 = new THREE.IcosahedronGeometry(7, 1);
const material1 = new THREE.MeshPhongMaterial({
color: 0xffffff,
shading: THREE.FlatShading
});

const planet1 = new THREE.Mesh(geometry1, material1);
planet1.scale.x = 16;
planet1.scale.y = 16;
planet1.scale.z = 16;

circle.add(planet1);

// 02
const geometry2 = new THREE.IcosahedronGeometry(15, 1);
const material2 = new THREE.MeshPhongMaterial({
color: 0xffffff,
wireframe: true,
side: THREE.DoubleSide
});

const planet2 = new THREE.Mesh(geometry2, material2);
planet2.scale.x = 10;
planet2.scale.y = 10;
planet2.scale.z = 10;

circle.add(planet2);


// 03
const geometry3 = new THREE.TetrahedronGeometry(2, 1);
const material3 = new THREE.MeshPhongMaterial({
color: 0xffffff,
shading: THREE.FlatShading
});
for (var i = 0; i < 700; i++) {
const mesh = new THREE.Mesh(geometry3, material3);
mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
mesh.position.multiplyScalar(90 + (Math.random() * 700));
mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
particle.add(mesh);
}

// 조명 설정
const ambientLight = new THREE.AmbientLight(0x999999);
scene.add(ambientLight)

const lights = [];
lights[0] = new THREE.DirectionalLight(0xffffff, 1);
lights[0].position.set(1, 0, 0);
lights[1] = new THREE.DirectionalLight(0x11e8bb, 1);
lights[1].position.set(0.75, 1, 0.5);
lights[2] = new THREE.DirectionalLight(0x8200c9, 1);
lights[2].position.set(-0.75, -1, 0.5);

scene.add(lights[0])
scene.add(lights[1])
scene.add(lights[2])

// 애니메이션 설정
function animate() {
circle.rotation.x += 0.002;
circle.rotation.y += 0.002;
circle.rotation.z += 0.002;
skelet.rotation.x += 0.03;
skelet.rotation.y += 0.03;
skelet.rotation.z += 0.03;
particle.rotation.x += 0.001;
particle.rotation.y += 0.001;
particle.rotation.z += 0.001;

requestAnimationFrame(animate);
renderer.render(scene, camera);
}
animate();

// 화면 사이즈 설정
function onWindowResize() {
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", onWindowResize);
</script>
</body>
       `}
        </Highlight>
        </details>
        </p>
    </div>
    <div className="item__inner">
        <p className="desc">
        <h3>SearchEffect01 - indexOf()/search()를 이용하여 CSS 속성 검색하기</h3>
        <details>
        <summary>main.html</summary> 
        <Highlight className="javascript"> 
{`  <main id="main">
<div class="search__wrap">
<div class="search__title">
<span>indexOf()/search()를 이용하여 검색하기</span>
<h1>CSS 속성 검색하기</h1>
</div>
<div class="search__box">
<label for="searchBox"></label>
<input type="text" id="searchBox" name="searchBox" placeholder="CSS속성 입력해주세요">
</div>
<div class="search__info">
<div>CSS 속성 갯수 : <span class="num">0</span>개</div>
</div>
<div class="search__list">
<ul>
<li data-name="align-content"><strong>align-content</strong> : 콘텐츠 아이템의 상하관계 정렬 상태를 설정합니다.</li>
<li data-name="align-items"><strong>align-items</strong> : 콘텐츠 아이템의 내부 상하관계 정렬 상태를 설정합니다.</li>
<li data-name="align-self"><strong>align-self</strong> : 개별적인 콘텐츠 아이템의 정렬 상태를 설정합니다.</li>
<li data-name="all"><strong>all</strong> : 요소의 속성을 초기화 또는 상속을 설정합니다.</li>
<li data-name="animation"><strong>animation</strong> : 애니메이션과 관련된 속성을 일괄적으로 설정합니다.</li>
<li data-name="animation-delay"><strong>animation-delay</strong> : 애니메이션 지연 시간을 설정합니다.</li>
<li data-name="animation-direction"><strong>animation-direction</strong> : 애니메이션 움직임 방향을 설정합니다.</li>
<li data-name="animation-duration"><strong>animation-duration</strong> : 애니메이션 움직임 시간을 설정합니다.</li>
<li data-name="animation-fill-mode"><strong>animation-fill-mode</strong> : 애니메이션이 끝난 후의 상태를 설정합니다.
</li>
<li data-name="animation-iteration-count"><strong>animation-iteration-count</strong> : 애니메이션 반복 횟수
    설정합니다.</li>
<li data-name="animation-name"><strong>animation-name</strong> : 애니메이션 keyframe 이름을 설정합니다.</li>
<li data-name="animation-play-state"><strong>animation-play-state</strong> : 애니메이션 진행상태를 설정합니다.</li>
<li data-name="animation-timing-function"><strong>animation-timing-function</strong> : 애니메이션 움직임의
    속도를 설정합니다.</li>

<li data-name="backdrop-filter"><strong>backdrop-filter</strong> : 배경에 그래픽 효과를 설정합니다.</li>
<li data-name="backface-visibility"><strong>backface-visibility</strong> : 요소의 뒷면을 설정합니다.</li>
<li data-name="background-attachment"><strong>background-attachment</strong> : 배경 이미지의 고정 여부를 설정합니다.
</li>
<li data-name="background-blend-mode"><strong>background-blend-mode</strong> : 배경을 혼합했을 때의 상태를
    설정합니다.</li>
<li data-name="background-clip"><strong>background-clip</strong> : 백그라운드 이미지의 위치 기준점을 설정하기 위한 속성입니다.
</li>
<li data-name="background-color"><strong>background-color</strong> : 백그라운드 색을 설정합니다.</li>
<li data-name="background-image"><strong>background-image</strong> : 백그라운드 이미지 및 배경 속성을 설정합니다.</li>
<li data-name="background-origin"><strong>background-origin</strong> : 백그라운드 이미지의 위치 기준점을 설정하기 위한
    속성입니다.</li>
<li data-name="background-position"><strong>background-position</strong> : 백그라운드 이미지의 위치 영역을 설정합니다.
</li>
<li data-name="background-repeat"><strong>background-repeat</strong> : 백그라운드 이미지 반복 여부를 설정합니다.</li>
<li data-name="background-size"><strong>background-size</strong> : 백그라운드 이미지 사이즈를 설정합니다.</li>
<li data-name="background"><strong>background</strong> : 백그라운드 속성을 일괄적으로 설정합니다.</li>
<li data-name="border"><strong>border</strong> : 테두리 속성을 일괄적으로 설정합니다.</li>
<li data-name="border-bottom"><strong>border-bottom</strong> : 테두리 아래쪽 속성을 일괄적으로 설정합니다.</li>
<li data-name="border-bottom-color"><strong>border-bottom-color</strong> : 테두리 아래쪽 색 속성을 설정합니다.</li>
<li data-name="border-bottom-left-radius"><strong>border-bottom-left-radius</strong> : 아래부분 왼쪽 모서리
    굴곡을 설정합니다.</li>
<li data-name="border-bottom-right-radius"><strong>border-bottom-right-radius</strong> : 아래부분 오른쪽
    모서리 굴곡을 설정합니다.</li>
<li data-name="border-bottom-style"><strong>border-bottom-style</strong> : 테두리 아래쪽 스타일 속성을 설정합니다.
</li>
<li data-name="border-bottom-width"><strong>border-bottom-width</strong> : 테두리 아래쪽 두께 속성을 설정합니다.
</li>
<li data-name="border-collapse"><strong>border-collapse</strong> : 테이블의 테두리 분리 여부를 설정합니다.</li>
<li data-name="border-color"><strong>border-color</strong> : 테두리 색 속성을 설정합니다.</li>
<li data-name="border-image"><strong>border-image</strong> : 테두리 이미지 속성을 설정합니다.</li>
<li data-name="border-image-outset"><strong>border-image-outset</strong> : 테두리 이미지 간격 속성을 설정합니다.
</li>
<li data-name="border-image-repeat"><strong>border-image-repeat</strong> : 테두리 이미지 반복 속성을 설정합니다.
</li>
<li data-name="border-image-slice"><strong>border-image-slice</strong> : 테두리 이미지 크기 속성을 설정합니다.</li>
<li data-name="border-image-source"><strong>border-image-source</strong> : 테두리 이미지 경로 속성을 설정합니다.
</li>
<li data-name="border-image-width"><strong>border-image-width</strong> : 테두리 이미지 두께 속성을 설정합니다.</li>
<li data-name="border-left"><strong>border-left</strong> : 테두리 왼쪽 속성을 일괄적으로 설정합니다.</li>
<li data-name="border-left-color"><strong>border-left-color</strong> : 테두리 왼쪽 색 속성을 설정합니다.</li>
<li data-name="border-left-style"><strong>border-left-style</strong> : 테두리 왼쪽 스타일 속성을 설정합니다.</li>
<li data-name="border-left-width"><strong>border-left-width</strong> : 테두리 왼쪽 두께 속성을 설정합니다.</li>
<li data-name="border-radius"><strong>border-radius</strong> : 모서리 굴곡을 설정합니다.</li>
<li data-name="border-right"><strong>border-right</strong> : 테두리 오른쪽 속성을 일괄적으로 설정합니다.</li>
<li data-name="border-right-color"><strong>border-right-color</strong> : 테두리 오른쪽 색 속성을 설정합니다.</li>
<li data-name="border-right-style"><strong>border-right-style</strong> : 테두리 오른쪽 스타일 속성을 설정합니다.</li>
<li data-name="border-right-width"><strong>border-right-width</strong> : 테두리 오른쪽 두께 속성을 설정합니다.</li>
<li data-name="border-spacing"><strong>border-spacing</strong> : 테이블의 테두리 간격을 설정합니다.</li>
<li data-name="border-style"><strong>border-style</strong> : 테두리 스타일 속성을 설정합니다.</li>
<li data-name="border-top"><strong>border-top</strong> : 테두리 위쪽 속성을 일괄적으로 설정합니다.</li>
<li data-name="border-top-color"><strong>border-top-color</strong> : 테두리 위쪽 색 속성을 설정합니다.</li>
<li data-name="border-top-left-radius"><strong>border-top-left-radius</strong> : 윗부분 왼쪽 모서리 굴곡을
    설정합니다.</li>
<li data-name="border-top-right-radius"><strong>border-top-right-radius</strong> : 윗부분 오른쪽 모서리 굴곡을
    설정합니다.</li>
<li data-name="border-top-style"><strong>border-top-style</strong> : 테두리 위쪽 스타일 속성을 설정합니다.</li>
<li data-name="border-top-width"><strong>border-top-width</strong> : 테두리 위쪽 두께 속성을 설정합니다.</li>
<li data-name="border-width"><strong>border-width</strong> : 테두리 두께 속성을 설정합니다.</li>
<li data-name="bottom"><strong>bottom</strong> : 위치 요소의 아래쪽 속성을 설정합니다.</li>
<li data-name="box-decoration-break"><strong>box-decoration-break</strong> : 컬럼 및 줄바꿈시 테두리와 패딩의 방식을
    설정합니다.</li>
<li data-name="box-shadow"><strong>box-shadow</strong> : 박스 요소의 그림자를 설정합니다.</li>
<li data-name="box-sizing"><strong>box-sizing</strong> : 요소 크기에 패딩 포함 여부를 설정합니다.</li>

<li data-name="caption-side"><strong>caption-side</strong> : caption의 위치를 설정합니다.</li>
<li data-name="caret-color"><strong>caret-color</strong> : input의 커서 색을 정의합니다.</li>
<li data-name="clear"><strong>clear</strong> : float 요소의 성질을 차단합니다.</li>
<li data-name="clip"><strong>clip</strong> : 보이는 영역을 설정합니다.</li>
<li data-name="color"><strong>color</strong> : 글씨 색을 설정합니다.</li>
<li data-name="column-count"><strong>column-count</strong> : 컬럼의 수를 정의합니다.</li>
<li data-name="column-fill"><strong>column-fill</strong> : 열의 지정방법을 정의합니다.</li>
<li data-name="column-gap"><strong>column-gap</strong> : 컬럼의 간격을 정의합니다.</li>
<li data-name="column-rule"><strong>column-rule</strong> : 컬럼 라인의 가로값, 스타일, 컬러를 정의합니다.</li>
<li data-name="column-rule-color"><strong>column-rule-color</strong> : 컬럼의 라인 색을 정의합니다.</li>
</ul>
</div>
</div>
</main>
<!-- //main -->
`}

        </Highlight>
        </details>
        <details>
            <summary>SearchEffect01 - Script</summary>
            <Highlight className="javascript">
{`
1. 요소 선택 : document.querySelectorAll(".search__list ul li"): HTML 문서에서 클래스가 "search__list"인 요소 하위에 있는 ul 태그 안의 li 태그들을 모두 선택합니다.
document.querySelector(".search__info .num"): HTML 문서에서 클래스가 "search__info"인 요소 안의 클래스가 "num"인 요소를 선택합니다.
document.querySelector(".search__box input"): HTML 문서에서 클래스가 "search__box"인 요소 안의 input 태그를 선택합니다.

2. 검색 결과 개수 표시 : searchInfoNum.textContent = searchList.length;: 선택된 li 요소들의 개수를 계산하여 검색 결과 개수를 표시합니다.

3. 검색어 입력 이벤트 처리 : searchBox.addEventListener("keyup", () => { ... }): 검색 상자(input)에 사용자가 키를 누를 때마다 이벤트가 발생하도록 리스너를 등록합니다.
const searchWord = searchBox.value;: 사용자가 입력한 검색어를 가져옵니다.

4. 검색어에 따른 요소 필터링 : searchList.forEach(list => { ... }): 각 li 요소에 대해 반복문을 실행합니다.
const cssName = list.dataset.name;: 각 li 요소의 data-name 속성 값을 가져옵니다.
if (cssName.search(searchWord)) { ... }: 검색어가 데이터에 포함되어 있는지 확인합니다.
cssName.search(searchWord)가 0 또는 양수면 데이터가 있음을 나타냅니다.
0 미만이면 데이터가 없음을 나타냅니다.
list.classList.add("hide") 또는 list.classList.remove("hide"): 데이터가 없으면 hide 클래스를 추가하여 숨기거나, 데이터가 있으면 hide 클래스를 제거하여 보여줍니다.

5. 이 코드는 간단한 검색 기능을 가진 웹 페이지에서 검색어에 따라 동적으로 결과를 필터링하고 화면에 보여주는 역할을 합니다.
`}
{`
<script>
const searchList = document.querySelectorAll(".search__list ul li");
const searchInfoNum = document.querySelector(".search__info .num");
const searchBox = document.querySelector(".search__box input");

// 전체 갯수 구하기
searchInfoNum.textContent = searchList.length;

// 검색 영역
searchBox.addEventListener("keyup", () => {
const searchWord = searchBox.value;     //사용자가 입력한 키워드

searchList.forEach(list => {
const cssName = list.dataset.name;

// console.log(cssName.indexOf("animation"))

if (cssName.search(searchWord)) {
// 데이터가 없으면 --> 숨김  // --1
list.classList.add("hide");
} else {
// 데이터가 있으면  --> 보여줌  // 0
list.classList.remove("hide");
}
})
})
</script>
`}

            </Highlight>
        </details>
        </p>
    </div>
    <div className="item__inner">
        <p className="desc">
        <h3>SearchEffect02 - include()를 이용하여 CSS 속성 및 타입 검색하기</h3>
        <details>
        <summary>main.html</summary> 
        <Highlight className="javascript"> 
{` <main id="main">
<div class="search__wrap">
<div class="search__title">
<span>include()를 이용하여 검색하기</span>
<h1>CSS 속성 및 타입 검색하기</h1>
</div>
<div class="search__box">
<label for="searchBox">검색하기</label>
<input type="text" id="searchBox" name="searchBox" placeholder="CSS 속성 및 유형을 입력해주세요!">
<p>CSS에는 <em>레이아웃</em>, <em>애니메이션</em>, <em>백그라운드</em>, <em>그래픽</em>, <em>선</em> 유형이 있습니다.</p>
</div>
<div class="search__info">
<div>CSS 속성 갯수 : <span class="num">0</span>개</div>
</div>
<div class="search__list">
<ul>
<li data-type="레이아웃" data-name="align-content"><strong>align-content</strong> : 콘텐츠 아이템의 상하관계 정렬 상태를
    설정합니다.</li>
<li data-type="레이아웃" data-name="align-items"><strong>align-items</strong> : 콘텐츠 아이템의 내부 상하관계 정렬 상태를
    설정합니다.</li>
<li data-type="레이아웃" data-name="align-self"><strong>align-self</strong> : 개별적인 콘텐츠 아이템의 정렬 상태를
    설정합니다.</li>
<li data-type="기타" data-name="all"><strong>all</strong> : 요소의 속성을 초기화 또는 상속을 설정합니다.</li>
<li data-type="애니메이션" data-name="animation"><strong>animation</strong> : 애니메이션과 관련된 속성을 일괄적으로 설정합니다.
</li>
<li data-type="애니메이션" data-name="animation-delay"><strong>animation-delay</strong> : 애니메이션 지연 시간을
    설정합니다.</li>
<li data-type="애니메이션" data-name="animation-direction"><strong>animation-direction</strong> : 애니메이션
    움직임 방향을 설정합니다.</li>
<li data-type="애니메이션" data-name="animation-duration"><strong>animation-duration</strong> : 애니메이션 움직임
    시간을 설정합니다.</li>
<li data-type="애니메이션" data-name="animation-fill-mode"><strong>animation-fill-mode</strong> : 애니메이션이
    끝난 후의 상태를 설정합니다.</li>
<li data-type="애니메이션" data-name="animation-iteration-count">
    <strong>animation-iteration-count</strong> : 애니메이션 반복 횟수 설정합니다.</li>
<li data-type="애니메이션" data-name="animation-name"><strong>animation-name</strong> : 애니메이션 keyframe
    이름을 설정합니다.</li>
<li data-type="애니메이션" data-name="animation-play-state"><strong>animation-play-state</strong> : 애니메이션
    진행상태를 설정합니다.</li>
<li data-type="애니메이션" data-name="animation-timing-function">
    <strong>animation-timing-function</strong> : 애니메이션 움직임의 속도를 설정합니다.</li>

<li data-type="그래픽" data-name="backdrop-filter"><strong>backdrop-filter</strong> : 배경에 그래픽 효과를
    설정합니다.</li>
<li data-type="백그라운드" data-name="backface-visibility"><strong>backface-visibility</strong> : 요소의 뒷면을
    설정합니다.</li>
<li data-type="백그라운드" data-name="background-attachment"><strong>background-attachment</strong> : 배경
    이미지의 고정 여부를 설정합니다.</li>
<li data-type="백그라운드" data-name="background-blend-mode"><strong>background-blend-mode</strong> : 배경을
    혼합했을 때의 상태를 설정합니다.</li>
<li data-type="백그라운드" data-name="background-clip"><strong>background-clip</strong> : 백그라운드 이미지의 위치
    기준점을 설정하기 위한 속성입니다.</li>
<li data-type="백그라운드" data-name="background-color"><strong>background-color</strong> : 백그라운드 색을
    설정합니다.</li>
<li data-type="백그라운드" data-name="background-image"><strong>background-image</strong> : 백그라운드 이미지 및
    배경 속성을 설정합니다.</li>
<li data-type="백그라운드" data-name="background-origin"><strong>background-origin</strong> : 백그라운드 이미지의
    위치 기준점을 설정하기 위한 속성입니다.</li>
<li data-type="백그라운드" data-name="background-position"><strong>background-position</strong> : 백그라운드
    이미지의 위치 영역을 설정합니다.</li>
<li data-type="백그라운드" data-name="background-repeat"><strong>background-repeat</strong> : 백그라운드 이미지
    반복 여부를 설정합니다.</li>
<li data-type="백그라운드" data-name="background-size"><strong>background-size</strong> : 백그라운드 이미지 사이즈를
    설정합니다.</li>
<li data-type="백그라운드" data-name="background"><strong>background</strong> : 백그라운드 속성을 일괄적으로 설정합니다.
</li>
<li data-type="선" data-name="border"><strong>border</strong> : 테두리 속성을 일괄적으로 설정합니다.</li>
<li data-type="선" data-name="border-bottom"><strong>border-bottom</strong> : 테두리 아래쪽 속성을 일괄적으로
    설정합니다.</li>
<li data-type="선" data-name="border-bottom-color"><strong>border-bottom-color</strong> : 테두리 아래쪽 색
    속성을 설정합니다.</li>
<li data-type="선" data-name="border-bottom-left-radius"><strong>border-bottom-left-radius</strong> :
    아래부분 왼쪽 모서리 굴곡을 설정합니다.</li>
<li data-type="선" data-name="border-bottom-right-radius"><strong>border-bottom-right-radius</strong>
    : 아래부분 오른쪽 모서리 굴곡을 설정합니다.</li>
<li data-type="선" data-name="border-bottom-style"><strong>border-bottom-style</strong> : 테두리 아래쪽 스타일
    속성을 설정합니다.</li>
<li data-type="선" data-name="border-bottom-width"><strong>border-bottom-width</strong> : 테두리 아래쪽 두께
    속성을 설정합니다.</li>
<li data-type="선" data-name="border-collapse"><strong>border-collapse</strong> : 테이블의 테두리 분리 여부를
    설정합니다.</li>
<li data-type="선" data-name="border-color"><strong>border-color</strong> : 테두리 색 속성을 설정합니다.</li>
<li data-type="선" data-name="border-image"><strong>border-image</strong> : 테두리 이미지 속성을 설정합니다.</li>
<li data-type="선" data-name="border-image-outset"><strong>border-image-outset</strong> : 테두리 이미지 간격
    속성을 설정합니다.</li>
<li data-type="선" data-name="border-image-repeat"><strong>border-image-repeat</strong> : 테두리 이미지 반복
    속성을 설정합니다.</li>
<li data-type="선" data-name="border-image-slice"><strong>border-image-slice</strong> : 테두리 이미지 크기
    속성을 설정합니다.</li>
<li data-type="선" data-name="border-image-source"><strong>border-image-source</strong> : 테두리 이미지 경로
    속성을 설정합니다.</li>
<li data-type="선" data-name="border-image-width"><strong>border-image-width</strong> : 테두리 이미지 두께
    속성을 설정합니다.</li>
<li data-type="선" data-name="border-left"><strong>border-left</strong> : 테두리 왼쪽 속성을 일괄적으로 설정합니다.
</li>
<li data-type="선" data-name="border-left-color"><strong>border-left-color</strong> : 테두리 왼쪽 색 속성을
    설정합니다.</li>
<li data-type="선" data-name="border-left-style"><strong>border-left-style</strong> : 테두리 왼쪽 스타일 속성을
    설정합니다.</li>
<li data-type="선" data-name="border-left-width"><strong>border-left-width</strong> : 테두리 왼쪽 두께 속성을
    설정합니다.</li>
<li data-type="선" data-name="border-radius"><strong>border-radius</strong> : 모서리 굴곡을 설정합니다.</li>
<li data-type="선" data-name="border-right"><strong>border-right</strong> : 테두리 오른쪽 속성을 일괄적으로 설정합니다.
</li>
<li data-type="선" data-name="border-right-color"><strong>border-right-color</strong> : 테두리 오른쪽 색 속성을
    설정합니다.</li>
<li data-type="선" data-name="border-right-style"><strong>border-right-style</strong> : 테두리 오른쪽 스타일
    속성을 설정합니다.</li>
<li data-type="선" data-name="border-right-width"><strong>border-right-width</strong> : 테두리 오른쪽 두께
    속성을 설정합니다.</li>
<li data-type="선" data-name="border-spacing"><strong>border-spacing</strong> : 테이블의 테두리 간격을 설정합니다.
</li>
<li data-type="선" data-name="border-style"><strong>border-style</strong> : 테두리 스타일 속성을 설정합니다.</li>
<li data-type="선" data-name="border-top"><strong>border-top</strong> : 테두리 위쪽 속성을 일괄적으로 설정합니다.</li>
<li data-type="선" data-name="border-top-color"><strong>border-top-color</strong> : 테두리 위쪽 색 속성을
    설정합니다.</li>
<li data-type="선" data-name="border-top-left-radius"><strong>border-top-left-radius</strong> : 윗부분
    왼쪽 모서리 굴곡을 설정합니다.</li>
<li data-type="선" data-name="border-top-right-radius"><strong>border-top-right-radius</strong> : 윗부분
    오른쪽 모서리 굴곡을 설정합니다.</li>
<li data-type="선" data-name="border-top-style"><strong>border-top-style</strong> : 테두리 위쪽 스타일 속성을
    설정합니다.</li>
<li data-type="선" data-name="border-top-width"><strong>border-top-width</strong> : 테두리 위쪽 두께 속성을
    설정합니다.</li>
<li data-type="선" data-name="border-width"><strong>border-width</strong> : 테두리 두께 속성을 설정합니다.</li>
<li data-type="기타" data-name="bottom"><strong>bottom</strong> : 위치 요소의 아래쪽 속성을 설정합니다.</li>
<li data-type="기타" data-name="box-decoration-break"><strong>box-decoration-break</strong> : 컬럼 및
    줄바꿈시 테두리와 패딩의 방식을 설정합니다.</li>
<li data-type="기타" data-name="box-shadow"><strong>box-shadow</strong> : 박스 요소의 그림자를 설정합니다.</li>
<li data-type="기타" data-name="box-sizing"><strong>box-sizing</strong> : 요소 크기에 패딩 포함 여부를 설정합니다.</li>
</ul>
</div>
</div>
</main>
<!-- //main -->
`}

        </Highlight>
        </details>
        <details>
            <summary>SearchEffect02 - Script</summary>
            <Highlight className="javascript">
{`
1. 요소 선택 : document.querySelectorAll(".search__list ul li"): HTML 문서에서 클래스가 "search__list"인 요소 하위에 있는 ul 태그 안의 li 태그들을 모두 선택합니다.
document.querySelector(".search__info .num"): HTML 문서에서 클래스가 "search__info"인 요소 안의 클래스가 "num"인 요소를 선택합니다.
document.querySelector(".search__box input"): HTML 문서에서 클래스가 "search__box"인 요소 안의 input 태그를 선택합니다.

2. searchInfoNum.textContent = searchList.length;: 선택된 li 요소들의 개수를 계산하여 검색 결과 개수를 표시합니다.

3. 검색어 입력 이벤트 처리 : searchBox.addEventListener("keyup", () => { ... }): 검색 상자(input)에 사용자가 키를 누를 때마다 이벤트가 발생하도록 리스너를 등록합니다.
const searchWord = searchBox.value;: 사용자가 입력한 검색어를 가져옵니다.

4. 검색어 입력 이벤트 처리 : searchBox.addEventListener("keyup", () => { ... }): 검색 상자(input)에 사용자가 키를 누를 때마다 이벤트가 발생하도록 리스너를 등록합니다. 
const searchWord = searchBox.value;: 사용자가 입력한 검색어를 가져옵니다.

5. 이 코드는 알파벳을 클릭하면 해당 알파벳으로 시작하는 CSS 속성들을 보여주는 기능과 전체 보기 버튼을 통해 모든 CSS 속성을 다시 보여주는 기능을 구현한 것입니다.

`}
{`
<script>
const searchList = document.querySelectorAll(".search__list ul li");
const searchInfoNum = document.querySelector(".search__info .num");
const searchBox = document.querySelector(".search__box input");

// 전체 갯수 구하기
searchInfoNum.textContent = searchList.length;

// 검색 영역 
searchBox.addEventListener("keyup", () => {
const searchWord = searchBox.value;

searchList.forEach(list => {
const cssType = list.dataset.type;                          // CSS 유형 모든 값
const cssName = list.querySelector("strong").innerText;     // CSS 속성 모든 값 

if (cssName.includes(searchWord) || cssType.includes(searchWord)) {
list.classList.remove("hide");
} else {
list.classList.add("hide");
}
})

});

</script>
`}

            </Highlight>
        </details>
        </p>
    </div>
    <div className="item__inner">
        <p className="desc">
        <h3>SearchEffect03 - charAt()를 이용하여 CSS 속성 첫글자 검색하기</h3>
        <details>
        <summary>main.html</summary> 
        <Highlight className="javascript"> 
{`  <main id="main">
<div class="search__wrap">
<div class="search__title">
<span>charAt()를 이용하여 검색하기</span>
<h1>CSS 속성 첫글자 검색하기</h1>
</div>
<div class="search__select">
<span>a</span>
<span>b</span>
<span>c</span>
<span>d</span>
<span>e</span>
<span>f</span>
<span>g</span>
<span>all</span>
</div>
<div class="search__info">
<div>CSS 속성 갯수 : <span class="num">0</span>개</div>
</div>
<div class="search__list">
<ul>
<li><strong>align-content</strong> : 콘텐츠 아이템의 상하관계 정렬 상태를 설정합니다.</li>
<li><strong>align-items</strong> : 콘텐츠 아이템의 내부 상하관계 정렬 상태를 설정합니다.</li>
<li><strong>align-self</strong> : 개별적인 콘텐츠 아이템의 정렬 상태를 설정합니다.</li>
<li><strong>all</strong> : 요소의 속성을 초기화 또는 상속을 설정합니다.</li>
<li><strong>animation</strong> : 애니메이션과 관련된 속성을 일괄적으로 설정합니다.</li>
<li><strong>animation-delay</strong> : 애니메이션 지연 시간을 설정합니다.</li>
<li><strong>animation-direction</strong> : 애니메이션 움직임 방향을 설정합니다.</li>
<li><strong>animation-duration</strong> : 애니메이션 움직임 시간을 설정합니다.</li>
<li><strong>animation-fill-mode</strong> : 애니메이션이 끝난 후의 상태를 설정합니다.</li>
<li><strong>animation-iteration-count</strong> : 애니메이션 반복 횟수 설정합니다.</li>
<li><strong>animation-name</strong> : 애니메이션 keyframe 이름을 설정합니다.</li>
<li><strong>animation-play-state</strong> : 애니메이션 진행상태를 설정합니다.</li>
<li><strong>animation-timing-function</strong> : 애니메이션 움직임의 속도를 설정합니다.</li>

<li><strong>backdrop-filter</strong> : 배경에 그래픽 효과를 설정합니다.</li>
<li><strong>backface-visibility</strong> : 요소의 뒷면을 설정합니다.</li>
<li><strong>background-attachment</strong> : 배경 이미지의 고정 여부를 설정합니다.</li>
<li><strong>background-blend-mode</strong> : 배경을 혼합했을 때의 상태를 설정합니다.</li>
<li><strong>background-clip</strong> : 백그라운드 이미지의 위치 기준점을 설정하기 위한 속성입니다.</li>
<li><strong>background-color</strong> : 백그라운드 색을 설정합니다.</li>
<li><strong>background-image</strong> : 백그라운드 이미지 및 배경 속성을 설정합니다.</li>
<li><strong>background-origin</strong> : 백그라운드 이미지의 위치 기준점을 설정하기 위한 속성입니다.</li>
<li><strong>background-position</strong> : 백그라운드 이미지의 위치 영역을 설정합니다.</li>
<li><strong>background-repeat</strong> : 백그라운드 이미지 반복 여부를 설정합니다.</li>
<li><strong>background-size</strong> : 백그라운드 이미지 사이즈를 설정합니다.</li>
<li><strong>background</strong> : 백그라운드 속성을 일괄적으로 설정합니다.</li>
<li><strong>border</strong> : 테두리 속성을 일괄적으로 설정합니다.</li>
<li><strong>border-bottom</strong> : 테두리 아래쪽 속성을 일괄적으로 설정합니다.</li>
<li><strong>border-bottom-color</strong> : 테두리 아래쪽 색 속성을 설정합니다.</li>
<li><strong>border-bottom-left-radius</strong> : 아래부분 왼쪽 모서리 굴곡을 설정합니다.</li>
<li><strong>border-bottom-right-radius</strong> : 아래부분 오른쪽 모서리 굴곡을 설정합니다.</li>
<li><strong>border-bottom-style</strong> : 테두리 아래쪽 스타일 속성을 설정합니다.</li>
<li><strong>border-bottom-width</strong> : 테두리 아래쪽 두께 속성을 설정합니다.</li>
<li><strong>border-collapse</strong> : 테이블의 테두리 분리 여부를 설정합니다.</li>
<li><strong>border-color</strong> : 테두리 색 속성을 설정합니다.</li>
<li><strong>border-image</strong> : 테두리 이미지 속성을 설정합니다.</li>
<li><strong>border-image-outset</strong> : 테두리 이미지 간격 속성을 설정합니다.</li>
<li><strong>border-image-repeat</strong> : 테두리 이미지 반복 속성을 설정합니다.</li>
<li><strong>border-image-slice</strong> : 테두리 이미지 크기 속성을 설정합니다.</li>
<li><strong>border-image-source</strong> : 테두리 이미지 경로 속성을 설정합니다.</li>
<li><strong>border-image-width</strong> : 테두리 이미지 두께 속성을 설정합니다.</li>
<li><strong>border-left</strong> : 테두리 왼쪽 속성을 일괄적으로 설정합니다.</li>
<li><strong>border-left-color</strong> : 테두리 왼쪽 색 속성을 설정합니다.</li>
<li><strong>border-left-style</strong> : 테두리 왼쪽 스타일 속성을 설정합니다.</li>
<li><strong>border-left-width</strong> : 테두리 왼쪽 두께 속성을 설정합니다.</li>
<li><strong>border-radius</strong> : 모서리 굴곡을 설정합니다.</li>
<li><strong>border-right</strong> : 테두리 오른쪽 속성을 일괄적으로 설정합니다.</li>
<li><strong>border-right-color</strong> : 테두리 오른쪽 색 속성을 설정합니다.</li>
<li><strong>border-right-style</strong> : 테두리 오른쪽 스타일 속성을 설정합니다.</li>
<li><strong>border-right-width</strong> : 테두리 오른쪽 두께 속성을 설정합니다.</li>
<li><strong>border-spacing</strong> : 테이블의 테두리 간격을 설정합니다.</li>
<li><strong>border-style</strong> : 테두리 스타일 속성을 설정합니다.</li>
<li><strong>border-top</strong> : 테두리 위쪽 속성을 일괄적으로 설정합니다.</li>
<li><strong>border-top-color</strong> : 테두리 위쪽 색 속성을 설정합니다.</li>
<li><strong>border-top-left-radius</strong> : 윗부분 왼쪽 모서리 굴곡을 설정합니다.</li>
<li><strong>border-top-right-radius</strong> : 윗부분 오른쪽 모서리 굴곡을 설정합니다.</li>
<li><strong>border-top-style</strong> : 테두리 위쪽 스타일 속성을 설정합니다.</li>
<li><strong>border-top-width</strong> : 테두리 위쪽 두께 속성을 설정합니다.</li>
<li><strong>border-width</strong> : 테두리 두께 속성을 설정합니다.</li>
<li><strong>bottom</strong> : 위치 요소의 아래쪽 속성을 설정합니다.</li>
<li><strong>box-decoration-break</strong> : 컬럼 및 줄바꿈시 테두리와 패딩의 방식을 설정합니다.</li>
<li><strong>box-shadow</strong> : 박스 요소의 그림자를 설정합니다.</li>
<li><strong>box-sizing</strong> : 요소 크기에 패딩 포함 여부를 설정합니다.</li>

<li><strong>caption-side</strong> : caption의 위치를 설정합니다.</li>
<li><strong>caret-color</strong> : input의 커서 색을 정의합니다.</li>
<li><strong>clear</strong> : float 요소의 성질을 차단합니다.</li>
<li><strong>clip</strong> : 보이는 영역을 설정합니다.</li>
<li><strong>color</strong> : 글씨 색을 설정합니다.</li>
<li><strong>column-count</strong> : 컬럼의 수를 정의합니다.</li>
<li><strong>column-fill</strong> : 열의 지정방법을 정의합니다.</li>
<li><strong>column-gap</strong> : 컬럼의 간격을 정의합니다.</li>
<li><strong>column-rule</strong> : 컬럼 라인의 가로값, 스타일, 컬러를 정의합니다.</li>
<li><strong>column-rule-color</strong> : 컬럼의 라인 색을 정의합니다.</li>
<li><strong>direction</strong> : 문장의 방향을 설정합니다.</li>
<li><strong>display</strong> : 요소의 성질을 정의합니다.</li>
<li><strong>empty-cells</strong> : 테이블의 빈요소의 속성을 설정합니다.</li>
<li><strong>filter</strong> : 그래픽 효과를 설정합니다.</li>
<li><strong>flex</strong> : 콘텐츠의 성질을 flex로 정의합니다.</li>
<li><strong>grid-template-columns</strong> : 가로 컬럼의 크기와 위치 설정합니다.</li>
</ul>
</div>
</div>
</main>
<!-- //main -->
`}

        </Highlight>
        </details>
        <details>
            <summary>SearchEffect03 - Script</summary>
            <Highlight className="javascript">
{`
1. 요소 선택 : 
document.querySelectorAll(".search__list ul li"): HTML 문서에서 클래스가 "search__list"인 요소 하위에 있는 ul 태그 안의 li 태그들을 모두 선택합니다.
document.querySelectorAll(".search__select span"): HTML 문서에서 클래스가 "search__select"인 요소 안의 span 태그들을 모두 선택합니다.
document.querySelector(".search__info"): HTML 문서에서 클래스가 "search__info"인 요소를 선택합니다.
document.querySelector(".search__box input"): HTML 문서에서 클래스가 "search__box"인 요소 안의 input 태그를 선택합니다.
document.getElementById("showAll"): HTML 문서에서 id가 "showAll"인 요소를 선택합니다.

2. 전체 갯수 표시 : searchInfo.textContent = "CSS 속성의 갯수는 " + searchList.length + "개 입니다.";: 선택된 li 요소들의 개수를 계산하여 검색 결과 개수를 표시합니다.

3. 알파벳 필터링 : searchSelect.forEach(el => { ... }): 각 알파벳(span) 요소에 대해 반복문을 실행합니다.
el.addEventListener("click", () => { ... }): 알파벳(span)이 클릭되면 해당 이벤트 리스너를 실행합니다.
const searchWord = el.innerText;: 사용자가 클릭한 알파벳을 가져옵니다.
searchList.forEach(el => { ... }): 각 li 요소에 대해 반복문을 실행합니다.
const cssName = el.querySelector("strong").innerText;: 각 li 요소 내의 strong 태그 안의 텍스트를 가져옵니다.
if (searchWord.charAt(0) === cssName.charAt(0)) { ... }: 알파벳 첫 글자가 CSS 속성 이름의 첫 글자와 일치하는지 확인하고, 일치하면 해당 li 요소를 보여주고 count를 증가시킵니다.
count = 0;: count를 초기화하여 다음 알파벳에 대한 카운트를 새로 시작합니다.
searchInfo.textContent = searchWord.charAt(0) + "로 시작하는 속성은 " + count + "개입니다.";: 검색 결과를 표시합니다.

4. 전체 보기 버튼 처리 : showAllButton.addEventListener("click", () => { ... }): "showAll" 버튼이 클릭되면 해당 이벤트 리스너를 실행합니다.
searchList.forEach(el => { el.classList.remove("hide"); });: 모든 li 요소를 보여줍니다.
searchInfo.textContent = "CSS 속성의 갯수는 " + searchList.length + "개입니다.";: 검색 결과 개수를 전체 개수로 업데이트합니다.

`}
{`
<script>
const searchList = document.querySelectorAll(".search__list ul li");
const searchSelect = document.querySelectorAll(".search__select span");
const searchInfo = document.querySelector(".search__info");
const searchBox = document.querySelector(".search__box input");

let count = 0;

// 전체 갯수 구하기
searchInfo.textContent = "CSS 속성의 갯수는 " + searchList.length + "개 입니다.";

searchSelect.forEach(el => {
el.addEventListener("click", () => {
const searchWord = el.innerText;        //사용자가 클릭한 알파벳
// console.log(searchWord);

searchList.forEach(el => {
const cssName = el.querySelector("strong").innerText;       //CSS 속성 텍스트
// console.log(cssName)

//알파벳 첫글자 == CSS 속성의 첫글자
if (searchWord.charAt(0) === cssName.charAt(0)) {
el.classList.remove("hide");
count++;
} else {
el.classList.add("hide");
}
searchInfo.textContent = searchWord.charAt(0) + "로 시작하는 속성은 " + count + "개입니다.";
});
count = 0;
});
});

// 전체 보기 버튼
const showAllButton = document.getElementById("showAll");

showAllButton.addEventListener("click", () => {
searchList.forEach(el => {
el.classList.remove("hide");
});
searchInfo.textContent = "CSS 속성의 갯수는 " + searchList.length + "개입니다.";
});
</script>
`}

            </Highlight>
        </details>
        </p>
    </div>
    <div className="item__inner">
        <p className="desc">
        <h3>SearchEffect04 - find()를 이용하여 CSS 속성 설명 검색하기</h3>
        <details>
        <summary>main.html</summary> 
        <Highlight className="javascript"> 
{`  <main id="main">
<div class="search__wrap">
<div class="search__title">
<span>find()를 이용하여 검색하기</span>
<h1>CSS 속성 설명 검색하기</h1>
</div>
<div class="search__box">
<!-- <label for="searchBox">검색</label> -->
<input type="text" id="searchBox" name="searchBox" placeholder="CSS 속성을 검색하면 설명이 나옵니다.">
<button id="searchButton" type="button">검색</button>
<div class="search__box__result">
설명이 나오는 곳!
</div>
</div>
<div class="search__list">
</div>
</div>
</main>
<!-- //main -->
`}

        </Highlight>
        </details>
        <details>
            <summary>SearchEffect04 - Script</summary>
            <Highlight className="javascript">
{`
1. CSS 속성 배열 생성 : const cssProperty = [...];: CSS 속성과 설명을 담은 배열을 생성합니다.

2. 요소 선택 : 
const searchList = document.querySelector(".search__list");: HTML 문서에서 클래스가 "search__list"인 요소를 선택합니다.
const searchSelect = document.querySelectorAll(".search__select span");: HTML 문서에서 클래스가 "search__select"인 span 태그들을 모두 선택합니다.
const searchInfo = document.querySelector(".search__info");: HTML 문서에서 클래스가 "search__info"인 요소를 선택합니다.
const searchBox = document.querySelector(".search__box input");: HTML 문서에서 클래스가 "search__box"인 요소 안의 input 태그를 선택합니다.
const searchBoxResult = document.querySelector(".search__box__result");: HTML 문서에서 클래스가 "search__box__result"인 요소를 선택합니다.
const searchButton = document.getElementById("searchButton");: HTML 문서에서 id가 "searchButton"인 요소를 선택합니다.

3. CSS 속성 출력 : cssProperty.map((element, index) => { ... });: cssProperty 배열을 순회하면서 각 CSS 속성을 HTML에 추가합니다.

4. 검색 및 속성 클릭 기능 : function findProperty(searchKeyword) { ... }: 주어진 검색어에 해당하는 CSS 속성을 찾아 화면에 표시하고, 클릭한 속성에 대한 설명을 강조하는 함수입니다.
document.querySelectorAll(".search__list span").forEach(span => { ... });: 각 속성에 대한 이벤트 리스너를 등록하여 속성을 클릭할 때 해당 함수를 호출합니다.
searchButton.addEventListener("click", () => { ... });: 검색 버튼을 클릭할 때 입력된 검색어에 대한 함수를 호출합니다.

5. 이 코드는 사용자가 검색어를 입력하거나 CSS 속성을 클릭할 때 해당 속성의 설명을 동적으로 표시하는 기능을 제공합니다.
`}
{`
<script>
const cssProperty = [
{ name: "align-content", desc: "콘텐츠 아이템의 상하관계 정렬 상태를 설정합니다." },
{ name: "align-items", desc: "콘텐츠 아이템의 내부 상하관계 정렬 상태를 설정합니다." },
{ name: "align-self", desc: "개별적인 콘텐츠 아이템의 정렬 상태를 설정합니다." },
{ name: "all", desc: "요소의 속성을 초기화 또는 상속을 설정합니다." },
{ name: "animation", desc: "애니메이션과 관련된 속성을 일괄적으로 설정합니다." },
{ name: "animation-delay", desc: "애니메이션 지연 시간을 설정합니다." },
{ name: "animation-direction", desc: "애니메이션 움직임 방향을 설정합니다." },
{ name: "animation-duration", desc: "애니메이션 움직임 시간을 설정합니다." },
{ name: "animation-fill-mode", desc: "애니메이션이 끝난 후의 상태를 설정합니다." },
{ name: "animation-iteration-count", desc: "애니메이션 반복 횟수 설정합니다." },
{ name: "animation-name", desc: "애니메이션 keyframe 이름을 설정합니다." },
{ name: "animation-play-state", desc: "애니메이션 진행상태를 설정합니다." },
{ name: "animation-timing-function", desc: "애니메이션 움직임의 속도를 설정합니다." },
{ name: "backdrop-filter", desc: "배경에 그래픽 효과를 설정합니다." },
{ name: "backface-visibility", desc: "요소의 뒷면을 설정합니다." },
{ name: "background-attachment", desc: "배경 이미지의 고정 여부를 설정합니다." },
{ name: "background-blend-mode", desc: "배경을 혼합했을 때의 상태를 설정합니다." },
{ name: "background-clip", desc: "백그라운드 이미지의 위치 기준점을 설정하기 위한 속성입니다." },
{ name: "background-color", desc: "백그라운드 색을 설정합니다." },
{ name: "background-image", desc: "백그라운드 이미지 및 배경 속성을 설정합니다." },
{ name: "background-origin", desc: "백그라운드 이미지의 위치 기준점을 설정하기 위한 속성입니다." },
{ name: "background-position", desc: "백그라운드 이미지의 위치 영역을 설정합니다." },
{ name: "background-repeat", desc: "백그라운드 이미지 반복 여부를 설정합니다." },
{ name: "background-size", desc: "백그라운드 이미지 사이즈를 설정합니다." },
{ name: "background", desc: "백그라운드 속성을 일괄적으로 설정합니다." },
{ name: "border", desc: "테두리 속성을 일괄적으로 설정합니다." },
{ name: "border-bottom", desc: "테두리 아래쪽 속성을 일괄적으로 설정합니다." },
{ name: "border-bottom-color", desc: "테두리 아래쪽 색 속성을 설정합니다." },
{ name: "border-bottom-left-radius", desc: "아래부분 왼쪽 모서리 굴곡을 설정합니다." },
{ name: "border-bottom-right-radius", desc: "아래부분 오른쪽 모서리 굴곡을 설정합니다." },
{ name: "border-bottom-style", desc: "테두리 아래쪽 스타일 속성을 설정합니다." },
{ name: "border-bottom-width", desc: "테두리 아래쪽 두께 속성을 설정합니다." },
{ name: "border-collapse", desc: "테이블의 테두리 분리 여부를 설정합니다." },
{ name: "border-color", desc: "테두리 색 속성을 설정합니다." },
{ name: "border-image", desc: "테두리 이미지 속성을 설정합니다." },
{ name: "border-image-outset", desc: "테두리 이미지 간격 속성을 설정합니다." },
{ name: "border-image-repeat", desc: "테두리 이미지 반복 속성을 설정합니다." },
{ name: "border-image-slice", desc: "테두리 이미지 크기 속성을 설정합니다." },
{ name: "border-image-source", desc: "테두리 이미지 경로 속성을 설정합니다." },
{ name: "border-image-width", desc: "테두리 이미지 두께 속성을 설정합니다." },
{ name: "border-left", desc: "테두리 왼쪽 속성을 일괄적으로 설정합니다." },
{ name: "border-left-color", desc: "테두리 왼쪽 색 속성을 설정합니다." },
{ name: "border-left-style", desc: "테두리 왼쪽 스타일 속성을 설정합니다." },
{ name: "border-left-width", desc: "테두리 왼쪽 두께 속성을 설정합니다." },
{ name: "border-radius", desc: "모서리 굴곡을 설정합니다." },
{ name: "border-right", desc: "테두리 오른쪽 속성을 일괄적으로 설정합니다." },
{ name: "border-right-color", desc: "테두리 오른쪽 색 속성을 설정합니다." },
{ name: "border-right-style", desc: "테두리 오른쪽 스타일 속성을 설정합니다." },
{ name: "border-right-width", desc: "테두리 오른쪽 두께 속성을 설정합니다." },
{ name: "border-spacing", desc: "테이블의 테두리 간격을 설정합니다." },
{ name: "border-style", desc: "테두리 스타일 속성을 설정합니다." },
{ name: "border-top", desc: "테두리 위쪽 속성을 일괄적으로 설정합니다." },
{ name: "border-top-color", desc: "테두리 위쪽 색 속성을 설정합니다." },
{ name: "border-top-left-radius", desc: "윗부분 왼쪽 모서리 굴곡을 설정합니다." },
{ name: "border-top-right-radius", desc: "윗부분 오른쪽 모서리 굴곡을 설정합니다." },
{ name: "border-top-style", desc: "테두리 위쪽 스타일 속성을 설정합니다." },
{ name: "border-top-width", desc: "테두리 위쪽 두께 속성을 설정합니다." },
{ name: "border-width", desc: "테두리 두께 속성을 설정합니다." },
{ name: "bottom", desc: "위치 요소의 아래쪽 속성을 설정합니다." },
{ name: "box-decoration-break", desc: "컬럼 및 줄바꿈시 테두리와 패딩의 방식을 설정합니다." },
{ name: "box-shadow", desc: "박스 요소의 그림자를 설정합니다." },
{ name: "box-sizing", desc: "요소 크기에 패딩 포함 여부를 설정합니다." },
{ name: "caption-side", desc: "caption의 위치를 설정합니다." },
{ name: "caret-color", desc: "input의 커서 색을 정의합니다." },
{ name: "clear", desc: "float 요소의 성질을 차단합니다." },
{ name: "clip", desc: "보이는 영역을 설정합니다." },
{ name: "color", desc: "글씨 색을 설정합니다." },
{ name: "column-count", desc: "컬럼의 수를 정의합니다." },
{ name: "column-fill", desc: "열의 지정방법을 정의합니다." },
{ name: "column-gap", desc: "컬럼의 간격을 정의합니다." },
{ name: "column-rule", desc: "컬럼 라인의 가로값, 스타일, 컬러를 정의합니다." },
{ name: "column-rule-color", desc: "컬럼의 라인 색을 정의합니다." },
{ name: "direction", desc: "문장의 방향을 설정합니다." },
{ name: "display", desc: "요소의 성질을 정의합니다." },
{ name: "empty-cells", desc: "테이블의 빈요소의 속성을 설정합니다." },
{ name: "filter", desc: "그래픽 효과를 설정합니다." },
{ name: "flex", desc: "콘텐츠의 성질을 flex로 정의합니다." },
{ name: "grid-template-columns", desc: "가로 컬럼의 크기와 위치 설정합니다." },
]

const searchList = document.querySelector(".search__list");
const searchSelect = document.querySelectorAll(".search__select span");
const searchInfo = document.querySelector(".search__info");
const searchBox = document.querySelector(".search__box input");
const searchBoxResult = document.querySelector(".search__box__result");
const searchButton = document.getElementById("searchButton");

// 출력하기 
cssProperty.map((element, index) => {
searchList.innerHTML += <span>{element.name}</span>;
});

// 검색하기 
function findProperty(searchKeyword) {
const targetData = cssProperty.find((data) => data.name === searchKeyword);
const listItem = searchList.querySelectorAll("span");

// active 제거
listItem.forEach(item => item.classList.remove("active"));

if (targetData == null) {
searchBoxResult.textContent = "해당 속성이 존재하지 않습니다.";
return
} else {
searchBoxResult.textContent = targetData.desc;

listItem.forEach((item) => {
if (item.textContent === searchKeyword) {
item.classList.add("active");
}
})
}
}

// 속성 클릭하기
document.querySelectorAll(".search__list span").forEach(span => {
span.addEventListener("click", () => {
const keyword = span.innerText;
findProperty(keyword);
})
})

// 검색 버튼 클릭하기
searchButton.addEventListener("click", () => {
const keyword = searchBox.value;
findProperty(keyword);

});
</script>
`}

            </Highlight>
        </details>
        </p>
    </div>
    <div className="item__inner">
        <p className="desc">
        <h3>SearchEffect05 - filter()를 이용하여 CSS 속성 중요도 검색하기</h3>
        <details>
        <summary>main.html</summary> 
        <Highlight className="javascript"> 
{`  <main id="main">
<div class="search__wrap">
<div class="search__title">
<span>filter()를 이용하여 검색하기</span>
<h1>CSS 속성 중요도 검색하기</h1>
</div>
<div class="search__star">
<ul>
<li data-star="1" data-desc=" 사용 안함">★☆☆☆☆ </li>
<li data-star="2" data-desc=" 가끔 사용">★★☆☆☆ </li>
<li data-star="3" data-desc=" 보통 사용">★★★☆☆ </li>
<li data-star="4" data-desc=" 자주 사용">★★★★☆ </li>
<li data-star="5" data-desc=" 많이 사용">★★★★★ </li>
</ul>
</div>
<div class="search__info">
<div>CSS 속성 갯수 : <span class="num">0</span>개</div>
</div>
<div class="search__list">
<ul>
<li><strong>align-content</strong> : 콘텐츠 아이템의 상하관계 정렬 상태를 설정합니다.<i>★★★★☆</i></li>
<li><strong>align-items</strong> : 콘텐츠 아이템의 내부 상하관계 정렬 상태를 설정합니다.<i>★★★★☆</i></li>
<li><strong>align-self</strong> : 개별적인 콘텐츠 아이템의 정렬 상태를 설정합니다.<i>★★★★☆</i></li>
</ul>
</div>
</div>
</main>
`}

        </Highlight>
        </details>
        <details>
            <summary>SearchEffect05 - Script</summary>
            <Highlight className="javascript">
{`
1. CSS 속성 배열 : const cssProperty = [...];: CSS 속성, 설명, 그리고 별점을 담은 배열을 생성합니다. 

2. 요소 선택 : const searchList = document.querySelector(".search__list ul");: HTML 문서에서 클래스가 "search__list"인 ul 태그를 선택합니다.
const searchStarItems = document.querySelectorAll(".search__star li");: HTML 문서에서 클래스가 "search__star"인 li 태그들을 모두 선택합니다.
const searchCount = document.querySelector(".search__info .num");: HTML 문서에서 클래스가 "search__info"인 요소 중 클래스가 "num"인 요소를 선택합니다.

3. 목록 업데이트 함수 : function listUpdate(list) { ... }: 주어진 배열에 따라 CSS 속성 목록을 업데이트하고, 해당하는 별점을 표시하는 함수입니다. 

4. 초기 목록 출력 : listUpdate(cssProperty): 초기에는 모든 CSS 속성을 보여주도록 목록을 업데이트합니다.

5. 별점 필터링 : searchStarItems.forEach(star => { ... });: 각 별점 요소에 클릭 이벤트 리스너를 등록하여 해당 별점에 해당하는 CSS 속성만 필터링하여 목록을 업데이트합니다.
const target = star.dataset.star;: 클릭한 별점의 데이터 속성에서 별점 값을 가져옵니다.
const filterList = cssProperty.filter(data => data.star == target);: 클릭한 별점과 일치하는 CSS 속성만 필터링합니다.
listUpdate(filterList);: 필터링된 목록을 업데이트합니다.

6. 사용자가 별점을 클릭하면 해당하는 별점에 해당하는 CSS 속성만 보여주는 간단한 필터링 기능을 구현합니다.
`}
{`
<script>
const cssProperty = [
{ star: 2, name: "align-content", desc: "콘텐츠 아이템의 상하관계 정렬 상태를 설정합니다." },
{ star: 2, name: "align-items", desc: "콘텐츠 아이템의 내부 상하관계 정렬 상태를 설정합니다." },
{ star: 2, name: "align-self", desc: "개별적인 콘텐츠 아이템의 정렬 상태를 설정합니다." },
{ star: 1, name: "all", desc: "요소의 속성을 초기화 또는 상속을 설정합니다." },
{ star: 5, name: "animation", desc: "애니메이션과 관련된 속성을 일괄적으로 설정합니다." },
{ star: 5, name: "animation-delay", desc: "애니메이션 지연 시간을 설정합니다." },
{ star: 5, name: "animation-direction", desc: "애니메이션 움직임 방향을 설정합니다." },
{ star: 5, name: "animation-duration", desc: "애니메이션 움직임 시간을 설정합니다." },
{ star: 5, name: "animation-fill-mode", desc: "애니메이션이 끝난 후의 상태를 설정합니다." },
{ star: 5, name: "animation-iteration-count", desc: "애니메이션 반복 횟수 설정합니다." },
{ star: 5, name: "animation-name", desc: "애니메이션 keyframe 이름을 설정합니다." },
{ star: 5, name: "animation-play-state", desc: "애니메이션 진행상태를 설정합니다." },
{ star: 5, name: "animation-timing-function", desc: "애니메이션 움직임의 속도를 설정합니다." },
{ star: 4, name: "backdrop-filter", desc: "배경에 그래픽 효과를 설정합니다." },
{ star: 2, name: "backface-visibility", desc: "요소의 뒷면을 설정합니다." },
{ star: 4, name: "background-attachment", desc: "배경 이미지의 고정 여부를 설정합니다." },
{ star: 4, name: "background-blend-mode", desc: "배경을 혼합했을 때의 상태를 설정합니다." },
{ star: 2, name: "background-clip", desc: "백그라운드 이미지의 위치 기준점을 설정하기 위한 속성입니다." },
{ star: 5, name: "background-color", desc: "백그라운드 색을 설정합니다." },
{ star: 5, name: "background-image", desc: "백그라운드 이미지 및 배경 속성을 설정합니다." },
{ star: 3, name: "background-origin", desc: "백그라운드 이미지의 위치 기준점을 설정하기 위한 속성입니다." },
{ star: 5, name: "background-position", desc: "백그라운드 이미지의 위치 영역을 설정합니다." },
{ star: 5, name: "background-repeat", desc: "백그라운드 이미지 반복 여부를 설정합니다." },
{ star: 5, name: "background-size", desc: "백그라운드 이미지 사이즈를 설정합니다." },
{ star: 5, name: "background", desc: "백그라운드 속성을 일괄적으로 설정합니다." },
{ star: 5, name: "border", desc: "테두리 속성을 일괄적으로 설정합니다." },
{ star: 5, name: "border-bottom", desc: "테두리 아래쪽 속성을 일괄적으로 설정합니다." },
{ star: 5, name: "border-bottom-color", desc: "테두리 아래쪽 색 속성을 설정합니다." },
{ star: 5, name: "border-bottom-left-radius", desc: "아래부분 왼쪽 모서리 굴곡을 설정합니다." },
{ star: 5, name: "border-bottom-right-radius", desc: "아래부분 오른쪽 모서리 굴곡을 설정합니다." },
{ star: 5, name: "border-bottom-style", desc: "테두리 아래쪽 스타일 속성을 설정합니다." },
{ star: 5, name: "border-bottom-width", desc: "테두리 아래쪽 두께 속성을 설정합니다." },
{ star: 4, name: "border-collapse", desc: "테이블의 테두리 분리 여부를 설정합니다." },
{ star: 5, name: "border-color", desc: "테두리 색 속성을 설정합니다." },
{ star: 2, name: "border-image", desc: "테두리 이미지 속성을 설정합니다." },
{ star: 2, name: "border-image-outset", desc: "테두리 이미지 간격 속성을 설정합니다." },
{ star: 2, name: "border-image-repeat", desc: "테두리 이미지 반복 속성을 설정합니다." },
{ star: 2, name: "border-image-slice", desc: "테두리 이미지 크기 속성을 설정합니다." },
{ star: 2, name: "border-image-source", desc: "테두리 이미지 경로 속성을 설정합니다." },
{ star: 2, name: "border-image-width", desc: "테두리 이미지 두께 속성을 설정합니다." },
{ star: 5, name: "border-left", desc: "테두리 왼쪽 속성을 일괄적으로 설정합니다." },
{ star: 3, name: "border-left-color", desc: "테두리 왼쪽 색 속성을 설정합니다." },
{ star: 3, name: "border-left-style", desc: "테두리 왼쪽 스타일 속성을 설정합니다." },
{ star: 3, name: "border-left-width", desc: "테두리 왼쪽 두께 속성을 설정합니다." },
{ star: 5, name: "border-radius", desc: "모서리 굴곡을 설정합니다." },
{ star: 5, name: "border-right", desc: "테두리 오른쪽 속성을 일괄적으로 설정합니다." },
{ star: 5, name: "border-right-color", desc: "테두리 오른쪽 색 속성을 설정합니다." },
{ star: 5, name: "border-right-style", desc: "테두리 오른쪽 스타일 속성을 설정합니다." },
{ star: 5, name: "border-right-width", desc: "테두리 오른쪽 두께 속성을 설정합니다." },
{ star: 5, name: "border-spacing", desc: "테이블의 테두리 간격을 설정합니다." },
{ star: 5, name: "border-style", desc: "테두리 스타일 속성을 설정합니다." },
{ star: 5, name: "border-top", desc: "테두리 위쪽 속성을 일괄적으로 설정합니다." },
{ star: 5, name: "border-top-color", desc: "테두리 위쪽 색 속성을 설정합니다." },
{ star: 5, name: "border-top-left-radius", desc: "윗부분 왼쪽 모서리 굴곡을 설정합니다." },
{ star: 5, name: "border-top-right-radius", desc: "윗부분 오른쪽 모서리 굴곡을 설정합니다." },
{ star: 5, name: "border-top-style", desc: "테두리 위쪽 스타일 속성을 설정합니다." },
{ star: 5, name: "border-top-width", desc: "테두리 위쪽 두께 속성을 설정합니다." },
{ star: 5, name: "border-width", desc: "테두리 두께 속성을 설정합니다." },
{ star: 5, name: "bottom", desc: "위치 요소의 아래쪽 속성을 설정합니다." },
{ star: 2, name: "box-decoration-break", desc: "컬럼 및 줄바꿈시 테두리와 패딩의 방식을 설정합니다." },
{ star: 3, name: "box-shadow", desc: "박스 요소의 그림자를 설정합니다." },
{ star: 5, name: "box-sizing", desc: "요소 크기에 패딩 포함 여부를 설정합니다." },
{ star: 1, name: "caption-side", desc: "caption의 위치를 설정합니다." },
{ star: 2, name: "caret-color", desc: "input의 커서 색을 정의합니다." },
{ star: 3, name: "clear", desc: "float 요소의 성질을 차단합니다." },
{ star: 3, name: "clip", desc: "보이는 영역을 설정합니다." },
{ star: 5, name: "color", desc: "글씨 색을 설정합니다." },
{ star: 3, name: "column-count", desc: "컬럼의 수를 정의합니다." },
{ star: 3, name: "column-fill", desc: "열의 지정방법을 정의합니다." },
{ star: 3, name: "column-gap", desc: "컬럼의 간격을 정의합니다." },
{ star: 3, name: "column-rule", desc: "컬럼 라인의 가로값, 스타일, 컬러를 정의합니다." },
{ star: 3, name: "column-rule-color", desc: "컬럼의 라인 색을 정의합니다." },
{ star: 2, name: "direction", desc: "문장의 방향을 설정합니다." },
{ star: 5, name: "display", desc: "요소의 성질을 정의합니다." },
{ star: 2, name: "empty-cells", desc: "테이블의 빈요소의 속성을 설정합니다." },
{ star: 3, name: "filter", desc: "그래픽 효과를 설정합니다." },
{ star: 5, name: "flex", desc: "콘텐츠의 성질을 flex로 정의합니다." },
{ star: 5, name: "grid-template-columns", desc: "가로 컬럼의 크기와 위치 설정합니다." },
]

const searchList = document.querySelector(".search__list ul");
const searchStarItems = document.querySelectorAll(".search__star li");
const searchCount = document.querySelector(".search__info .num");

// const searchInfo = document.querySelector(".search__info");
// const searchBox = document.querySelector(".search__box input");
// const searchBoxResult = document.querySelector(".search__box__result");
// const searchButton = document.getElementById("searchButton");

// 출력하기
function listUpdate(list) {
let listItem = "";

for (const data of list) {
let listStar = searchStarItems[data.star - 1].innerText;
listItem += <li><strong>{data.name}</strong> : {data.desc} <em>{listStar}</em></li>;
}
searchList.innerHTML = listItem;
searchCount.textContent = list.length;
}
listUpdate(cssProperty)

// 클릭하기
searchStarItems.forEach(star => {
star.addEventListener("click", () => {
const target = star.dataset.star;
const filterList = cssProperty.filter(data => data.star == target);
// const filterList = cssProperty.filter(data => data.star >= target);
listUpdate(filterList);
})
});
</script>
`}

            </Highlight>
        </details>
        </p>
    </div>
    <div className="item__inner">
        <p className="desc">
        <h3>SearchEffect06 - sort(), reverse()를 이용하여 CSS 속성 정렬하기</h3>
        <details>
        <summary>main.html</summary> 
        <Highlight className="javascript"> 
{` <main id="main">
<div class="search__wrap">
<div class="search__title">
<span>sort(), reverse()를 이용하여 검색하기</span>
<h1>CSS 속성 정렬하기</h1>
</div>
<div class="search__star">
<ul>
<li class="btn1">반대로 정렬하기 </li>
<li class="btn2">오름차순 정렬하기 </li>
<li class="btn3">내림차순 정렬하기 </li>
<li class="btn4">알파벳순(a~z) </li>
<li class="btn5">알파벳순(z-a)</li>
<li class="btn6">랜덤정렬</li>
</ul>
</div>
<div class="search__info">
<div>CSS 속성 갯수 : <span class="num">0</span>개</div>
</div>
<div class="search__list">
<ul>

</ul>
</div>
</div>
</main>
<!-- //main -->
`}

        </Highlight>
        </details>
        <details>
            <summary>SearchEffect06 - Script</summary>
            <Highlight className="javascript">
{`
1. CSS 속성 데이터 배열 (cssProperty) : 각각의 CSS 속성에 대한 정보를 포함하는 배열입니다. num은 속성 번호, star는 중요도 레벨, name은 속성 이름, desc는 속성 설명입니다.
<br>
2. HTML 요소 선택 및 데이터 출력 : searchList: CSS 속성 리스트를 출력할 ul 요소를 선택합니다.
searchStarItems: 중요도 레벨을 나타내는 별표 아이콘을 선택합니다.
searchCount: CSS 속성의 총 개수를 나타낼 요소를 선택합니다.

3. 데이터 출력 함수 (listUpdate) : CSS 속성 배열을 순회하여 각 속성의 번호, 이름, 설명을 포함하는 HTML 리스트 아이템을 생성하고, 해당 리스트를 searchList에 적용합니다.

4. 정렬 기능
버튼 1 (btn1): 배열을 반대로 뒤집어 순서를 바꿉니다.
버튼 2 (btn2): 배열을 오름차순으로 번호에 따라 정렬합니다.
버튼 3 (btn3): 배열을 내림차순으로 번호에 따라 정렬합니다.
버튼 4 (btn4): 배열을 알파벳 순으로 이름에 따라 오름차순으로 정렬합니다.
버튼 5 (btn5): 배열을 알파벳 순으로 이름에 따라 내림차순으로 정렬합니다.
버튼 6 (btn6): 배열을 무작위로 섞어 랜덤한 순서로 정렬합니다.
<br>
5. 이벤트 리스너 : 각 버튼에 대해 클릭 이벤트 리스너가 추가되어 해당 버튼을 클릭하면 정렬 기능이 실행되고 화면이 업데이트됩니다.
`}
{`
<script>
const cssProperty = [
{ num: 1, star: 2, name: "align-content", desc: "콘텐츠 아이템의 상하관계 정렬 상태를 설정합니다." },
{ num: 2, star: 2, name: "align-items", desc: "콘텐츠 아이템의 내부 상하관계 정렬 상태를 설정합니다." },
{ num: 3, star: 2, name: "align-self", desc: "개별적인 콘텐츠 아이템의 정렬 상태를 설정합니다." },
{ num: 4, star: 1, name: "all", desc: "요소의 속성을 초기화 또는 상속을 설정합니다." },
{ num: 5, star: 5, name: "animation", desc: "애니메이션과 관련된 속성을 일괄적으로 설정합니다." },
{ num: 6, star: 5, name: "animation-delay", desc: "애니메이션 지연 시간을 설정합니다." },
{ num: 7, star: 5, name: "animation-direction", desc: "애니메이션 움직임 방향을 설정합니다." },
{ num: 8, star: 5, name: "animation-duration", desc: "애니메이션 움직임 시간을 설정합니다." },
{ num: 9, star: 5, name: "animation-fill-mode", desc: "애니메이션이 끝난 후의 상태를 설정합니다." },
{ num: 10, star: 5, name: "animation-iteration-count", desc: "애니메이션 반복 횟수 설정합니다." },
{ num: 11, star: 5, name: "animation-name", desc: "애니메이션 keyframe 이름을 설정합니다." },
{ num: 12, star: 5, name: "animation-play-state", desc: "애니메이션 진행상태를 설정합니다." },
{ num: 13, star: 5, name: "animation-timing-function", desc: "애니메이션 움직임의 속도를 설정합니다." },
{ num: 14, star: 4, name: "backdrop-filter", desc: "배경에 그래픽 효과를 설정합니다." },
{ num: 15, star: 2, name: "backface-visibility", desc: "요소의 뒷면을 설정합니다." },
{ num: 16, star: 4, name: "background-attachment", desc: "배경 이미지의 고정 여부를 설정합니다." },
{ num: 17, star: 4, name: "background-blend-mode", desc: "배경을 혼합했을 때의 상태를 설정합니다." },
{ num: 18, star: 2, name: "background-clip", desc: "백그라운드 이미지의 위치 기준점을 설정하기 위한 속성입니다." },
{ num: 19, star: 5, name: "background-color", desc: "백그라운드 색을 설정합니다." },
{ num: 20, star: 5, name: "background-image", desc: "백그라운드 이미지 및 배경 속성을 설정합니다." },
{ num: 21, star: 3, name: "background-origin", desc: "백그라운드 이미지의 위치 기준점을 설정하기 위한 속성입니다." },
{ num: 22, star: 5, name: "background-position", desc: "백그라운드 이미지의 위치 영역을 설정합니다." },
{ num: 23, star: 5, name: "background-repeat", desc: "백그라운드 이미지 반복 여부를 설정합니다." },
{ num: 24, star: 5, name: "background-size", desc: "백그라운드 이미지 사이즈를 설정합니다." },
{ num: 25, star: 5, name: "background", desc: "백그라운드 속성을 일괄적으로 설정합니다." },
{ num: 26, star: 5, name: "border", desc: "테두리 속성을 일괄적으로 설정합니다." },
{ num: 27, star: 5, name: "border-bottom", desc: "테두리 아래쪽 속성을 일괄적으로 설정합니다." },
{ num: 28, star: 5, name: "border-bottom-color", desc: "테두리 아래쪽 색 속성을 설정합니다." },
{ num: 29, star: 5, name: "border-bottom-left-radius", desc: "아래부분 왼쪽 모서리 굴곡을 설정합니다." },
{ num: 30, star: 5, name: "border-bottom-right-radius", desc: "아래부분 오른쪽 모서리 굴곡을 설정합니다." },
{ num: 31, star: 5, name: "border-bottom-style", desc: "테두리 아래쪽 스타일 속성을 설정합니다." },
{ num: 32, star: 5, name: "border-bottom-width", desc: "테두리 아래쪽 두께 속성을 설정합니다." },
{ num: 33, star: 4, name: "border-collapse", desc: "테이블의 테두리 분리 여부를 설정합니다." },
{ num: 34, star: 5, name: "border-color", desc: "테두리 색 속성을 설정합니다." },
{ num: 35, star: 2, name: "border-image", desc: "테두리 이미지 속성을 설정합니다." },
{ num: 36, star: 2, name: "border-image-outset", desc: "테두리 이미지 간격 속성을 설정합니다." },
{ num: 37, star: 2, name: "border-image-repeat", desc: "테두리 이미지 반복 속성을 설정합니다." },
{ num: 38, star: 2, name: "border-image-slice", desc: "테두리 이미지 크기 속성을 설정합니다." },
{ num: 39, star: 2, name: "border-image-source", desc: "테두리 이미지 경로 속성을 설정합니다." },
{ num: 40, star: 2, name: "border-image-width", desc: "테두리 이미지 두께 속성을 설정합니다." },
{ num: 41, star: 5, name: "border-left", desc: "테두리 왼쪽 속성을 일괄적으로 설정합니다." },
{ num: 42, star: 3, name: "border-left-color", desc: "테두리 왼쪽 색 속성을 설정합니다." },
{ num: 43, star: 3, name: "border-left-style", desc: "테두리 왼쪽 스타일 속성을 설정합니다." },
{ num: 44, star: 3, name: "border-left-width", desc: "테두리 왼쪽 두께 속성을 설정합니다." },
{ num: 45, star: 5, name: "border-radius", desc: "모서리 굴곡을 설정합니다." },
{ num: 46, star: 5, name: "border-right", desc: "테두리 오른쪽 속성을 일괄적으로 설정합니다." },
{ num: 47, star: 5, name: "border-right-color", desc: "테두리 오른쪽 색 속성을 설정합니다." },
{ num: 48, star: 5, name: "border-right-style", desc: "테두리 오른쪽 스타일 속성을 설정합니다." },
{ num: 49, star: 5, name: "border-right-width", desc: "테두리 오른쪽 두께 속성을 설정합니다." },
{ num: 50, star: 5, name: "border-spacing", desc: "테이블의 테두리 간격을 설정합니다." },
{ num: 51, star: 5, name: "border-style", desc: "테두리 스타일 속성을 설정합니다." },
{ num: 52, star: 5, name: "border-top", desc: "테두리 위쪽 속성을 일괄적으로 설정합니다." },
{ num: 53, star: 5, name: "border-top-color", desc: "테두리 위쪽 색 속성을 설정합니다." },
{ num: 54, star: 5, name: "border-top-left-radius", desc: "윗부분 왼쪽 모서리 굴곡을 설정합니다." },
{ num: 55, star: 5, name: "border-top-right-radius", desc: "윗부분 오른쪽 모서리 굴곡을 설정합니다." },
{ num: 56, star: 5, name: "border-top-style", desc: "테두리 위쪽 스타일 속성을 설정합니다." },
{ num: 57, star: 5, name: "border-top-width", desc: "테두리 위쪽 두께 속성을 설정합니다." },
{ num: 58, star: 5, name: "border-width", desc: "테두리 두께 속성을 설정합니다." },
{ num: 59, star: 5, name: "bottom", desc: "위치 요소의 아래쪽 속성을 설정합니다." },
{ num: 60, star: 2, name: "box-decoration-break", desc: "컬럼 및 줄바꿈시 테두리와 패딩의 방식을 설정합니다." },
{ num: 61, star: 3, name: "box-shadow", desc: "박스 요소의 그림자를 설정합니다." },
{ num: 62, star: 5, name: "box-sizing", desc: "요소 크기에 패딩 포함 여부를 설정합니다." },
{ num: 63, star: 1, name: "caption-side", desc: "caption의 위치를 설정합니다." },
{ num: 64, star: 2, name: "caret-color", desc: "input의 커서 색을 정의합니다." },
{ num: 65, star: 3, name: "clear", desc: "float 요소의 성질을 차단합니다." },
{ num: 66, star: 3, name: "clip", desc: "보이는 영역을 설정합니다." },
{ num: 67, star: 5, name: "color", desc: "글씨 색을 설정합니다." },
{ num: 68, star: 3, name: "column-count", desc: "컬럼의 수를 정의합니다." },
{ num: 69, star: 3, name: "column-fill", desc: "열의 지정방법을 정의합니다." },
{ num: 70, star: 3, name: "column-gap", desc: "컬럼의 간격을 정의합니다." },
{ num: 71, star: 3, name: "column-rule", desc: "컬럼 라인의 가로값, 스타일, 컬러를 정의합니다." },
{ num: 72, star: 3, name: "column-rule-color", desc: "컬럼의 라인 색을 정의합니다." },
{ num: 73, star: 2, name: "direction", desc: "문장의 방향을 설정합니다." },
{ num: 74, star: 5, name: "display", desc: "요소의 성질을 정의합니다." },
{ num: 75, star: 2, name: "empty-cells", desc: "테이블의 빈요소의 속성을 설정합니다." },
{ num: 76, star: 3, name: "filter", desc: "그래픽 효과를 설정합니다." },
{ num: 77, star: 5, name: "flex", desc: "콘텐츠의 성질을 flex로 정의합니다." },
{ num: 78, star: 5, name: "grid-template-columns", desc: "가로 컬럼의 크기와 위치 설정합니다." },
]
const searchList = document.querySelector(".search__list ul");
const searchStarItems = document.querySelectorAll(".search__star li");
const searchCount = document.querySelector(".search__info .num");

// 데이터 출력
const listUpdate = () => {
let listItem = "";

cssProperty.forEach((data, index) => {
listItem += <li>{data.num}. {data.name} : {data.desc}</li>;
});

searchList.innerHTML = listItem;
searchCount.textContent = cssProperty.length;
}
listUpdate();

// 반대로 정렬하기
document.querySelector(".btn1").addEventListener("click", () => {
cssProperty.reverse();
listUpdate();
});

// 오름차순 정렬하기
document.querySelector(".btn2").addEventListener("click", () => {
cssProperty.sort((a, b) => {
return a.num - b.num;
});
listUpdate();
});

// 내림차순 정렬하기
document.querySelector(".btn3").addEventListener("click", () => {
cssProperty.sort((a, b) => {
return b.num - a.num;
});
listUpdate();
});

// 알파벳(a~z) 정렬하기
document.querySelector(".btn4").addEventListener("click", () => {
cssProperty.sort((a, b) => {
let x = a.name;
let y = b.name;
return x.localeCompare(y);
});
listUpdate();
});

// 알파벳(z~a) 정렬하기
document.querySelector(".btn5").addEventListener("click", () => {
cssProperty.sort((a, b) => {
let x = a.name;
let y = b.name;
return y.localeCompare(x);
});
listUpdate();
});

// 랜덤 정렬하기
function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]];
}
}

// 랜덤 정렬 버튼에 이벤트 리스너 추가
document.querySelector(".btn6").addEventListener("click", () => {
shuffleArray(cssProperty); // 배열을 무작위로 섞음
listUpdate(); // 화면 업데이트
});


</script>
`}

            </Highlight>
        </details>
        </p>
    </div>
</div>
  )
}

export default Searchdesc