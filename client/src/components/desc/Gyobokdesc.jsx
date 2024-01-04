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
  )
}

export default Gyobokdesc