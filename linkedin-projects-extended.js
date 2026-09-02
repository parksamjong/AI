const extendedLinkedInProjects = [
  { id: '7302566930308112384', title: 'AI 수학', summary: '인공지능 모델의 기반이 되는 수학 개념과 계산 과정을 시각 자료로 정리한 학습·연구 기록입니다.', tags: ['AI', 'Mathematics', 'Research'], images: 5 },
  { id: '7291829126330466304', title: 'DeepSeek-R1 671B 로컬 PC 최적화', summary: '404GB 규모 DeepSeek-R1 671B 모델을 최소 사양 로컬 PC에서 구동하기 위한 설치와 메모리·추론 최적화 결과입니다.', tags: ['DeepSeek-R1', 'Local LLM', 'Optimization'], images: 8 },
  { id: '7294690796186779648', title: 'Lenovo T11 온디바이스 초경량 LLM', summary: 'Lenovo T11 태블릿에서 초경량 LLM을 직접 실행하고 응답 성능과 실제 동작 화면을 검증한 온디바이스 AI 구현입니다.', tags: ['On-device AI', 'LLM', 'Android'], images: 11 },
  { id: '7293960417247170560', title: '비루팅 온디바이스 LLM 최적화', summary: '기기 루팅 없이 모바일 환경에 경량 LLM을 배치하고 제한된 자원에서 추론이 가능하도록 최적화한 구현 기록입니다.', tags: ['On-device LLM', 'No Root', 'Edge AI'], images: 4 },
  { id: '7232760026434576384', title: 'Category Theory Enhanced Quantum LLM Agents', summary: '범주론, 양자 개념, LLM 에이전트와 3D GNN을 결합해 복합 관계를 표현하고 추론하는 연구형 AI 아키텍처입니다.', tags: ['Category Theory', 'Quantum AI', '3D GNN'], images: 5 },
  { id: '7294183880041934848', title: 'Galaxy Fold4 온디바이스 초경량 LLM', summary: '삼성 갤럭시 폴드4에서 초경량 LLM을 로컬 실행하고 모바일 추론 화면과 성능을 확인한 엣지 AI 프로젝트입니다.', tags: ['Galaxy Fold4', 'Edge AI', 'Local LLM'], images: 6 },
  { id: '7212260257698340864', title: 'ELK 기반 X 실시간 트렌드 워드클라우드', summary: 'X 데이터를 ELK Stack으로 실시간 수집·분석하고 주요 키워드와 트렌드를 워드클라우드로 시각화했습니다.', tags: ['ELK Stack', 'Realtime', 'WordCloud'], images: 1 },
  { id: '7037424779179560961', title: 'Human Tumor DNA Microarray Clustering', summary: '인간 종양 DNA 마이크로어레이 데이터를 군집화하고 덴드로그램으로 유사성과 생물학적 패턴을 탐색했습니다.', tags: ['Bioinformatics', 'DNA Microarray', 'Clustering'], images: 1 },
  { id: '7193169111147790336', title: 'LangChain · Streamlit AI 챗봇', summary: 'LangChain의 검색·대화 흐름을 Streamlit UI와 연결해 질의응답을 수행하는 실용형 AI 챗봇을 구현했습니다.', tags: ['LangChain', 'Streamlit', 'Chatbot'], images: 1 },
  { id: '7061301298259787776', title: '양자컴퓨터와 양자 프로그래밍', summary: '양자 회로와 알고리즘을 직접 구성하고 실행 결과를 시각화하며 양자 프로그래밍의 핵심 원리를 실험했습니다.', tags: ['Quantum Computing', 'Qubit', 'Algorithm'], images: 9 },
  { id: '7031552446241902592', title: 'GNN Molecule Visualization', summary: '분자 구조를 그래프로 변환해 GNN 관점에서 원자와 결합 관계를 분석하고 여러 분자 표현을 시각화했습니다.', tags: ['GNN', 'Molecule', 'Visualization'], images: 5 },
  { id: '7197047742299348992', title: 'LiDAR 3D Object Detection', summary: '자율주행 LiDAR 포인트클라우드에서 주변 객체를 탐지하고 3차원 공간에 바운딩 영역으로 시각화한 프로젝트입니다.', tags: ['LiDAR', '3D Detection', 'Autonomous Driving'], images: 1 },
  { id: '7060940502451302400', title: 'MASM Mandelbrot Fractal', summary: '어셈블리 언어 MASM으로 Mandelbrot 프랙탈 계산과 렌더링을 구현해 저수준 연산과 시각화 성능을 실험했습니다.', tags: ['MASM', 'Assembly', 'Fractal'], images: 3 },
  { id: '7052594090114236416', title: 'Quantum Programming & AI', summary: '양자 프로그래밍과 AI의 결합 가능성을 회로 실행 결과와 시각 자료를 통해 탐구한 연구 프로젝트입니다.', tags: ['Quantum', 'AI', 'Research'], images: 5 },
  { id: '7109773716028362754', title: 'Mojo 설치와 성능 실험', summary: 'AI 개발 언어 Mojo의 설치 환경을 구성하고 예제 실행과 성능 특성을 직접 검증한 기술 실험입니다.', tags: ['Mojo', 'Performance', 'AI Language'], images: 4 },
  { id: '7029231781342056448', title: 'AlphaFold 아미노산 구조 예측', summary: 'AlphaFold를 이용해 아미노산 서열의 단백질 구조를 예측하고 생성된 3차원 구조를 분석했습니다.', tags: ['AlphaFold', 'Protein', 'Bio AI'], images: 7 },
  { id: '7025992368914919424', title: 'AlphaFold 단백질 구조 분석', summary: '서열 입력부터 예측 구조 확인까지 AlphaFold 기반 단백질 분석 과정을 확장해 검증한 후속 연구입니다.', tags: ['AlphaFold', 'Structural Biology', 'Prediction'], images: 6 },
  { id: '7024571643377180672', title: '주가 예측 AI 모델', summary: '시장 시계열 데이터의 패턴을 학습해 주가 방향을 예측하고 약 90% 수준의 실험 결과를 확인한 모델입니다.', tags: ['Stock Prediction', 'Time Series', 'Machine Learning'], images: 1 },
  { id: '7031109805066924032', title: 'QAOA MaxCut 실험', summary: 'QAOA로 MaxCut 조합최적화 문제를 구성하고 양자 회로의 실행 분포와 해 탐색 과정을 시각화했습니다.', tags: ['QAOA', 'MaxCut', 'Optimization'], images: 6 },
  { id: '7030895734489059329', title: 'QAOA MaxCut 후속 검증', summary: 'MaxCut 문제의 그래프 구성과 QAOA 최적화 파라미터를 달리하며 양자 근사해의 변화를 비교했습니다.', tags: ['Quantum Algorithm', 'QAOA', 'Graph'], images: 5 },
  { id: '7029438270329544704', title: 'Quantum Dagger Gates', summary: '양자 게이트의 역연산을 나타내는 Dagger 연산과 회로 동작을 코드와 실행 결과로 확인했습니다.', tags: ['Quantum Gate', 'Dagger', 'Circuit'], images: 1 },
  { id: '6977516517038977024', title: '비트코인·주가 단기 예측 모델', summary: '암호화폐와 주식 시계열에서 단기 상승·하락 패턴을 추출하고 여러 예측 결과를 비교 분석했습니다.', tags: ['Bitcoin', 'Stock', 'Forecasting'], images: 9 },
  { id: '6940262219532091393', title: 'GMM 이상 탐지', summary: 'Gaussian Mixture Model로 데이터 분포를 학습하고 정상 군집에서 벗어난 이상치를 확률적으로 탐지했습니다.', tags: ['GMM', 'Anomaly Detection', 'Statistics'], images: 1 },
  { id: '6950645447182934016', title: 'HMM 비트코인 은닉 패턴', summary: 'Hidden Markov Model로 관측 가격 뒤의 시장 상태를 추정하고 비트코인의 은닉 상승·하락 국면을 분석했습니다.', tags: ['HMM', 'Bitcoin', 'Hidden State'], images: 1 },
  { id: '6941763619214761984', title: 'XAI Partial Dependence Plot', summary: '부분의존도 그래프로 모델 입력 변수가 예측 결과에 미치는 영향을 해석하고 설명 가능한 AI 분석을 수행했습니다.', tags: ['XAI', 'PDP', 'Interpretability'], images: 2 },
  { id: '6940925800279871489', title: 'Isolation Forest 이상치 탐지', summary: 'Isolation Forest를 적용해 다차원 데이터에서 고립되는 관측치를 찾고 이상 탐지 결과를 시각화했습니다.', tags: ['Isolation Forest', 'Outlier', 'Machine Learning'], images: 1 },
  { id: '6934682354795851776', title: '차원 축소 데이터 분석', summary: '고차원 데이터를 저차원 공간으로 축소해 군집과 분포 구조를 한눈에 파악할 수 있도록 시각화했습니다.', tags: ['Dimension Reduction', 'Data Science', 'Visualization'], images: 1 },
  { id: '6971046283427921920', title: 'AI 상승·하강 패턴과 KOSPI 비교', summary: 'AI가 탐지한 시장 상승·하강 패턴을 KOSPI 실제 흐름과 비교해 신호의 일치 구간과 차이를 검증했습니다.', tags: ['KOSPI', 'Market Pattern', 'Validation'], images: 1 },
  { id: '6973667013621665793', title: 'NASDAQ 지수 분석', summary: 'NASDAQ 지수의 추세와 변동성, 구간별 수익률을 여러 시각화로 비교한 미국 시장 데이터 분석입니다.', tags: ['NASDAQ', 'Market Analysis', 'Visualization'], images: 5 },
  { id: '6973092582025306113', title: '달러 환율 중장기 예측', summary: '환율 시계열의 장기 추세와 변동 패턴을 학습해 원·달러 환율의 중장기 방향을 예측했습니다.', tags: ['Exchange Rate', 'Forecasting', 'Time Series'], images: 1 },
  { id: '6945180915010564096', title: '5개 종목 상승 패턴 분석', summary: '서로 다른 5개 종목에서 나타난 상승 패턴을 같은 기준으로 탐지해 종목별 특징과 공통점을 비교했습니다.', tags: ['Multi-asset', 'Uptrend', 'Pattern Analysis'], images: 5 },
  { id: '6994092452487839744', title: '삼성전자 5년 월간 수익률', summary: '삼성전자 5년 가격 데이터를 월별 수익률로 변환해 계절성과 기간별 성과를 분석했습니다.', tags: ['Samsung Electronics', 'Monthly Return', 'Finance'], images: 1 },
  { id: '6974184494358568961', title: '미국 시장 투자심리 분석', summary: '미국 시장 데이터를 바탕으로 투자심리의 변화를 정량화하고 지수 흐름과의 관계를 분석했습니다.', tags: ['US Market', 'Sentiment', 'Data Analysis'], images: 1 },
  { id: '6643861589780992000', title: '코로나 게놈 변이 추적', summary: '공개 바이러스 게놈 데이터를 분석해 코로나 변이의 발생과 확산 흔적을 추적한 바이오인포매틱스 프로젝트입니다.', tags: ['COVID-19', 'Genome', 'Mutation Tracking'], images: 1 },
  { id: '6640538845693739008', title: '코로나 확진자 AI 예측', summary: '국가별 확진자 시계열을 학습해 코로나 확산 추이를 예측하고 실제 데이터와 비교했습니다.', tags: ['COVID-19', 'AI Forecast', 'Epidemiology'], images: 1 },
  { id: '6640538043524710400', title: '코로나 확진자 증가세 분석', summary: '확진자 누적·증가 데이터를 그래프로 구성해 국가와 시점별 확산 속도의 차이를 분석했습니다.', tags: ['COVID-19', 'Growth Curve', 'Visualization'], images: 1 },
  { id: '6642691312858554368', title: '국가별 코로나 데이터 품질 비교', summary: '국가별 코로나 공개 데이터의 누락과 일관성을 비교해 분석 결과에 영향을 주는 데이터 품질 문제를 점검했습니다.', tags: ['COVID-19', 'Data Quality', 'Comparative Analysis'], images: 1 },
];

