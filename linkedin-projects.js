const linkedInProjects = [
  { id: '7478795322106724352', title: '1024밴드 실시간 주파수 스펙트럼 분석기', summary: '오실로스코프 기능과 1024밴드 상세 분석을 결합하고, 특정 주파수 발생 패턴을 감지해 보안 에이전트에 적용한 실시간 분석 시스템입니다.', tags: ['Spectrum', 'Realtime', 'Security Agent'], images: 6 },
  { id: '7475891094589710337', title: 'L5 NetOps', summary: 'SDN, Kubernetes, Kafka, Redis, Neo4j, VectorRAG와 GraphRAG를 연결해 탐지부터 자가복구까지 수행하는 자동화 레벨 5 네트워크 운영 시스템입니다.', tags: ['NetOps', 'AIOps', 'Self-Healing'], images: 2 },
  { id: '7451181442119663616', title: '자기진화형 AI 보안 에이전트', summary: '취약점 자동 분석·대응, 실시간 침투경로 탐지, Neo4j 온톨로지 분석과 자기진화형 방어경로 생성을 결합한 보안 에이전트 구현 기록입니다.', tags: ['Cybersecurity', 'Neo4j', 'Autonomous Agent'], images: 8 },
  { id: '7435016766629646336', title: 'ORAUPG', summary: 'RDF/OWL 온톨로지와 GraphRAG·VectorRAG를 이용해 Oracle에서 PostgreSQL로의 마이그레이션 전 과정을 자동화하는 멀티에이전트 도구입니다.', tags: ['Migration', 'Ontology', 'Go'], images: 9 },
  { id: '7434898952258256896', title: 'AgentConductor', summary: '작업 난이도에 따라 8개 전문 보안 에이전트의 DAG 토폴로지를 동적으로 설계하고 최적화하는 멀티에이전트 오케스트레이션 시스템입니다.', tags: ['Multi-Agent', 'DAG', 'GraphRAG'], images: 12 },
  { id: '7434403715824041984', title: '통합 사이버보안 온톨로지', summary: 'RDF/OWL, SPARQL, Neo4j, VectorRAG와 GraphRAG를 통합해 공격 경로 탐색과 대응방안 생성을 수행하는 지능형 보안 플랫폼입니다.', tags: ['RDF/OWL', 'SPARQL', 'Attack Path'], images: 10 },
  { id: '7433886444550754304', title: 'NISP', summary: 'AI 멀티에이전트, Kali Linux와 MCP를 결합해 보안 스캔부터 취약점 분석·명령 생성·보고서 작성까지 자동화한 사이버보안 플랫폼입니다.', tags: ['Kali Linux', 'MCP', 'Security'], images: 7 },
  { id: '7433221937625169920', title: 'RAGFACTORY', summary: '지식그래프 온톨로지, VectorRAG, GraphRAG, LangChain과 LangGraph를 한곳에서 실습하고 검증하는 RAG 프로젝트 사이트입니다.', tags: ['RAG', 'LangGraph', 'Knowledge Graph'], images: 9 },
  { id: '7432860794892996608', title: 'Claude Remote Control', summary: '원격 환경에서 Claude Code와 개발 도구를 함께 제어하고, 필요한 서비스에 즉시 접근하도록 구성한 멀티 원격제어 구현입니다.', tags: ['Claude Code', 'Remote', 'Automation'], images: 4 },
  { id: '7432613510876123136', title: 'Categorical Movie Ontology', summary: '범주론적 온톨로지를 영화 추천에 적용하고 추천 경로를 시각화해 결과의 이유를 설명하는 지식그래프 기반 서비스입니다.', tags: ['Category Theory', 'Recommendation', 'Explainable AI'], images: 3 },
  { id: '7432305618406895616', title: 'CPGL AI Trend Web Service', summary: '새로운 CPGL 언어로 데이터 수집, AI 트렌드 분석과 보고서 자동 생성을 구현한 첫 웹서비스 결과물입니다.', tags: ['CPGL', 'AI Trend', 'Report'], images: 2 },
  { id: '7432208732564041728', title: 'CPGL Language', summary: 'C·Assembly·Python·Go·Rust의 장점을 결합하고 트랜스파일, 멀티에이전트와 MCP 기능을 내장한 AI 시대의 프로그래밍 언어 프로젝트입니다.', tags: ['Compiler', 'Language', 'MCP'], images: 5 },
  { id: '7431605219081289728', title: '오늘의 AI 트렌드 서비스', summary: 'AI 관련 데이터 수집과 분석을 자동화하고 핵심 동향을 사용자가 읽기 쉬운 화면과 보고서로 제공하는 트렌드 서비스입니다.', tags: ['Data Collection', 'Trend Analysis', 'Web'], images: 2 },
  { id: '7431326997869453312', title: 'AI 에이전트 트렌드 리포트', summary: 'AI 에이전트 관련 뉴스와 자료를 수집해 지식그래프를 갱신하고 보고서를 자동 생성하는 일일 분석 파이프라인입니다.', tags: ['Agent', 'Pipeline', 'Auto Report'], images: 1 },
  { id: '7429531293077504000', title: '3D Categorical Recommendation System', summary: 'Olog 기반 범주론적 온톨로지를 3차원 결정체로 구조화하고 VectorRAG·GraphRAG를 결합한 설명 가능한 추천 시스템입니다.', tags: ['Olog', '3D Ontology', 'VectorRAG'], images: 4 },
  { id: '7429071046835765249', title: 'Quantum Orbital AI Agent', summary: '수소 원자의 양자 오비탈을 지식그래프 온톨로지와 하이브리드 RAG로 모델링해 물리·화학 구조를 탐구하는 교육·연구용 AI 에이전트입니다.', tags: ['Quantum', 'Simulation', 'Education'], images: 2 },
  { id: '7428409549323362304', title: '재무제표 GraphRAG 분석', summary: '지식그래프 온톨로지 기반 VectorRAG·GraphRAG 에이전트를 실제 재무제표 분석에 적용해 근거 중심 결과를 도출한 실무 검증입니다.', tags: ['Finance', 'GraphRAG', 'Analysis'], images: 6 },
  { id: '7427932340011745280', title: 'Ontology RAG ERD/MES', summary: '기업 데이터 관계를 지식그래프로 표현하고 온톨로지 RAG를 적용한 ERD·MES 서비스 시스템 구현입니다.', tags: ['MES', 'ERD', 'Palantir-style'], images: 10 },
  { id: '7427036074511720448', title: 'Telegram · OpenClaw · Claude Code', summary: '텔레그램, OpenClaw와 Claude Code 멀티에이전트를 실시간으로 연동해 협업 자동화와 모니터링 체계를 구성한 프로젝트입니다.', tags: ['Telegram', 'OpenClaw', 'Claude Code'], images: 3 },
  { id: '7426906927718244353', title: 'On-premise Hybrid RAG Multi-Agent', summary: 'Vector RAG와 GraphRAG를 결합한 하이브리드 추론을 온프레미스 LLM 멀티에이전트 환경에 구현했습니다.', tags: ['On-premise', 'Hybrid RAG', 'LLM'], images: 6 },
  { id: '7425941643935170561', title: 'Claude Opus 4.6 vs ChatGPT 5.2', summary: '두 AI 모델을 실제 개발 작업에 사용하며 응답·추론·작업 수행 특성을 비교한 실사용 평가 기록입니다.', tags: ['Model Evaluation', 'Claude', 'ChatGPT'], images: 3 },
  { id: '7424746070120808448', title: 'OpenClaw 적용', summary: 'OpenClaw를 실제 에이전트 자동화 흐름에 적용하고 구성과 실행 결과를 화면으로 기록한 프로젝트입니다.', tags: ['OpenClaw', 'Agent', 'Automation'], images: 3 },
  { id: '7433492781056319488', title: 'AI Architecture Strategy', summary: 'AI가 도달하기 어려운 창의적 개발 설계와 양자 오비탈 시뮬레이션을 사례로 정리한 AI 아키텍처 기획·전략 기록입니다.', tags: ['Architecture', 'Quantum', 'Strategy'], images: 1 },
];

