import Image from "next/image";

// 서버 컴포넌트에서 직접 API 호출
async function getResumeInfo() {
  const res = await fetch('https://raw.githubusercontent.com/InoPiaN/first-deploy/refs/heads/main/service/resume_general_info_service.json');
  // API 응답이 성공적인지 확인
  if (!res.ok) {
    // 응답이 실패하면 오류를 던져 Next.js가 오류 페이지를 보여주도록 함
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

async function getPortfolioInfo() {
  const res = await fetch('https://raw.githubusercontent.com/InoPiaN/first-deploy/refs/heads/main/service/resume_portfolio_service.json');
  // API 응답이 성공적인지 확인
  if (!res.ok) {
    // 응답이 실패하면 오류를 던져 Next.js가 오류 페이지를 보여주도록 함
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const data = await getResumeInfo();
  const portfolioData = await getPortfolioInfo();


  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/Fox.jpg"
          alt="Next.js logo"
          width={300}
          height={100}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            안녕하세요{" "}
            <li >
              개발자 {data.name} 입니다
            </li>
            <li >
              깃허브 주소는 {data.github} 입니다
            </li>
            <li >
              전공은 {data.major} 입니다
            </li>
          </li>
          <ol className="tracking-[-.01em]">
            열심히 하겠습니다.
          </ol>
        </ol>
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            진행중인 프로젝트는 {portfolioData.projectName}이고 {" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              내용은 {portfolioData.content} 입니다.
            </code>
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              URL은 {portfolioData.URL} 입니다.
            </code>
          </li>
        </ol>
      </main>
    </div>
  );
}
