import React from 'react'

const Kickdesc = () => {
    return (
        <div className="list">
            <div className="item__inner">
                <p className="desc">
                    <h3>Team Project👨‍👨‍👦‍👦</h3><br />
                    KICKOFF은 축구api를 이용하여 축구를 사랑하는 이들을 위한<br />
                    유럽 5대리그 해외축구 하이라이트영상과 리그 경기일정 및 결과를 보여주는 웹사이트 입니다.<br />
                    우리는 다양한 배경과 경험을 가진 축구 팬들이 모여 새로운 친구들을 만들고,<br />
                    토론을 나누며, 가장 열정적인 스포츠인 축구에 대한 모든 것을 공유하는 곳으로 초대합니다!<br />
                    <br />
                    유럽 5대리그 정보 보기<br />
                    유럽 5대리그 로고를 누르면, 각 리그의 창설연도, 참가팀의 수 , 리그순위, 대표선수, 경기결과, 경기일정의 정보를 확인하실수 있습니다.<br />
                    경기결과를 누르면, 해당경기의 데이터(팀의 기대골값, 점유율, 전체 슛, 유효슛, 오프사이드, 파울, 코너킥, 패스 성공률, 경고, 퇴장,주심이름)를 확인하실수 있고, 경기후기를 작성하실수 있습니다.<br />
                    <br />
                    유럽 5대리그 경기 하이라이트 영상 보기<br />
                    유럽 5대리그 경기 하이라이트 영상 페이지에서는 리그, 맞대결한 팀, 경기시간의 정보를 확인하실수 있습니다.<br />
                    <br />
                    최신 축구 뉴스 보기<br />
                    메인화면에서 나오는 뉴스 제목을 클릭하면 해당 링크에서 최신 축구 뉴스를 보실수 있습니다.<br />
                    <br />
                    축구에 대해 커뮤니케이션 하기<br />
                    커뮤니티 페이지에서 남녀노소 자유롭게 축구에 대해서 의사소통하실수 있습니다.<br />
                </p>
            </div>
            <div className="item__inner">
                <p className="desc">
                    <h3>기술 스택</h3>

                    <details>
                        Front-end -&gt; React, Javascript <br />
                        Back-end -&gt; Node.js, Nodemon<br />
                        Database -&gt; Firebase, Mongodb<br />
                    </details>
                </p>
            </div>
            <div className="item__inner">
                <p className="desc">
                    <h3>기능 소개</h3>

                    <details>
                        <summary>로그인</summary>
                        사용자의 이메일과 비밀번호를 입력 받아 Firebase의 인증 기능을 통해 로그인을 수행합니다.<br />
                        입력된 이메일과 비밀번호가 유효한지 확인하고, 로그인에 성공하면 알림을 표시하고 메인 페이지로 이동합니다.<br />
                        로그인하지 않은 사용자는 계정 만들기 또는 비밀번호 찾기 링크를 통해 해당 페이지로 이동할 수 있습니다.<br />
                    </details>
                    <details>
                        <summary>비밀번호찾기</summary>
                        사용자가 이전에 사용한 이메일을 입력하면, 해당 이메일로 비밀번호 재설정 링크가 전송됩니다.<br />
                        입력한 이메일이 유효하면 Firebase를 통해 비밀번호 재설정 이메일이 전송되며, 전송 완료 시 알림을 표시하고 로그인 페이지로 이동합니다.<br />
                    </details>
                    <details>
                        <summary>회원가입</summary>
                        Firebase를 이용해 사용자의 이메일과 비밀번호로 회원가입하고, MongoDB를 통해 사용자 데이터를 저장합니다.<br />
                        Axios를 사용하여 서버로 데이터를 전송하며, React Router를 이용하여 페이지 간 이동을 합니다.<br />
                        또한, 사용자가 입력한 정보의 유효성을 검사하고, 이메일 중복 검사를 수행하여 회원가입 과정을 관리합니다.<br />
                    </details>
                    <details>
                        <summary>홈</summary>
                        setRandomHighlight를 이용해서 TodayHighlight가 랜덤으로 나오도록 구현하였고, view를 누르면 하이라이트와 관련된기사가 나오도록 구현하였습니다.<br />
                        네이버 뉴스api를 이용해서 축구관련 뉴스 데이터가 나오도록 구현하였습니다.<br />
                        boardlist를 이용해서 게시판의 내용이 나오도록 구현하였습니다.<br />
                        "filteredVideos"를 활용하여 유럽 5대 리그 최신경기의 비디오 토큰을 이용하여 영상썸네일을 불러왔고, 썸네일 클릭시 영상페이지로 넘어가도록 구현했습니다.<br />
                        또한, 여러경기의 영상썸네일을 볼수 있도록 swiper 기능도 추가 구현했습니다.<br />
                        Header부분에는 해당리그의 대한 검색어를 입력시에 search기능이 작동되면서 해당리그로 넘어가도록 구현하였습니다.<br />
                        Select,handleChange를 이용해서 게시판으로 넘어가도록 구현했습니다.<br />
                        Nav(왼쪽)부분에는 유럽 5대의 리그로고 사진을 넣어서, 로고를 클릭하면 해당하는 리그정보를 볼수 있도록 구현하였습니다.<br />
                        Aside(오른쪽)부분에는 React Router를 통해 경로의 파라미터를 가져와 해당 리그의 정보를 API로 요청하여 데이터를 가져옵니다.<br />
                        leagueNum를 사용해서 유럽 5대 리그중 한개의 리그 선택하여 선택한 리그의 최근 경기결과가 출력되도록 하였습니다.<br />
                    </details>
                    <details>
                        <summary>리그정보</summary>
                        리그의 정보를 가져와 보여주는 기능을 구현하였습니다.<br />
                        React Router를 통해 경로의 파라미터를 가져와 해당 리그의 정보를 API로 요청하여 가져옵니다.<br />
                        리그 정보는 Football Data API에서 받아온 데이터를 사용하여 리그 이름, 팀 수, 팀 정보, 리그 로고 등을 화면에 표시합니다.<br />
                        또한, 리그마다 경기결과(Finish)와 경기일정(Schedule)을 볼수 있습니다.<br />
                    </details>
                    <details>
                        <summary>경기상세정보</summary>
                        경기결과가 나온 경기의 상세정보를 보여주는 기능을 구현하였습니다.<br />
                        convertUtcToKst를 사용하여 UTC 날짜를 한국 시간(KST)으로 변환하였습니다.<br />
                        두 번째 useEffect를 이용하여 두 번째 API에서 경기 데이터를 가져옵니다.<br />
                        이때 Levenshtein 거리를 이용하여 두 번째 API에서 홈 팀과 일치하는 경기를 찾습니다<br />
                        찾은 경기에 대한 통계 데이터를 가져와 상태에 설정합니다.<br />
                        경기 세부 정보를 렌더링하며, 리그, 팀 로고, 경기 일자, 스코어, 심판, 전체 슛, 유효 슈팅 ,팀 기대득점 등 다양한 통계를 보여줍니다.<br />
                        CircularProgressbar를 사용하여 팀의 승률을 시각적으로 표시합니다.<br />
                        matchId는 고유한 경기의 식별자를 나타내는데, 따라서 이 식별자를 사용하여 특정 경기에 대한 코멘트만 표시하거나 작성할 수 있게 했습니다.<br />
                    </details>
                    <details>
                        <summary>경기영상</summary>
                        Soccer Bat에서 영상링크를 가져와서 경기하이라이트 영상을 보여주는 기능을 구현하였습니다.<br />
                        videoInfo를 이용하여 홈화면에서 선택한 영상썸네일을 누르면 영상이 나오도록 구현하였습니다.<br />
                        그리고,해당 영상의 상세정보도 불러와서 어느 리그,팀의 영상인지 알수있도록 하였습니다.<br />
                    </details>
                    <details>
                        <summary>게시판</summary>
                        공지사항 게시판은 관리자만 작성할수 있는 게시판, 자유 게시판은 자유롭게 모든 사용자들이 작성할수 있는 게시판 입니다.<br />
                        isLatestChecked, isCommentChecked, isViewChecked와 sort를 사용해서 최신순,댓글순,조회순으로 게시글이 정렬되도록 하였습니다.<br />
                        searchTerm와 $regax를 사용해서 게시글 검색기능도 구현하였습니다.<br />
                        Board스키마와 Reple스키마를 이용해서 mongoDB에 작성한 게시글 정보와 댓글 데이터가 들어가도록 하였고, router를 이용해서 게시글과 댓글을 가져옵니다.<br />
                        게시글 작성에서는 FileUpload를 이용해서 이미지 업로드가 가능하도록 구현했습니다.<br />
                    </details>
                </p>
            </div>
        </div>
    )
}

export default Kickdesc