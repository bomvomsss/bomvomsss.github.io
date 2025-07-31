import "../style/Home.scss";
import { GroupBest, GroupNormal, GroupCan } from "../components/SkillItems";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { VscSparkle, VscLink } from "react-icons/vsc";

function Home() {
  return (
    <div className='wrap home'>
      <div className='main'>
        <p className='top'>Front-end Developer</p>
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Ga Yeong")
                .pauseFor(300)
                .typeString("<br>Portfolio")
                .start()
                .pauseFor(2000);
            }}
          />
        </h1>
        <div className='scroll'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <motion.div
        transition={{ type: "spring" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.5 },
        }}
      >
        <div className='about'>
          <div className='profileBox'>
            <span></span>
            <h2 className='name'>김가영</h2>
          </div>
          <p>
            안녕하세요. 성장과 도전을 즐기는 프론트엔드 개발자{" "}
            <strong>김가영</strong> 입니다.
            <br />
            <br />
            저는 도전에 망설임이 없는 성격으로 새로운 기술이나 프로그램도 개방적으로 받아들여 현업에 적용하는 것에 능숙합니다.
            <br/>
            낯선 상황에서도{" "}<strong>빠르게 적응해 최대의 성과</strong>를 내는 능력을 갖추고
            있습니다. 덕분에 문제 상황에서도 신속하게 해결책을 찾아내고 이를
            적용하여 능숙히 해결해낼 수 있습니다.
          </p>
        </div>
      </motion.div>
      <motion.div
        transition={{ type: "spring" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.5 },
        }}
      >
        <div className='career'>
          <h2>CAREER</h2>
          <div className='licenseBox'>
            <p>
              (주) 챔프스터디 <i>(해커스 교육그룹)</i>
              <span>2022.10 - 2023.12</span>
            </p>
            <ol>
              <li>
                담당 페이지
                <ul className='flexBox'>
                  <li>해커스 홈페이지</li>
                  <li>해커스 일본어</li>
                  <li>해커스 중국어</li>
                  <li>해커스 톡</li>
                  <li>해커스 영스타</li>
                  <li>해커스 한국사</li>
                  <li>해커스 인강</li>
                  <li>해커스 자격증</li>
                  <li>해커스 변호사</li>
                  <li>해커스 로스쿨</li>
                  <li>해커스 프렙</li>
                </ul>
              </li>
              <li>
                랜딩 페이지 제작 및 유지보수
                <ul>
                  <li>
                    디자이너와 커뮤니케이션 후 이벤트 랜딩 페이지 제작 및 기존
                    페이지를 유지보수 했습니다.
                  </li>
                  <li>
                    이벤트 랜딩 페이지를 두 가지 버전으로 제작하여 A/B 테스트를
                    진행한 뒤 더 적합한 페이지로 수정하였습니다.
                  </li>
                </ul>
              </li>
              <li>
                랜딩 속도 개선
                <ul>
                  <li>
                    관리하는 페이지 별 랜딩 속도를 측정하고 개선이 필요한
                    페이지를 이미지 압축, 불필요한 공백 제거 등의 방법으로
                    수정하였습니다.
                  </li>
                  <li>
                    Google Sheet에 팀이 맡은 페이지들과 각 페이지의 이벤트
                    페이지들까지 정리하여 문서화한 뒤 팀원들이 실시간으로 진행
                    상황을 공유할 수 있게 했습니다.
                  </li>
                </ul>
              </li>
              <li>
                메인 페이지 리뉴얼
                <ul>
                  <li>
                    기획자, 디자이너와 커뮤니케이션 하여 해커스 일본어(웹,
                    모바일) 메인 페이지를 리뉴얼 했습니다.
                  </li>
                  <li>
                    통일되지 않은 레이아웃을 사용하는 페이지들을 모두 통일하고
                    잘못된 레이아웃을 수정했습니다.
                  </li>
                </ul>
              </li>
              <li>
                반응형 웹페이지 개선
                <ul>
                  <li>
                    태블릿으로 인강을 볼 때 레이아웃이 망가지는 것을 개선하기
                    위해 사이즈에 따라서 스타일과 레이아웃이 알맞게 변경되게
                    하였습니다.
                  </li>
                </ul>
              </li>
              <li>
                컴포넌트 개발
                <ul>
                  <li>
                    바닐라 JS로 팀에서 자주 사용하는 함수들을 정리하여 팀원들과
                    공유하였습니다.
                  </li>
                  <li>
                    자주 사용하는 Php 함수 또한 함께 정리하여 작업 시간을
                    단축하였습니다.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </motion.div>
      <motion.div
        transition={{ type: "spring" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.5 },
        }}
      >
        <div className='career'>
          <div className='licenseBox'>
            <p>
              넷트루 컨설팅 그룹 <i>(NCG)</i>
              <span>2024.11 - </span>
            </p>
            <ol>
              <li>
                웹접근성 인증마크 획득
                <ul>
                  <li>
                    <a
                      target='_blank'
                      title='미래에셋 자산운용 새창으로'
                      href='https://investments.miraeasset.com/index.do'
                    >
                      미래에셋 자산운용
                    </a>
                    의 전체 페이지에 대하여 웹접근성에 맞게 수정·보완 작업을 통해
                    웹접근성 인증 마크를 획득했습니다.&nbsp;
                    <a
                      className='link'
                      target='_blank'
                      title='미래에셋 자산운용 웹접근성 인증마크 새창으로'
                      href='https://investments.miraeasset.com/assets/file/web_accessibility_miraeasset.pdf'
                    >
                      <VscLink />
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                유지보수 및 페이지 개선
                <ul>
                  <li>
                    클라이언트의 요청에 따라 페이지 내 필요 기능들을 추가하고,
                    유지보수 작업을 진행했습니다.
                    <br />
                    <br />
                    <span>
                      <VscSparkle /> 담당 페이지
                    </span>
                    <ul className='flexBox'>
                      <li>미래에셋 자산운용</li>
                      <li>TIGER ETF (KO/EN)</li>
                      <li>미래에셋 컨설팅</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                미래에셋자산운용, TIGER ETF 페이지 통합 프로젝트
                <ul>
                  <li>
                    <strong>프론트엔드</strong> 포지션으로 미래에셋의 자산운용과 TIGER ETF
                    페이지의 디자인 및 인증 통합프로젝트에 참여했습니다.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </motion.div>
      <motion.div
        transition={{ type: "spring" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.5 },
        }}
      >
        <div className='skill'>
          <h2>SKILLS ABILITY</h2>
          <p>익숙해요</p>
          <GroupBest />
          <p>어느정도 사용할 수 있어요</p>
          <GroupNormal />
          <p>사용해봤어요</p>
          <GroupCan />
        </div>
      </motion.div>
      <motion.div
        transition={{ type: "spring" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.5 },
        }}
      >
        <div className='license btm'>
          <h2>CERTIFICATE</h2>
          <div className='licenseBox'>
            <p>웹디자인 기능사</p>
            <ul>
              <li>한국산업인력공단</li>
              <li>2022.09</li>
            </ul>
          </div>
          <div className='licenseBox'>
            <p>컴퓨터 그래픽스 운용기능사</p>
            <ul>
              <li>한국산업인력공단</li>
              <li>2022.09</li>
            </ul>
          </div>
          <div className='licenseBox'>
            <p>GTQ 포토샵 1급</p>
            <ul>
              <li>한국생산성본부</li>
              <li>2022.06</li>
            </ul>
          </div>
          <div className='licenseBox'>
            <p>2종 보통 운전면허</p>
            <ul>
              <li>경찰청</li>
              <li>2019.04</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
