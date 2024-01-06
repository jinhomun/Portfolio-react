import React from 'react'
import Highlight from 'react-highlight'

const moviedesc = () => {
  return (
    <div className="list">
                        <div className="item__inner">
                            <p className="desc">
                                On Movie는 Vue.js의 기능을 활용하여 영화 정보를 편리하게 찾을 수 있는 사이트입니다.<br/>
                                <br/>
                                1. 최신 영화, 인기 영화, 개봉예정 영화, 최고 평점 영화 보기 <br/>
                                각 영화 목록 항목에는 영화 제목, 개봉일, 평점 등의 정보가 표시됩니다.<br/>
                                2. 영화 정보 보기<br/>
                                영화 목록을 클릭하면 해당 영화의 상세 정보를 볼 수 있습니다. 상세 정보에는 영화의 장르, 러닝타임, 출연진, 예고편 영상 등의 정보가 포함됩니다.<br/> 
                                3. 영화 검색 기능<br/>
                                영화 검색창에 영화 제목을 검색하면 관련된 결과가 출력됩니다.<br/>
                            </p>
                        </div>
                        <div className="item__inner">
                            <p className="desc">
                                on Mounted<br />
                                onMounted는 Vue.js에서 사용되는 라이프사이클 훅 중 하나입니다. <br />   
                                Vue.js는 컴포넌트 기반의 웹 애플리케이션을 만들기 위한 프레임워크로서, 컴포넌트의 라이프사이클을 이용하여 다양한 작업을 수행할 수 있습니다. <br />   
                                onMounted 훅은 Vue 3에서 도입된 훅으로, 컴포넌트가 마운트된 후에 실행되는 함수를 정의할 수 있습니다. <br />   
                            </p>
                        </div>
                        <div className="item__inner">
                            <p className="desc">
                                v-for (반복문)<br/>
                                v-for 디렉티브는 배열이나 객체의 각 항목을 반복하여 템플릿에 렌더링할 때 사용됩니다. <br/> 
                                v-if (조건문)<br/>
                                v-if 디렉티브는 주어진 조건이 참일 때에만 해당 엘리먼트를 렌더링할 때 사용됩니다. <br/>
                                <Highlight className="javascript"> 
                                {`<div class="credit cast">
        <div v-for="(cast, index) in movieCredits.cast.slice(0, 5)" :key="index">
            <img v-if="cast.profile_path" :src="'https://image.tmdb.org/t/p/w500' + cast.profile_path" :alt="cast.name">
            <img v-else src="../../assets/img/profile.jpg" alt="">
            <p class="character">{{ cast.character }}</p>
            <p class="name">{{ cast.name }}</p>
        </div>
  </div>`}
                                </Highlight>
                            </p>
                        </div>
                        <div className="item__inner">
                            <p className="desc">
                                API 가져오기<br/>
                                <Highlight className="javascript"> 
                                {`const movies = ref([]);
onMounted(async () => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
        params: {
            api_key: ''// 실제 API 키로 대체
        },
        });

        console.log(response); // response.data를 출력하여 실제 데이터를 확인합니다.
        movies.value = response.data.results;
        console.log(movies)
    } catch (err) {
        console.error('Error fetching popular movies:', err);
    }
});`}
                                </Highlight><br/>
                                검색한 데이터값 API에 전달하기<br/> 
                                <Highlight className="javascript"> 
                                {`const searchKeyword = ref(''); // 변수 추가 해주기.
const searchMovies = async () => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
            api_key: '',// 실제 API 키로 대체
            language: 'KO-KR',
            page: '1',
            query: searchKeyword.value, // API에 전달하기.
        },
        });
        movies.value = response.data.results;
    } catch (err) {
        console.error(err);
    }
}

// input에 v-model 추가
<input type="search" v-model="searchKeyword" placeholder="검색어를 입력해주세요" @keyup.enter="searchMovies">
<button type="submit" @click="searchMovies">검색</button>`}

                                </Highlight>
                            </p>
                        </div>
                       
                    </div>
  )
}

export default moviedesc