const recentProjects = document.querySelector('#recent-projects');

recentProjects.innerHTML = linkedInProjects.map((project, index) => {
  const base = `linkedin-media/recent/${project.id}`;
  const images = Array.from({ length: project.images }, (_, imageIndex) => {
    const number = String(imageIndex + 1).padStart(2, '0');
    return `<img src="${base}/${number}.jpg" alt="${project.title} 공개 게시물 이미지 ${imageIndex + 1}" loading="lazy" />`;
  }).join('');
  const tags = project.tags.map((tag) => `<li>${tag}</li>`).join('');
  const postUrl = `https://www.linkedin.com/feed/update/urn:li:activity:${project.id}/`;

  return `<article class="recent-card">
    <a class="recent-cover" href="${postUrl}" target="_blank" rel="noreferrer" aria-label="${project.title} LinkedIn 원문 보기">
      <img src="${base}/01.jpg" alt="${project.title} 대표 화면" loading="lazy" />
      <span>${String(index + 1).padStart(2, '0')}</span>
    </a>
    <div class="recent-card-body">
      <p class="project-type">LINKEDIN PROJECT · ${project.images} IMAGES</p>
      <h4>${project.title}</h4>
      <p>${project.summary}</p>
      <ul class="tags">${tags}</ul>
      <div class="recent-actions"><a class="text-link" href="${postUrl}" target="_blank" rel="noreferrer">원문 보기 <span>↗</span></a><details><summary>전체 이미지 ${project.images}장</summary><div class="recent-all-images"><button type="button" class="gallery-close" aria-label="이미지 갤러리 닫기">닫기 ×</button>${images}</div></details></div>
    </div>
  </article>`;
}).join('');

recentProjects.addEventListener('click', (event) => {
  const closeButton = event.target.closest('.gallery-close');
  if (closeButton) closeButton.closest('details').removeAttribute('open');
});
