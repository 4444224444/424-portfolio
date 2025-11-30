// src/data/projects.js
import ok1 from '../assets/OK1.svg'
import ok2 from '../assets/OK2.svg'
import ok3 from '../assets/OK3.svg'
import ok4 from '../assets/OK4.svg'
import ok5 from '../assets/OK5.svg'



const projects = [
{
  id: 'baro-eat',
  title: 'BARO-EAT',
  thumbnail: '/images/baro-thumb.png',
  images: [
    '/images/baro-1.png',
    '/images/baro-2.png',
    '/images/baro-3.png',
    '/images/baro-4.png',
    '/images/baro-5.png',
  ],
  overview: '디자인 시안을 바탕으로 반응형 구조와 접근성을 고려한 화면을 직접 코딩하며, HTML, CSS, JavaScript의 구조적 역할을 체계적으로 이해하게 되었습니다. 첫 협업 프로젝트였던 만큼, 디자이너·기획자와의 커뮤니케이션을 통해 퍼블리셔로서의 조율 능력과 프로젝트 전반의 흐름을 함께 배울 수 있던 경험이었습니다.',
  tools: ['HTML', 'CSS', 'JavaScript'],
  link: 'https://4444224444.github.io/BaroEat/',
  category: 'html',
},
{
  id: 'O.K',
  title: 'O.K',
  thumbnail: '/images/project-3.png',
  images: [
    ok1,
    ok2,
    ok3,
    ok4,
    ok5,
  ],
  overview: '2025년 계원예술대학교 팀 ‘콩밥’ 졸업 작품으로, 인원 6명이 협업하여 진행한 프로젝트입니다. 팀원이 디자인을 담당하고, React와 SCSS를 기반으로 한 웹 구현 담당했습니다. GitHub를 활용한 버전 관리와 코드 병합을 통해 협업 환경을 효율적으로 유지하며 프로젝트를 통해 실무에 가까운 협업 개발 프로세스와 코드 관리 체계를 익혔습니다. ',
  tools: ['React', 'SCSS'],
  category: 'react',
  link: 'https://mnmnlilimnmnlil.github.io/OK/main',
},
  {
    id: 'MY-WEATHER',
    title: 'MY-WEATHER',
    thumbnail: '/images/project-3.png',
    images: [],
    overview: 'OpenWeather API를 활용하여 실시간 날씨에 맞춰 영화, 음악, 도서를 추천하는 큐레이션 웹입니다. 사용자가 접속한 지역의 날씨 데이터를 기반으로 배경 화면이 변화하도록 구현해, 시각적으로 날씨의 분위기를 느낄 수 있는 감각적인 웹 경험을 제공합니다. 또한 로컬 스토리지를 활용한 로그인 접근 제한 기능을 통해 로그인한 사용자만 콘텐츠를 이용할 수 있도록 설정하며, 프론트엔드에서의 데이터 연동과 접근 제어 흐름을 깊이 이해할 수 있었습니다. API 데이터 처리와 사용자 인증, UI 반응을 함께 다루며 웹이 가진 실시간성과 몰입형 인터랙션의 가능성을 경험한 프로젝트입니다.',
    tools: ['React', 'CSS', 'Open Weather API'],
    category: 'react',
    link: 'https://weatherweb424.netlify.app/',
  },
  {
    id: 'BTW',
    title: 'Back to the Web',
    thumbnail: '/images/project-2.png',
    images: [
      '/images/orbit-1.png',
      '/images/orbit-2.png',
    ],
    overview: '여기에 프로젝트에 대한 설명 쓰기',
    tools: ['React', 'CSS', 'Three.js'],
    category: 'react',
    link: '#',
  },
  {
    id: 'Neuroverse',
    title: 'Neuroverse',
    thumbnail: '/images/project-4.png',
    images: [],
    overview: '여기에 프로젝트에 대한 설명 쓰기',
    tools: ['HTML', 'CSS', 'JavaScript'],
    category: 'html',
    link: '#',
  },
  {
    id: 'Now-Playing',
    title: 'Now-Playing',
    thumbnail: '/images/project-5.png',
    images: [],
    overview: '여기에 프로젝트에 대한 설명 쓰기',
    tools: ['ejs','node.js','MongoDB','Spotify API'],
    category: 'three',
    link: '#',
  },
]

export default projects
