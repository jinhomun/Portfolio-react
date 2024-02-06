import React from "react";
import Highlight from "react-highlight";

const Musicdesc = () => {
  return (
    <div className="list">
      <div className="item__inner">
        <p className="desc">
          MusicPlayer은 React + RapidApi(Shazam Api)를 이용해서 만들었습니다.
          <br />
          <details>
            <summary>설치</summary>
            <Highlight className="javascript">
              시작하기전에 👉👉👉
              <a href="https://drive.google.com/file/d/1iTlXIZ4T3BBKjgLMsDpQn-Eux1B3ZyXO/view" target="_blank" rel="noopener noreferrer">
                Starter Code
              </a>
              <br />
              Starter Code 다운을 받고 npm i 해줍니다.
            </Highlight>
          </details>
        </p>
      </div>
      <div className="item__inner">
        <p className="desc">
          <details>
            <summary>Tailwind CSS</summary>
            <Highlight className="javascript">
              <br />
              Tailwind CSS는 웹 개발자가 쉽게 사용할 수 있는 신축성 있는 CSS 프레임워크입니다.<br />
              Tailwind CSS를 사용하면 개발자는 빠르게 디자인을 구현할 수 있고,<br />
              일관된 스타일을 유지하면서도 필요한 경우 쉽게 커스터마이징할 수 있습니다.<br />
              Tailwind는 HTML과의 밀접한 통합을 통해 개발자에게 직관적이고 간결한 코드 작성을 제공합니다.<br />
              <br />
            </Highlight>
          </details>
        </p>
      </div>

      <div className="item__inner">
        <p className="desc">
          <h3>src</h3>
          <p>
            React에서 src는 주로 프로젝트의 소스 코드 파일이 위치하는 디렉토리를 나타냅니다.<br />
          </p>
          <details>
            <summary>App.jsx - React 애플리케이션의 메인</summary>
            App 컴포넌트는 각 페이지에 대한 라우팅 및 레이아웃을 조율하며,<br />
            상태 관리를 위해 Redux의 useSelector를 사용하여 현재 재생 중인 노래 정보를 추적합니다.<br />
            <Highlight className="javascript">
              {` 
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <Searchbar />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
`}
            </Highlight>
          </details>
          <details>
            <summary>index.jsx - React 애플리케이션의 진입점을 설정</summary>
            이 코드는 React 앱의 시작점으로, React 앱을 구성하고<br />
            Redux 스토어와 React Router를 통합하여 전반적인 애플리케이션의 기반을 마련합니다.<br />
            <Highlight className="javascript">
              {`
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
);
`}
            </Highlight>
          </details>
          <details>
            <summary>src > assets > constants.js</summary>
            React 애플리케이션에서 사용될 장르와 네비게이션 링크를 정의하는 부분이고,<br />
            'react-icons/hi'에서 불러온 아이콘들은 네비게이션 링크에 그래픽적 표현으로 사용됩니다.<br />
            <Highlight className="javascript">
              {`
import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';

export const genres = [
  { title: 'Pop', value: 'POP' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Dance', value: 'DANCE' },
  { title: 'Electronic', value: 'ELECTRONIC' },
  { title: 'Soul', value: 'SOUL_RNB' },
  { title: 'Alternative', value: 'ALTERNATIVE' },
  { title: 'Rock', value: 'ROCK' },
  { title: 'Latin', value: 'LATIN' },
  { title: 'Film', value: 'FILM_TV' },
  { title: 'Country', value: 'COUNTRY' },
  { title: 'Worldwide', value: 'WORLDWIDE' },
  { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
  { title: 'House', value: 'HOUSE' },
  { title: 'K-Pop', value: 'K_POP' },
];

export const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];
`}
            </Highlight>
          </details>
        </p>
      </div>

      <div className="item__inner">
        <p className="desc">
          <h3>components</h3>
          <p>
            React에서 "컴포넌트"는 애플리케이션을 작은 독립적인 부분으로 나누는 데 사용되는 핵심 개념입니다.<br />
            각각의 컴포넌트는 자체적으로 동작하고 재사용 가능하며, 코드의 가독성을 향상시키는데 도움이 됩니다.<br />
          </p>
          <details>
            <summary>src > components </summary>
            <Highlight className="javascript">
              {`React에서 "컴포넌트"는 애플리케이션을 작은 독립적인 부분으로 나누는 데 사용되는 핵심 개념입니다.
 각각의 컴포넌트는 자체적으로 동작하고 재사용 가능하며, 코드의 가독성을 향상시키는데 도움이 됩니다. 
`}
            </Highlight>
            <details>
              <summary>index.js - 여러 컴포넌트를 가져오고 내보내는 역할 </summary>
              React 애플리케이션에서 사용되는 여러 컴포넌트들을 가져오고 내보내는 파일입니다.<br />
              <Highlight className="javascript">
                {`import Sidebar from './Sidebar';
import Searchbar from './Searchbar';
import SongCard from './SongCard';
import TopPlay from './TopPlay';
import ArtistCard from './ArtistCard';
import DetailsHeader from './DetailsHeader';
import SongBar from './SongBar';
import RelatedSongs from './RelatedSongs';
import MusicPlayer from './MusicPlayer';
import Loader from './Loader';
import Error from './Error';

export {
  TopPlay,
  Sidebar,
  SongCard,
  Searchbar,
  ArtistCard,
  DetailsHeader,
  SongBar,
  RelatedSongs,
  MusicPlayer,
  Loader,
  Error,
}; 
`}
              </Highlight>

            </details>

            <details>
              <summary>ArtistCard.jsx - 아티스트 정보 카드 </summary>
              "ArtistCard" 컴포넌트는 간결하게 디자인된 아티스트 정보 카드를 나타내며,<br />
              사용자가 클릭하면 해당 아티스트의 상세 정보 페이지로 이동하도록 구현되어 있습니다.<br />
              <Highlight className="javascript">
                {`import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(/artists/{track?.artists[0].adamid})}
    >
      <img alt="song_img" src={track?.images?.coverart} className="w-full h-56 rounded-lg" />
      <p className="mt-4 font-semibold text-lg text-white truncate">
        {track?.subtitle}
      </p>
    </div>
  );
};

export default ArtistCard;
`}
              </Highlight>

            </details>

            <details>
              <summary>DetailsHeader.jsx - 아티스트or노래에 대한 세부 정보 페이지의 헤더</summary>
              "DetailsHeader" 컴포넌트는 아티스트 또는 노래의 세부 정보를 시각적으로 표현하는 헤더를 생성합니다.<br />
              <Highlight className="javascript">
                {`import React from 'react';
import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => (
  <div className="relative w-full flex flex-col">
    <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />

    <div className="absolute inset-0 flex items-center">
      <img
        alt="profile"
        src={
          artistId ? artistData?.attributes?.artwork?.url
            .replace('{w}', '500')
            .replace('{h}', '500')
            : songData?.images?.coverart
        }
        className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
      />

      <div className="ml-5">
        <p className="font-bold sm:text-3xl text-xl text-white">
          {artistId ? artistData?.attributes?.name : songData?.title}
        </p>
        {!artistId && (
          <Link to={/artists/{songData?.artists[0]?.adamid}}>
            <p className="text-base text-gray-400 mt-2">{songData?.subtitle}</p>
          </Link>
        )}

        <p className="text-base text-gray-400 mt-2">
          {artistId
            ? artistData?.attributes?.genreNames[0]
            : songData?.genres?.primary}
        </p>
      </div>
    </div>

    <div className="w-full sm:h-44 h-24" />
  </div>
);

export default DetailsHeader;

`}
              </Highlight>

            </details>

            <details>
              <summary>Error.jsx - 오류 메세지</summary>
              이 컴포넌트는 어떤 오류가 발생했을 때 사용자에게 표시될 오류 메시지를 나타냅니다.<br />
              <Highlight className="javascript">
                {`const Error = () => (
  <div className="w-full flex justify-center">
    <h1 className="font-bold text-2xl text-white mt-2">Something went wrong. Please try again.</h1>
  </div>
);

export default Error;
`}
              </Highlight>

            </details>

            <details>
              <summary>Loader.jsx - 로딩 화면</summary>
              이 컴포넌트는 어떤 작업이 진행 중일 때 사용자에게 로딩 중임을 시각적으로 나타내는 로딩 화면을 표시합니다.<br />
              <Highlight className="javascript">
                {`import { loader } from '../assets';

const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <img src={loader} alt="loader" className="w-32 h-32 object-contain" />
    <h1 className="font-bold text-2xl text-white mt-2"> {title || 'Loading..'}</h1>
  </div>
);

export default Loader;
`}
              </Highlight>

            </details>

            <details>
              <summary>PlayPause.jsx - 재생&일시정지 기능</summary>
              "PlayPause" 컴포넌트는 음악 재생 및 일시정지를 나타내는 아이콘을 사용하여 사용자에게 간편한 제어 기능을 제공합니다.<br />
              <Highlight className="javascript">
                {`import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (isPlaying && activeSong?.title === song.title ? (
  <FaPauseCircle
    size={35}
    className="text-gray-300"
    onClick={handlePause}
  />
) : (
  <FaPlayCircle
    size={35}
    className="text-gray-300"
    onClick={handlePlay}
  />
));

export default PlayPause;

`}
              </Highlight>

            </details>

            <details>
              <summary>RelatedSongs.jsx - 아티스트와 관련된 음악목록</summary>
              "RelatedSongs" 컴포넌트는 특정 아티스트와 관련된 음악 목록을 제공하며, 각 음악은 "SongBar"를 통해 나타낼 수 있습니다.<br />
              <Highlight className="javascript">
                {`
import React from 'react';

import SongBar from './SongBar';

const RelatedSongs = ({ data, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related Songs:</h1>

    <div className="mt-6 w-full flex flex-col">
      {data?.map((song, i) => (
        <SongBar
          key={{artistId}-{song.key}-{i}}
                song={song}
                i={i}
                artistId={artistId}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick}
        />
      ))}
  </div>
</div>
);

export default RelatedSongs;
`}
              </Highlight>

            </details>

            <details>
              <summary>Searchbar.jsx - 검색기능</summary>
              "Searchbar" 컴포넌트는 사용자에게 검색 기능을 제공하는 간결하고 스타일링된 검색바를 표시합니다.<br />
              검색어를 입력하고 제출하면 해당 검색어로 라우팅되어 검색 결과 페이지로 이동합니다.<br />
              <Highlight className="javascript">
                {`
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(/search/{searchTerm});
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
      <label htmlFor="search-field" className="sr-only">
        Search all files
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4"
          placeholder="Search"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Searchbar;

`}
              </Highlight>

            </details>

            <details>
              <summary>Sidebar.jsx - 사이드 메뉴</summary>
              "Sidebar" 컴포넌트는 웹 페이지에서 일반적인 크기의 화면에서는 사이드바를 표시하고,<br />
              모바일 화면에서는 햄버거 메뉴를 통해 메뉴를 펼치거나 닫을 수 있도록 제공합니다.<br />
              <Highlight className="javascript">
                {`
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';

import { logo } from '../assets';

const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks />
      </div>

      {/* Mobile sidebar */}
      <div className="absolute md:hidden block top-6 right-3">
        {!mobileMenuOpen ? (
          <HiOutlineMenu className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(true)} />
        ) : (
          <RiCloseLine className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(false)} />
        )}
      </div>

      <div className={absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition {mobileMenuOpen ? 'left-0' : '-left-full'}}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
`}
              </Highlight>

            </details>

            <details>
              <summary>SongBar.jsx - 음악 재생바</summary>
              "SongBar" 컴포넌트는 각 음악 트랙을 바 형태로 표시하며, 클릭 시에는 해당 트랙의 상세 정보 페이지로 이동할 수 있습니다.<br />
              만약 음악 트랙이 가수에 속한 것이라면 재생 및 일시정지 기능(PlayPause)을 수행하는 버튼도 표시됩니다.<br />
              <Highlight className="javascript">
                {`
/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';

import PlayPause from './PlayPause';

const SongBar = ({ song, i, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className={w-full flex flex-row items-center hover:bg-[#4c426e] {activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2}>
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-lg"
        src={artistId ? song?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125') : song?.images?.coverart}
        alt={song?.title}
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        {!artistId ? (
          <Link to={/songs/{song.key}}>
            <p className="text-xl font-bold text-white">
              {song?.title}
            </p>
          </Link>
        ) : (
          <p className="text-xl font-bold text-white">
            {song?.attributes?.name}
          </p>
        )}
        <p className="text-base text-gray-300 mt-1">
          {artistId ? song?.attributes?.albumName : song?.subtitle}
        </p>
      </div>
    </div>
    {!artistId
      ? (
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={() => handlePlayClick(song, i)}
        />
      )
      : null}
  </div>
);

export default SongBar;

`}
              </Highlight>

            </details>
            <details>
              <summary>SongCard.jsx - 음악 트랙을 나타내는 카드</summary>
              "SongCard" 컴포넌트는 각 음악 트랙을 카드 형태로 나타내며, 사용자가 해당 트랙을 클릭할 때마다 플레이어 컨트롤이 동적으로 표시됩니다.<br />
              페이지 내에서 음악 트랙을 손쉽게 찾고 이동할 수 있는 유용한 인터페이스를 제공합니다.<br />
              <Highlight className="javascript">
                {`
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex {activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}}>
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img
          alt="song_img"
          src={song.images?.coverart || 'https://github.com/jinhomun/project_music_player/assets/144635699/4bd79709-29fe-41fe-beb3-852add0cb704'} // Provide the path to your default image
          className="w-full h-full rounded-lg"
        />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={/songs/{song?.key}}>
            {song.title}
          </Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link to={song.artists ? /artists/{song?.artists[0]?.adamid} : '/top-artists'}>
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
`}
              </Highlight>

            </details>

            <details>
              <summary>TopPlay.jsx - 음악 트랙을 나타내는 카드</summary>
              "TopPlay" 컴포넌트는 Shazam의 상위 차트와 아티스트를 사용자에게 시각적으로 표시하며,<br />
              사용자가 상위 차트의 음악을 재생하거나 상위 아티스트의 이미지를 스와이프하여 둘러볼 수 있도록 구성되어 있습니다.<br />
              <Highlight className="javascript">
                {`
/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

import 'swiper/css';
import 'swiper/css/free-mode';

const TopChartCard = ({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className={w-full flex flex-row items-center hover:bg-[#4c426e] {activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2}>
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img className="w-20 h-20 rounded-lg" src={song.images?.coverart || 'https://github.com/jinhomun/project_music_player/assets/144635699/4bd79709-29fe-41fe-beb3-852add0cb704'} alt={song?.title} />

      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link to={/songs/{song.key}}>
          <p className="text-xl font-bold text-white">
            {song?.title}
          </p>
        </Link>
        <Link to={/artists/{song?.artists?.[0]?.adamid}}>
          <p className="text-base text-gray-300 mt-1">
            {song?.subtitle}
          </p>
        </Link>
      </div>
    </div>
    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </div>
);

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  const topPlays = data?.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div ref={divRef} className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Charts</h2>
          <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((song, i) => (
            <TopChartCard
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, i)}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col mt-8">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Artists</h2>
          <Link to="/top-artists">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>

        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {topPlays?.slice(0, 5).map((artist) => (
            <SwiperSlide
              key={artist?.key}
              style={{ width: '25%', height: 'auto' }}
              className="shadow-lg rounded-full animate-slideright"
            >
              {artist?.artists && artist?.artists[0] && (
                <Link to={/artists/{artist.artists[0].adamid}}>
                  <img src={artist?.images?.background} alt="Name" className="rounded-full w-full object-cover" />
                </Link>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
`}
              </Highlight>

            </details>

          </details>
        </p>
      </div>

      <div className="item__inner">
        <p className="desc">
          <h3>pages</h3>
          <p>
            pages 폴더에 있는 각 파일은 애플리케이션의 개별 페이지를 나타냅니다.<br />
            React Router는 이러한 페이지 구조를 이해하고,<br />
            각 파일에 정의된 컴포넌트를 해당 경로에 매핑하여 페이지 간의 전환 및 라우팅을 쉽게 할 수 있게 도와줍니다.<br />
            React Router를 사용하면, /home, /about, /contact와 같은 경로로 각 페이지에 접근할 수 있게 됩니다.<br />
          </p>
          <details>
            <summary>src > pages </summary>
            {/* <Highlight className="javascript">
              {`pages 폴더에 있는 각 파일은 애플리케이션의 개별 페이지를 나타냅니다.
React Router는 이러한 페이지 구조를 이해하고,
각 파일에 정의된 컴포넌트를 해당 경로에 매핑하여 페이지 간의 전환 및 라우팅을 쉽게 할 수 있게 도와줍니다.
React Router를 사용하면, /home, /about, /contact와 같은 경로로 각 페이지에 접근할 수 있게 됩니다.
`}
            </Highlight> */}

            <details>
              <summary>index.js - 여러 컴포넌트를 가져오고 내보내는 역할</summary>
              React 애플리케이션에서 사용되는 여러 페이지 컴포넌트들을 내보내는 파일입니다.<br />
              <Highlight className="javascript">
                {`
import Discover from './Discover';
import TopArtists from './TopArtists';
import ArtistDetails from './ArtistDetails';
import SongDetails from './SongDetails';
import Search from './Search';
import TopCharts from './TopCharts';
import AroundYou from './AroundYou';

export {
  Discover,
  Search,
  TopArtists,
  ArtistDetails,
  SongDetails,
  TopCharts,
  AroundYou,
};

`}
              </Highlight>

            </details>

            <details>
              <summary>AroundYou.jsx - 사용자의 위치에 따라 해당 국가 주변의 음악 트랙을 동적으로 가져오는 역할</summary>
              컴포넌트는 사용자의 위치에 따라 Shazam API를 활용하여 해당 국가 주변의 음악 트랙을 동적으로 가져와 보여주는 역할을 수행합니다.<br />
              <Highlight className="javascript">
                {`
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

const CountryTracks = () => {
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  useEffect(() => {
    axios
      .get(https://geo.ipify.org/api/v2/country?apiKey={import.meta.env.VITE_GEO_API_KEY})
      .then((res) => setCountry(res?.data?.location.country))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [country]);

  if (isFetching && loading) return <Loader title="Loading Songs around you..." />;

  if (error && country !== '') return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Around you <span className="font-black">{country}</span></h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryTracks;

`}
              </Highlight>

            </details>

            <details>
              <summary>ArtistDetails.jsx - 특정 아티스트의 상세 정보와 해당 아티스트의 관련 곡 목록을 동적으로 가져와 보여주는 역할</summary>
              컴포넌트는 특정 아티스트의 상세 정보와 해당 아티스트의 관련 곡 목록을 동적으로 가져와 보여주는 역할을 수행합니다.<br />
              <Highlight className="javascript">
                {`
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);

  if (isFetchingArtistDetails) return <Loader title="Loading artist details..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId={artistId}
        artistData={artistData?.data[0]}
      />

      <RelatedSongs
        data={artistData?.data[0].views['top-songs']?.data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;

`}
              </Highlight>

            </details>

            <details>
              <summary>Discover.jsx - 사용자는 원하는 장르의 음악을 선택하고 감상할 수 있는 페이지</summary>
              Discover 컴포넌트로, 특정 장르의 음악을 탐색하고 표시하는 역할을 합니다.<br />
              <Highlight className="javascript">
                {`
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';
import { genres } from '../assets/constants';

const Discover = () => {
  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP');

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>

        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'pop'}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
`}
              </Highlight>

            </details>

            <details>
              <summary>Search.jsx - 검색</summary>
              이 컴포넌트를 통해 사용자는 검색 결과를 시각적으로 확인하고 검색어와 관련된 음악을 찾을 수 있습니다.<br />
              <Highlight className="javascript">
                {`
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Error, Loader, SongCard } from '../components';
import { useGetSongsBySearchQuery } from '../redux/services/shazamCore';

const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

  const songs = data?.tracks?.hits.map((song) => song.track);

  if (isFetching) return <Loader title={Searching {searchTerm}...} />;

                if (error) return <Error />;

                return (
                <div className="flex flex-col">
                  <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Showing results for <span className="font-black">{searchTerm}</span></h2>

                  <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                    {songs.map((song, i) => (
                      <SongCard
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                        i={i}
                      />
                    ))}
                  </div>
                </div>
                );
};

export default Search;
`}
              </Highlight>

            </details>

            <details>
              <summary>SongDetail.jsx - 음악상세정보</summary>
              이 컴포넌트를 통해 사용자는 현재 곡의 세부 정보 및 관련된 곡들을 편리하게 확인하고, 가사도 함께 확인할 수 있습니다.<br />
              <Highlight className="javascript">
                {`
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from '../redux/services/shazamCore';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid, id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching: isFetchinRelatedSongs, error } = useGetSongRelatedQuery({ songid });
  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid });

  if (isFetchingSongDetails && isFetchinRelatedSongs) return <Loader title="Searching song details" />;

  console.log(songData);

  if (error) return <Error />;

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId={artistId}
        songData={songData}
      />

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

        <div className="mt-5">
          {songData?.sections[1].type === 'LYRICS'
            ? songData?.sections[1]?.text.map((line, i) => (
              <p key={lyrics-{line}-{i}} className="text-gray-400 text-base my-1">{line}</p>
            ))
            : (
              <p className="text-gray-400 text-base my-1">Sorry, No lyrics found!</p>
            )}
        </div>
      </div>

      <RelatedSongs
        data={data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />

    </div>
  );
};

export default SongDetails;
`}
              </Highlight>

            </details>

            <details>
              <summary>TopArtists.jsx - 인기있는 아티스트 목록</summary>
              이 컴포넌트를 통해 사용자는 Shazam 차트에서 현재 인기 있는 아티스트 목록을 확인할 수 있습니다.<br />
              <Highlight className="javascript">
                {`
import React from 'react';

import { ArtistCard, Error, Loader } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading artists..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Top artists</h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track) => <ArtistCard key={track.key} track={track} />)}
      </div>
    </div>
  );
};

export default TopArtists;
`}
              </Highlight>

            </details>

            <details>
              <summary>TopCharts.jsx - 최상의 차트 목록 표시</summary>
              이 코드는 Shazam API를 사용하여 가져온 현재의 Top Charts(최상위 차트) 목록을 표시하는 TopCharts 컴포넌트입니다.<br />
              <Highlight className="javascript">
                {`
import React from 'react';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopCharts = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  if (isFetching) return <Loader title="Loading Top Charts" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Discover Top Charts</h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCharts;
`}
              </Highlight>

            </details>

          </details>
        </p>
      </div>

      <div className="item__inner">
        <p className="desc">
          <h3>Redux</h3>
          <p>
            Redux는 React 애플리케이션의 상태 관리를 위한 JavaScript 라이브러리로,<br />
            애플리케이션의 데이터 흐름을 효율적으로 관리할 수 있도록 도와줍니다.<br />
            Redux는 단일 스토어(Store)에 전체 애플리케이션의 상태를 저장하고,<br />
            상태를 변경하는 특정 규칙에 따라 액션(Action)을 디스패치하여 상태를 업데이트합니다.<br />
            이러한 방식으로 상태의 예측 가능성을 높이고, 복잡한 상태 관리를 간소화합니다.<br />
          </p>
          <details>
            <summary>src > redux </summary>
            {/* <Highlight className="javascript">
              {`Redux는 React 애플리케이션의 상태 관리를 위한 JavaScript 라이브러리로,
애플리케이션의 데이터 흐름을 효율적으로 관리할 수 있도록 도와줍니다.
Redux는 단일 스토어(Store)에 전체 애플리케이션의 상태를 저장하고,
상태를 변경하는 특정 규칙에 따라 액션(Action)을 디스패치하여 상태를 업데이트합니다.
이러한 방식으로 상태의 예측 가능성을 높이고, 복잡한 상태 관리를 간소화합니다.
`}
            </Highlight> */}
            <details>
              <summary>store.js - Redux Toolkit을 사용하여 Redux 스토어를 설정</summary>
              이 코드는 Redux Toolkit을 사용하여 효율적으로 Redux 스토어를 구성하고,<br />
              비동기 데이터 fetching을 위해 Shazam Core API와 Redux Toolkit Query를 통합하는 예시입니다.<br />
              <Highlight className="javascript">
                {`
import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamCoreApi } from './services/shazamCore';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
`}
              </Highlight>

            </details>

          </details>

          <details>
            <summary>src > redux > features > playerSlice.js </summary>
            <Highlight className="javascript">
              {`playerSlice.js - Redux Toolkit에서 제공하는 createSlice 함수를 사용하여 Redux Slice를 생성 
이 코드는 Redux Slice를 사용하여 애플리케이션의 플레이어 상태 및 관련 액션들을 효율적으로 정의한 것입니다.
이를 통해 Redux 코드를 보다 간결하게 유지하고 액션 및 상태를 쉽게 관리할 수 있습니다

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;

      if (action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks;
      } else {
        state.currentSongs = action.payload.data;
      }

      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    nextSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
  },
});

export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId } = playerSlice.actions;

export default playerSlice.reducer;
`}
            </Highlight>
          </details>

          <details>
            <summary>src > redux > services > shazamCore.js </summary>
            <Highlight className="javascript">
              {`shazamCore.js - Redux Toolkit의 createApi와 fetchBaseQuery를 사용하여 Shazam Core API와 상호작용하는 API 클라이언트를 생성하는 부분
이 코드는 Redux Toolkit Query를 사용하여 각 API 엔드포인트에 대한 쿼리 함수와 리액트 훅을 생성하며,
이를 사용하여 애플리케이션에서 Shazam Core API와 통신합니다.

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => 'v1/charts/world' }),
    getSongsByGenre: builder.query({ query: (genre) => v1/charts/genre-world?genre_code={genre} }),
    getSongsByCountry: builder.query({ query: (countryCode) => v1/charts/country?country_code={countryCode} }),
    getSongsBySearch: builder.query({ query: (searchTerm) => v1/search/multi?search_type=SONGS_ARTISTS&query={searchTerm} }),
    getArtistDetails: builder.query({ query: (artistId) => v2/artists/details?artist_id={artistId} }),
    getSongDetails: builder.query({ query: ({ songid }) => v1/tracks/details?track_id={songid} }),
    getSongRelated: builder.query({ query: ({ songid }) => v1/tracks/related?track_id={songid} }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;

`}
            </Highlight>
          </details>
        </p>
      </div >

      <div className="item__inner">
        <p className="desc">
          <details>
            <summary>.env</summary>
            <Highlight className="javascript">
              <br />
              .env 파일은 주로 환경 변수를 설정하는 데 사용되는 텍스트 파일입니다.<br />
              "env"는 "environment"의 약자로, 프로젝트나 애플리케이션의 환경 구성을 관리하는 데 도움이 됩니다.<br />
              .env 파일은 보통 프로젝트 루트 디렉토리에 위치하며, 환경 변수를 키-값 쌍으로 저장합니다.<br />
              github 업로드할때는, 반드시!!! .gitignore에 추가해야함!!<br />
              <br />
            </Highlight>
          </details>
        </p>
      </div>

    </div >
  );
};

export default Musicdesc;