recentProjects.insertAdjacentHTML('beforeend', extendedLinkedInProjects.map((project, index) => {
  const base = `linkedin-media/extended/${project.id}`;
  const images = Array.from({ length: project.images }, (_, imageIndex) => {
    const number = String(imageIndex + 1).padStart(2, '0');
    return `<img src="${base}/${number}.jpg" alt="${project.title} 공개 게시물 이미지 ${imageIndex + 1}" loading="lazy" />`;
  }).join('');
  const tags = project.tags.map((tag) => `<li>${tag}</li>`).join('');
  const postUrl = `https://www.linkedin.com/feed/update/urn:li:activity:${project.id}/`;

  return `<article class="recent-card">
    <a class="recent-cover" href="${postUrl}" target="_blank" rel="noreferrer" aria-label="${project.title} LinkedIn 원문 보기">
      <img src="${base}/01.jpg" alt="${project.title} 대표 화면" loading="lazy" />
      <span>${String(index + 21).padStart(2, '0')}</span>
    </a>
    <div class="recent-card-body">
      <p class="project-type">LINKEDIN PROJECT · ${project.images} IMAGES</p>
      <h4>${project.title}</h4>
      <p>${project.summary}</p>
      <ul class="tags">${tags}</ul>
      <div class="recent-actions"><a class="text-link" href="${postUrl}" target="_blank" rel="noreferrer">원문 보기 <span>↗</span></a><details><summary>전체 이미지 ${project.images}장</summary><div class="recent-all-images"><button type="button" class="gallery-close" aria-label="이미지 갤러리 닫기">닫기 ×</button>${images}</div></details></div>
    </div>
  </article>`;
}).join(''));
