import React from 'react'
import Highlight from 'react-highlight'

const Gyobokdesc = () => {
  return (
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
            <h3>Design</h3>

            <details>

        <summary>CSS</summary>
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
            </details>

            <details>

        <summary>Page-list</summary>
        <br/>
        1. HEADER<br/>
            logo 제작<br/>
            nav - menu 구성 (교복소개, 인기순위, 수다방, 로그인, 회원가입)<br/>
        <br/>
        2. 메인페이지<br/>
        Main Visual : gsap를 이용한 애니메이션<br/>
        section01 : 이미지 슬라이드, 배경 고정 효과<br/>
        section02 : 마우스 Hover 효과, 링크 바로가기<br/>
        section03 : php를 이용하여 게시판 리스트 정보 가져오기<br/>
        section04 : css animation 효과, 유튜브 영상 탭메뉴 구현<br/>
        <br/>
        3. 교복소개<br/>
        json을 이용하여 전국 학교 정보 출력 (http://answlsgh95.dothome.co.kr/blog_php/json/gobok.json)<br/>
        지역별 필터 검색<br/>
        키워드 검색<br/>
        교복 목록 조회수, 댓글수 표시<br/>
        <br/>
        4. 교복소개 상세<br/>
        교복 이미지 swiper를 이용한 슬라이드<br/>
        좋아요, 싫어요 투표 기능 : 클릭 시, 배경 색상 변경 효과<br/>
        댓글 : 댓글작성, 댓글 좋아요/좋아요 취소, 이모티콘 작성<br/>
        <br/>
        5. 인기순위<br/>
        조회수, 좋아요, 싫어요 순으로 리스트 정렬<br/>
        각 조회수, 좋아요, 싫어요 수 노출<br/>
        <br/>
        6. 수다방<br/>
        게시판 목록 : NO, Title, Name, Date, View, Like<br/>
        게시판 상세 : 게시글 좋아요 기능, 댓글 기능(댓글 작성, 랜덤 프로필, 댓글 좋아요 기능)<br/>
        <br/>
        7. 마이페이지<br/>
        내 정보 변경 : 회원가입 정보 불러오기/정보 수정 기능<br/>
        내가 쓴 글 : 각 회원별 게시판 작성글 불러오기<br/>
        내가 좋아한 교복 : 교복소개 페이지에서 좋아요 누른 교복 정보 불러오기<br/>
        비밀번호 변경 : 비밀번호 변경 기능<br/>
        회원 탈퇴하기 : 회원 정보 삭제<br/>
        <br/>
        8. 로그인<br/>
        아이디, 비밀번호 입력 시 일치하는 정보 가져오기<br/>
        아이디 찾기 : 연락처, 이름 일치 정보<br/>
        비밀번호 찾기 기능 : 아이디, 연락처 일치 정보<br/>
        <br/>
        9. 회원가입<br/>
        아이디 : 중복 검사 기능<br/>
        이름<br/>
        이메일 : 중복 검사 기능<br/>
        비밀번호, 비밀번호 확인<br/>
        주소 : 주소 검색 기능<br/>
        연락처<br/>
        약관 동의<br/>
        가입 완료 시, 회원 정보 저장<br/>
        <br/>
        10. FOOTER<br/>
        Copyright 2023 Gogyobok<br/>
            </details>
        </p>
    </div>
    <div className="item__inner">
        <p className="desc">
            <h3>CODE VIEW</h3>

            <details>

<summary>MySQL 정보가져오기</summary>
1. 연결 파일 포함: 이 부분은 외부 PHP 파일(connect.php 및 session.php)을 포함하는데, 이 파일들은 아마도 데이터베이스 연결 및 세션 관리와 관련된 코드를 포함하고 있을 것입니다.
<Highlight className="php">
    {`
    include "../connect/connect.php";
    include "../connect/session.php";
    `}
</Highlight>
2. SQL 쿼리: 이 부분은 Intro라는 테이블에서 introId, introComment, introView를 선택하는 SQL 쿼리를 생성합니다.
<Highlight className="php">
    {`
   $sql = "SELECT introId, introComment, introView FROM Intro";
    `}
</Highlight>
3. SQL 쿼리 실행 : 이 부분은 MySQLi 확장을 사용하여 SQL 쿼리를 실행하고 결과를 $result 변수에 저장합니다.
<Highlight className="php">
    {`
   $result = mysqli_query($connect, $sql);
    `}
</Highlight>
4. 데이터 가져와서 PHP 배열에 저장 : 이 블록은 SQL 쿼리가 성공적인지 확인합니다. 성공하면 결과 집합에서 각 행을 가져와서 관련 데이터를 $introData 배열에 저장합니다.
<Highlight className="php">
    {`
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
    `}
</Highlight>
5. PHP 배열을 JavaScript 배열로 출력 : 이 부분은 PHP 배열($introData)을 JSON으로 인코딩하여 JavaScript 변수 introData로 초기화한 내용을 포함하는 script 태그를 출력합니다.
<Highlight className="php">
    {`
   echo '<script>let introData = ' . json_encode($introData) . ';</script>';
    `}
</Highlight>
6. MySQL 정보가져오기
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
            </details>
        </p>
    </div>
    <div className="item__inner">
        
        <p className="desc">
            <h3>CODE VIEW</h3>
            <details>

            <summary> Json파일 정보가져오기</summary>
            1. fetchGobok 함수 정의: : 이 함수는 선택된 지역에 대한 교복 정보를 가져오는 역할을 합니다. selectedRegion은 선택된 지역을 나타내는 매개변수로 기본값은 빈 문자열입니다.
            <Highlight className="javascript">
{`const fetchGobok = (selectedRegion = '') => {
`}
            </Highlight>
            2. Gobok 정보 가져오기 : 이 부분은 외부 JSON 파일에서 교복 정보를 가져오는 비동기 요청을 수행합니다.
            <Highlight className="javascript">
{`fetch("https://raw.githubusercontent.com/jinhomun/webs2024/main/blog_phpJSON/gobok.json")
.then(res => res.json())
.then(items => {
`}
            </Highlight>
            3. Gobok 정보 매핑 및 필터링 : 가져온 정보를 매핑하여 새로운 객체 배열 gobokInfo를 생성합니다. 이 배열은 각 교복 정보를 구조화된 형식으로 담고 있습니다.
            <Highlight className="javascript">
{`gobokInfo = items.map((item, index) => {
    return {
        infoRegion: item.region,
        infoName: item.school,
        infoUniformtypes: item.uniform_types,
        infoUniformimg: item.uniform_img
    };
});
`}
            </Highlight>
            4. 선택된 지역에 대한 필터링 : 선택된 지역이 있고 '지역별'이 아닌 경우, 해당 지역에 해당하는 교복 정보만을 필터링합니다.
            <Highlight className="javascript">
{`  if (selectedRegion && selectedRegion !== '지역별') {
    gobokInfo = gobokInfo.filter(gobok => gobok.infoRegion === selectedRegion);
}
`}
            </Highlight>
            5. 교복 정보 업데이트 : 최종적으로 업데이트된 교복 정보를 처리하는 함수인 updateGobok에 필터링된 정보를 전달하여 업데이트합니다.
            <Highlight className="javascript">
{`  updateGobok(gobokInfo);
`}
            </Highlight>
            6. Json파일 정보가져오기
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
            </details>
        </p>
    </div>
</div>
  )
}

export default Gyobokdesc