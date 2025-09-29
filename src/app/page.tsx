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
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg grid grid-cols-3">
      {/* Left Sidebar */}
      <div className="col-span-1 bg-gray-100 p-6 flex flex-col items-center">
        {/* 프로필 사진 */}
        <div className="w-32 h-32 relative rounded-full overflow-hidden mb-4">
          <Image src="/profile.jpg" alt="Profile Photo" fill />
        </div>

        <h1 className="text-xl font-bold text-center text-black" >[이름] : 장준희</h1>
        <p className="text-sm text-gray-600 mb-6 text-black">[전공] 로봇공학과 / 기계공학과 </p>
        <p className="text-sm text-gray-600 mb-6 text-black"> 최적화 알고리즘 설계 </p>


        {/* 연락처 / 이메일 / 웹사이트 / 주소 */}
        <div className="space-y-2 text-sm font-bold text-black w-full">
          <p>[전화번호] : 010 - 4176 - 0235 </p>
          <p>[이메일] : jh_95@naver.com </p>
          <p>[GitHub]  </p>
          <p>[주소] 서울특별시 성동구 고산자로8길7 302호</p>
        </div>

        {/* Education */}
        <div className="mt-8 w-full">
          <h2 className="text-lg font-semibold text-black mb-2">Education</h2>
          <ul className="space-y-3 text-black text-sm">
            <li className= "text-black">한양대학교 공과대학원 석사 / 2024 </li>
          </ul>
        </div>

        {/* Expertise */}
        <div className="mt-8 w-full">
          <h2 className="text-lg font-semibold text-black mb-2">Expertise</h2>
          <ul className="list-disc text-black pl-4 text-sm">
            <li className= "text-black">[전문분야 1] : 최적화 알고리즘 설계 </li>
            <li className= "text-black">[전문분야 2] : 백엔드 </li>
            <li className= "text-black">[전문분야 3] : 3D 모델링</li>
          </ul>
        </div>

        {/* Language */}
        <div className="mt-8 w-full">
          <h2 className="text-lg font-semibold text-black mb-2">Language</h2>
          <ul className="list-disc text-black pl-4 text-sm">
            <li className= "text-black">영어</li>
            <li className= "text-black">일본어</li>
          </ul>
        </div>
      </div>

      {/* Right Content */}
      <div className="col-span-2 p-8">
        {/* Profile */}
        <div> 
          <h2 className="text-lg font-semibold text-black mb-2">Profile</h2>
          <p className="text-sm text-black text-gray-700"></p>
          <p className="text-sm text-black text-gray-700">저는 <strong>도전을 통해 성장하는 개발자</strong>입니다.</p>
          <p className="text-sm text-black text-gray-700">
            낯선 문제를 직접 해결해 나가면서 <strong>실행이 곧 변화의 시작</strong>임을 깨달았고
          </p>
          <p className="text-sm text-black text-gray-700">
            다양한 사람들과 소통하며 <strong>열린 시각</strong>을 얻고, 협업 속에서 더 나은 해결책을 도출하는 경험을 쌓았습니다.
          </p>
          <p className="text-sm text-black text-gray-700"> 
            마라톤 완주 경험을 통해 <strong>끈기와 협력의 가치</strong>를 배웠으며, 이는 개발 과정에서 마주하는 문제를 극복하고 팀과 함께 개선해 나가는 힘이 되고 있습니다.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-black mb-2">Work Experience</h2>
          <div className="space-y-6">
            {/* 경력 아이템 */}
            <div>
              <div className="flex justify-between text-black text-sm font-semibold">
                <span className= "text-black"> Swarm robot control </span>
                <span className= "text-black">[2017 - 2021]</span>
              </div>
              <p className="text-sm text-gray-700 text-black">[직책] : 팀장</p>
              <ul className="list-disc text-black pl-4 text-sm text-black text-gray-600 mt-1">
                <li className= "text-black">군집 로봇 알고리즘 설계</li>
                <li className= "text-black">군집 로봇 기구 제작</li>
                <li className= "text-black">모터 제어</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between text-black text-sm font-semibold">
                <span className= "text-black"> Optimal route generation algorithm </span>
                <span className= "text-black">[2021 - 2024]</span>
              </div>
              <p className="text-sm text-gray-700 text-black">[직책] : 연구원</p>
              <ul className="list-disc text-black pl-4 text-sm text-black text-gray-600 mt-1">
                <li className= "text-black">무인기 경로 최적화 알고리즘 설계</li>
                <li className= "text-black">무인기 충돌 방지 시스템 설계</li>
                <li className= "text-black">무인기 통신 최적화 알고리즘 설계</li>
              </ul>
            </div>
            
            {/* 경력 추가 */}
          </div>
        </div>

        {/* References */}
        {/* <div className="mt-8">
          <h2 className="text-lg font-semibold text-black mb-2">References</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-black">[이름 / 직책]</p>
              <p className= "text-black">[회사명]</p>
              <p className= "text-black">Phone: [번호]</p>
              <p className= "text-black">Email: [이메일]</p>
            </div>
            <div>
              <p className="font-semibold text-black">[이름 / 직책]</p>
              <p className= "text-black">[회사명]</p>
              <p className= "text-black">Phone: [번호]</p>
              <p className= "text-black">Email: [이메일]</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
