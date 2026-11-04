// 포트폴리오 내용은 이 파일만 수정하면 됩니다.

export type Link = { label: string; href: string };

export type Project = {
  name: string;
  period: string;
  summary: string;
  context: string; // 팀/소속 정보
  role: string;
  contributions: string[];
  stack: string[];
  links: Link[];
};

export const profile = {
  name: "조윤호",
  title: "Frontend Developer → AI",
  headline: "AI 기능을 사용자 경험으로 연결해 온 프론트엔드 개발자",
  intro: [
    "React와 TypeScript로 서비스 화면을 만들어 왔고, 진행한 프로젝트마다 AI 챗봇·AI 추천·이미지 분류 모델처럼 AI 기능을 사용자에게 전달하는 역할을 맡았습니다.",
    "그 과정에서 AI 자체에 대한 흥미가 커져, 이제는 화면 너머의 모델과 데이터까지 깊게 공부하려 합니다.",
  ],
  contacts: [
    { label: "GitHub", href: "https://github.com/424on" },
    { label: "Email", href: "mailto:yoonho0204@gmail.com" },
  ] satisfies Link[],
};

export const education = [
  {
    name: "상명대학교 소프트웨어학과",
    period: "4학년 · 졸업예정",
    detail: "",
  },
];

export const experience = [
  {
    name: "멋쟁이사자처럼 대학 13기",
    period: "2025.03.01 – 2025.12.31",
    detail: "프론트엔드 · 2025 멋쟁이사자처럼 대학 해커톤 참가 (TOOR 개발)",
  },
];

export const certificates = [
  { name: "SQLD", issuer: "한국데이터산업진흥원", date: "2026.03.27" },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Vite", "TanStack Query", "Emotion", "Tailwind CSS", "React Router"],
  },
  {
    group: "AI · Data",
    items: ["Python", "TensorFlow", "Keras", "CNN · 전이학습", "RAG", "OpenAI API", "SQL"],
  },
  { group: "Tools", items: ["Git", "GitHub", "Google Colab", "Vercel"] },
];

export const projects: Project[] = [
  {
    name: "PIKONE",
    period: "2026.07",
    summary: "사진으로 기록하는 개인 외식 일기장 + 방문 기록 기반 AI 식당 추천 서비스",
    context: "팀 프로젝트 · FE 1 · BE 1",
    role: "Frontend",
    contributions: [
      "프로젝트 디렉토리 구조 설계 및 개발 환경 구성",
      "OAuth2 인증 플로우와 라우터 구조 설계",
      "사진 기반 외식 기록 작성 플로우 전체 구현 (멀티 스텝 폼)",
      "캘린더 기반 기록 조회, 동반자 관리, 고정 장소·알레르기 설정 구현",
      "AI 식당 추천 기능 및 추천 결과 카드 UI 구현",
    ],
    stack: ["React", "TypeScript", "Vite", "TanStack Query", "Emotion"],
    links: [
      { label: "Organization", href: "https://github.com/TmPIKONE" },
      { label: "Frontend Repo", href: "https://github.com/TmPIKONE/pikone-frontend" },
    ],
  },
  {
    name: "TOOR (토어)",
    period: "2025.08",
    summary: "현지인 인증·실시간 가격 비교·AI 여행 가이드로 관광지 바가지를 줄이는 여행 플랫폼",
    context: "2025 멋쟁이사자처럼 대학 해커톤 · 팀 멋4",
    role: "Frontend",
    contributions: [
      "AI 챗봇 UI 및 대화 기록(history) 기능 구현",
      "챗봇이 만든 일정을 지도 위에 보여주는 MapView · DayStepper · DetailSheet 구현",
      "여행 지역 선택 화면 구현",
      "음식점/숙소 북마크 API 연동 오류 해결",
    ],
    stack: ["React", "Vite", "React Router", "Tailwind CSS", "OpenAI"],
    links: [
      { label: "Repo", href: "https://github.com/2025-Likelion-Hackathon/Team_Mut4_FE" },
      { label: "Demo", href: "https://toer.vercel.app" },
    ],
  },
  {
    name: "S_AI_Project",
    period: "2024.08",
    summary: "피부 병변 이미지로 악성/양성을 분류하는 CNN 기반 피부암 진단 보조 모델",
    context: "3인 팀 프로젝트 · Colab에서 공동 작업",
    role: "AI 모델 학습 · 데이터",
    contributions: [
      "Kaggle 피부암 데이터셋 수집 및 학습용 전처리 (리사이징, 정규화, 데이터 증강)",
      "VGG16 전이학습 기반 모델 학습 및 학습 가중치 계산 담당",
      "Colab 노트북에서 학습 실험 진행, 결과는 팀원이 정리해 레포에 업로드",
    ],
    stack: ["Python", "TensorFlow", "Keras", "VGG16", "Google Colab", "Flask"],
    links: [{ label: "Repo", href: "https://github.com/Kwon-m-s/S_AI_Project" }],
  },
];

export const sideProjects: Project[] = [
  {
    name: "Recipe Chatbot",
    period: "2024.12",
    summary: "가진 재료와 조건(식사 종류·시간대·난이도·소요 시간)으로 레시피를 추천하는 RAG 챗봇",
    context: "개인 프로젝트",
    role: "Full-stack",
    contributions: [
      "레시피 데이터를 FAISS 벡터스토어로 구축해 재료 기반 검색",
      "검색 결과를 OpenAI API로 사용자 맞춤 답변으로 생성",
    ],
    stack: ["Python", "RAG", "FAISS", "OpenAI API"],
    links: [{ label: "Repo", href: "https://github.com/424on/recipe-chatbot" }],
  },
];
