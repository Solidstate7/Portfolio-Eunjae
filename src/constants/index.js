import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  crud,
  kakaologin,
  devup,
  stackerlabs,
  naegift,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  aws_ec2,
  aws_s3,
  aws_rds,
  aws_secret,
  aws_load,
  webpack,
  babel,
  express,
  github_actions,
  jest,
  mysql,
  nestjs,
  sequelize,
  typeorm,
  space,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "CI/CD Pipeline",
    icon: prototyping,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "English Proficiency",
    icon: ux,
  },
];

const technologies = [
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "NestJS",
    icon: nestjs,
  },
  // {
  //   name: "MySQL",
  //   icon: mysql,
  // },
  {
    name: "TypeORM",
    icon: typeorm,
  },
  {
    name: "AWS EC2",
    icon: aws_ec2,
  },
  {
    name: "AWS S3",
    icon: aws_s3,
  },
  {
    name: "AWS RDS",
    icon: aws_rds,
  },
  {
    name: "AWS Secret Manager",
    icon: aws_secret,
  },
  {
    name: "AWS Load Balancer",
    icon: aws_load,
  },
  {
    name: "GitHub Actions",
    icon: github_actions,
  },
  {
    name: "Webpack",
    icon: webpack,
  },
  {
    name: "Babel",
    icon: babel,
  },
  {
    name: "Jest",
    icon: jest,
  },
  // {
  //   name: "Docker",
  //   icon: docker,
  // },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "IELTS Academic 8.0",
    company_name: "British Council",
    icon: kelhel,
    iconBg: "#333333",
    date: "Aug 2022 - Aug 2024",
  },
  {
    title: "블록체인 기반 핀테크 및 응용 SW 개발자 양성과정 (10 개월)",
    company_name: "경일게임아카데미",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Jun 2023 - Mar 2024",
  },
  {
    title: "ETH Seoul 2024 Hackathon",
    company_name: "Neowiz Pangyo",
    icon: microverse,
    iconBg: "#333333",
    date: "29 - 31 Mar 2024",
  },
  {
    title: "첨단공학부 AI 전공",
    company_name: "KNOU 프라임칼리지",
    icon: dcc,
    iconBg: "#333333",
    date: "Mar 2024 - Present",
  },
];

const projects = [
  {
    id: "project-1",
    name: "NestJS CRUD CI/CD",
    description:
      "NestJS Server에서 CRUD, 로컬/소셜 로그인을 구현하고 AWS CodePipeline을 통해 CI/CD를 구축했습니다. 현재 진행중입니다.",
    tags: [
      {
        name: "nestjs",
        color: "blue-text-gradient",
      },
      {
        name: "oauth",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: space,
    // repo: "",
    // demo: "",
  },
  {
    id: "project-2",
    name: "Web3: Naegift",
    description:
      "Web3 기프티콘 마켓플레이스를 5인 팀과 5주 동안 개발했습니다. 분산 신원 연구와 백엔드 구현을 담당했고, Veramo와 Ethers.js를 사용해 기프티콘 발급 및 에스크로 로직을, React로 수령 로직을 구현했습니다.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: naegift,
    repo: "https://github.com/Solidstate7/did_project_upgrade",
    demo: "https://nae-gift.com/",
  },
  {
    id: "project-3",
    name: "React: Stacker-Labs",
    description:
      "태그, 카테고리, 팔로우 기능이 추가된 개발자 커뮤니티를 4인 팀과 4주 동안 개발했습니다. 컴포넌트 구현과 백엔드 통신, 프론트 서버 배포를 담당했으며, Recoil, React Router, React Query, GitHub Actions가 사용됐습니다.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: stackerlabs,
    repo: "https://github.com/Stacker-Labs/KGA-React-Project",
    demo: "https://stacker-labs.vercel.app/",
  },
  {
    id: "project-4",
    name: "Express: DevUp",
    description: `실시간 채팅 가능한 개발자 커뮤니티를 3인 팀과 3주 동안 개발했습니다. Figma로 웹페이지 레이아웃을 디자인하여 정적 페이지, 실시간 채팅을 구현했습니다.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: devup,
    repo: "https://github.com/KGA-Town-Bus/Project_DevUp",
    // demo: "https://movie-metro.netlify.app/",
  },
  {
    id: "project-5",
    name: "Kakao Login Process",
    description:
      "카카오 소셜 로그인을 구현한 개인 프로젝트입니다. 통신 주체들의 HTTP 요청/응답을 시퀀스 다이어그램으로 설계하여 코드를 작성했습니다. 다이어그램은 GitHub 레포지토리에 있습니다.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: kakaologin,
    repo: "https://github.com/Solidstate7/Kakao_Login",
    // demo: "https://shaqdeff.github.io/Nyeusi-Fest-Site/",
  },
  {
    id: "project-6",
    name: "Express CRUD",
    description:
      "로그인 및 회원가입이 가능한 학원 건의 게시판을 2인 팀과 2주 동안 개발했으며 백엔드 구현을 맡았습니다. MVC 패턴으로 서버를 구현하고, Template Engine을 사용해 SSR 기반 CRUD를 구현했으며, ORM을 하드코딩했습니다.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: crud,
    repo: "https://github.com/Solidstate7/CRUD_BOARD_PROJECT",
    // demo: "https://shaqdeff.github.io/Nyeusi-Fest-Site/",
  },
];

export { services, technologies, experiences, projects };
