import { Graph } from '@/types/graph/GraphProps';

const getGraphData = async (): Promise<Graph> => {
  const nodes = [
    // 루트 노드
    { id: '1', group: '1', title: '컴퓨터 과학' },

    // 1차 카테고리
    { id: '2', group: '4', title: '알고리즘' },
    { id: '3', group: '2', title: '자료구조' },
    { id: '4', group: '11', title: '프로그래밍 언어' },
    { id: '5', group: '2', title: '컴퓨터 구조' },
    { id: '6', group: '6', title: '인공지능' },
    { id: '7', group: '8', title: '운영체제' },
    { id: '8', group: '2', title: '데이터베이스' },
    { id: '9', group: '14', title: '네트워크' },
    { id: '10', group: '10', title: '소프트웨어 공학' },

    // 알고리즘 하위 카테고리
    { id: '11', group: '4', title: '정렬 알고리즘' },
    { id: '12', group: '4', title: '동적 프로그래밍' },
    { id: '13', group: '4', title: '그래프 알고리즘' },
    { id: '14', group: '4', title: '검색 알고리즘' },
    { id: '15', group: '4', title: '최적화 알고리즘' },

    // 정렬 알고리즘
    { id: '16', group: '4', title: '버블 정렬' },
    { id: '17', group: '4', title: '퀵 정렬' },
    { id: '18', group: '4', title: '병합 정렬' },
    { id: '19', group: '4', title: '삽입 정렬' },
    { id: '20', group: '4', title: '선택 정렬' },

    // 동적 프로그래밍
    { id: '21', group: '4', title: '배낭 문제' },
    { id: '22', group: '4', title: '최장 공통 부분 수열' },
    { id: '23', group: '4', title: '최단 경로 문제' },

    // 그래프 알고리즘
    { id: '24', group: '4', title: '너비 우선 탐색' },
    { id: '25', group: '4', title: '깊이 우선 탐색' },
    { id: '26', group: '4', title: '다익스트라 알고리즘' },

    // 자료구조
    { id: '27', group: '2', title: '배열' },
    { id: '28', group: '2', title: '연결 리스트' },
    { id: '29', group: '2', title: '트리' },
    { id: '30', group: '2', title: '그래프' },
    { id: '31', group: '2', title: '해시 테이블' },
    { id: '32', group: '2', title: '스택' },
    { id: '33', group: '2', title: '큐' },

    // 트리 하위 항목
    { id: '34', group: '2', title: '이진 트리' },
    { id: '35', group: '2', title: 'AVL 트리' },
    { id: '36', group: '2', title: '레드-블랙 트리' },

    // 프로그래밍 언어
    { id: '37', group: '11', title: '파이썬' },
    { id: '38', group: '11', title: '자바스크립트' },
    { id: '39', group: '11', title: '자바' },
    { id: '40', group: '11', title: 'C++' },
    { id: '41', group: '11', title: 'R' },
    { id: '42', group: '11', title: '고' },

    // 컴퓨터 구조
    { id: '43', group: '2', title: 'CPU 설계' },
    { id: '44', group: '2', title: '메모리 계층' },
    { id: '45', group: '2', title: '병렬 컴퓨팅' },
    { id: '46', group: '2', title: '파이프라이닝' },
    { id: '47', group: '2', title: '캐시 메모리' },

    // 인공지능 하위 카테고리
    { id: '48', group: '6', title: '기계 학습' },
    { id: '49', group: '6', title: '신경망' },
    { id: '50', group: '6', title: '자연어 처리' },

    // 기계 학습 세부 항목
    { id: '51', group: '6', title: '지도 학습' },
    { id: '52', group: '6', title: '비지도 학습' },
    { id: '53', group: '6', title: '강화 학습' },

    // 신경망
    { id: '54', group: '6', title: '합성곱 신경망' },
    { id: '55', group: '6', title: '순환 신경망' },
    { id: '56', group: '6', title: '생성적 적대 신경망' },

    // 운영체제
    { id: '57', group: '8', title: 'Linux' },
    { id: '58', group: '8', title: 'Windows' },
    { id: '59', group: '8', title: 'macOS' },
    { id: '60', group: '8', title: '프로세스 관리' },
    { id: '61', group: '8', title: '메모리 관리' },

    // 데이터베이스
    { id: '62', group: '2', title: '관계형 데이터베이스' },
    { id: '63', group: '2', title: 'NoSQL' },
    { id: '64', group: '2', title: 'SQL' },
    { id: '65', group: '2', title: '데이터베이스 설계' },

    // 네트워크
    { id: '66', group: '14', title: 'TCP/IP' },
    { id: '67', group: '14', title: '라우팅' },
    { id: '68', group: '14', title: '네트워크 보안' },
    { id: '69', group: '14', title: '클라우드 컴퓨팅' },

    // 소프트웨어 공학
    { id: '70', group: '10', title: '애자일 방법론' },
    { id: '71', group: '10', title: '소프트웨어 테스팅' },
    { id: '72', group: '10', title: '버전 관리' },
    // 노드 배열에 추가 (기존 노드 다음에 붙이세요)
    { id: '73', group: '3', title: '웹 프로그래밍' },

// 웹 프로그래밍 하위 카테고리
    { id: '74', group: '3', title: '프론트엔드 기술' },
    { id: '75', group: '3', title: '백엔드 기술' },
    { id: '76', group: '3', title: '웹 프레임워크' },
    { id: '77', group: '3', title: '웹 표준' },

// 프론트엔드 기술 세부 항목
    { id: '78', group: '3', title: 'HTML' },
    { id: '79', group: '3', title: 'CSS' },
    { id: '80', group: '3', title: '자바스크립트' },
    { id: '81', group: '3', title: 'React' },
    { id: '82', group: '3', title: 'Vue.js' },
    { id: '83', group: '3', title: 'Angular' },

// 백엔드 기술 세부 항목
    { id: '84', group: '3', title: 'Node.js' },
    { id: '85', group: '3', title: 'Django' },
    { id: '86', group: '3', title: 'Spring' },
    { id: '87', group: '3', title: 'Flask' },
    { id: '88', group: '3', title: 'Express.js' },

// 웹 프레임워크
    { id: '89', group: '3', title: '부트스트랩' },
    { id: '90', group: '3', title: 'Tailwind CSS' },
    { id: '91', group: '3', title: 'Next.js' },
    { id: '92', group: '3', title: 'Nuxt.js' },

    // 노드 배열에 추가
    { id: '93', group: '14', title: '네트워크 보안' },
    { id: '94', group: '14', title: '네트워크 프로토콜' },
    { id: '95', group: '14', title: '클라우드 컴퓨팅' },
    { id: '96', group: '14', title: '분산 시스템' },

// 네트워크 보안 세부 항목
    { id: '97', group: '14', title: '암호화' },
    { id: '98', group: '14', title: '방화벽' },
    { id: '99', group: '14', title: 'SSL/TLS' },
    { id: '100', group: '14', title: '침입 탐지 시스템' },

// 네트워크 프로토콜
    { id: '101', group: '14', title: 'HTTP/HTTPS' },
    { id: '102', group: '14', title: 'FTP' },
    { id: '103', group: '14', title: 'SMTP' },
    { id: '104', group: '14', title: 'WebSocket' },

// 클라우드 컴퓨팅
    { id: '105', group: '14', title: 'AWS' },
    { id: '106', group: '14', title: 'Azure' },
    { id: '107', group: '14', title: 'Google Cloud' },
    { id: '108', group: '14', title: 'Docker' },
    { id: '109', group: '14', title: 'Kubernetes' },

// 분산 시스템
    { id: '110', group: '14', title: '마이크로서비스' },
    { id: '111', group: '14', title: '분산 데이터베이스' },
    { id: '112', group: '14', title: '분산 캐싱' }
  ];

  // 노드에 대한 링크 (parent-child 관계)
  const links = nodes.slice(1, 1).map((node, index) => ({
    source: '1',
    target: node.id,
  })).concat([
    // 알고리즘 하위 카테고리 연결
    { source: '2', target: '11' },
    { source: '2', target: '12' },
    { source: '2', target: '13' },
    { source: '2', target: '14' },
    { source: '2', target: '15' },

    // 정렬 알고리즘 연결
    { source: '11', target: '16' },
    { source: '11', target: '17' },
    { source: '11', target: '18' },
    { source: '11', target: '19' },
    { source: '11', target: '20' },

    // 동적 프로그래밍 연결
    { source: '12', target: '21' },
    { source: '12', target: '22' },
    { source: '12', target: '23' },

    // 그래프 알고리즘 연결
    { source: '13', target: '24' },
    { source: '13', target: '25' },
    { source: '13', target: '26' },

    // 자료구조 하위 항목 연결
    { source: '3', target: '27' },
    { source: '3', target: '28' },
    { source: '3', target: '29' },
    { source: '3', target: '30' },
    { source: '3', target: '31' },
    { source: '3', target: '32' },
    { source: '3', target: '33' },

    // 트리 하위 항목 연결
    { source: '29', target: '34' },
    { source: '29', target: '35' },
    { source: '29', target: '36' },

    // 프로그래밍 언어 연결
    { source: '4', target: '37' },
    { source: '4', target: '38' },
    { source: '4', target: '39' },
    { source: '4', target: '40' },
    { source: '4', target: '41' },
    { source: '4', target: '42' },

    // 컴퓨터 구조 연결
    { source: '5', target: '43' },
    { source: '5', target: '44' },
    { source: '5', target: '45' },
    { source: '5', target: '46' },
    { source: '5', target: '47' },

    // 인공지능 연결
    { source: '6', target: '48' },
    { source: '6', target: '49' },
    { source: '6', target: '50' },

    // 기계 학습 연결
    { source: '48', target: '51' },
    { source: '48', target: '52' },
    { source: '48', target: '53' },

    // 신경망 연결
    { source: '49', target: '54' },
    { source: '49', target: '55' },
    { source: '49', target: '56' },

    // 운영체제 연결
    { source: '7', target: '57' },
    { source: '7', target: '58' },
    { source: '7', target: '59' },
    { source: '7', target: '60' },
    { source: '7', target: '61' },

    // 데이터베이스 연결
    { source: '8', target: '62' },
    { source: '8', target: '63' },
    { source: '8', target: '64' },
    { source: '8', target: '65' },

    // 네트워크 연결
    { source: '9', target: '66' },
    { source: '9', target: '67' },
    { source: '9', target: '68' },
    { source: '9', target: '69' },

    // 소프트웨어 공학 연결
    { source: '10', target: '70' },
    { source: '10', target: '71' },
    { source: '10', target: '72' },

    // 웹 프로그래밍 연결
    // { source: '1', target: '73' },

// 웹 프로그래밍 하위 카테고리 연결
    { source: '73', target: '74' },
    { source: '73', target: '75' },
    { source: '73', target: '76' },
    { source: '73', target: '77' },

// 프론트엔드 기술 연결
    { source: '74', target: '78' },
    { source: '74', target: '79' },
    { source: '74', target: '80' },
    { source: '74', target: '81' },
    { source: '74', target: '82' },
    { source: '74', target: '83' },

// 백엔드 기술 연결
    { source: '75', target: '84' },
    { source: '75', target: '85' },
    { source: '75', target: '86' },
    { source: '75', target: '87' },
    { source: '75', target: '88' },

// 웹 프레임워크 연결
    { source: '76', target: '89' },
    { source: '76', target: '90' },
    { source: '76', target: '91' },
    { source: '76', target: '92' },


// 네트워크 세부 분야 연결
    { source: '9', target: '93' },
    { source: '9', target: '94' },
    { source: '9', target: '95' },
    { source: '9', target: '96' },

// 네트워크 보안 연결
    { source: '93', target: '97' },
    { source: '93', target: '98' },
    { source: '93', target: '99' },
    { source: '93', target: '100' },

// 네트워크 프로토콜 연결
    { source: '94', target: '101' },
    { source: '94', target: '102' },
    { source: '94', target: '103' },
    { source: '94', target: '104' },

// 클라우드 컴퓨팅 연결
    { source: '95', target: '105' },
    { source: '95', target: '106' },
    { source: '95', target: '107' },
    { source: '95', target: '108' },
    { source: '95', target: '109' },

// 분산 시스템 연결
    { source: '96', target: '110' },
    { source: '96', target: '111' },
    { source: '96', target: '112' }

  ]);

  return { nodes, links };
};

export default getGraphData;
