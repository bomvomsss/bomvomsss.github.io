import "../style/Project.scss";
import { motion } from "framer-motion";
import ProjectItems from "../components/ProjectItems";
import PersonalProject from "../components/PersonalProject";

function Project() {
  const openPopup = (link) => {
    // 팝업 window의 크기 지정
    const width = 500;
    const height = 800;

    // 팝업을 부모 브라우저의 정 중앙에 나열
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    const windowFeatures = `width=${width},height=${height},left=${left},top=${top}`;

    // 팝업을 열고 window 속성 지정
    window.open(link, "subway", windowFeatures);
  };

  return (
    <div className='wrap project'>
      <motion.div
        transition={{ type: "spring" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.5 },
        }}
        className='projectItem'
      >
        <h2 className='tit'>Project</h2>
        <span className='subtit'>지속적으로 업데이트 중입니다</span>
        <strong className='miniTit'>| 개인 프로젝트</strong>
        <PersonalProject
          title='랜덤 메뉴 고르기'
          link='https://bomvomsss.github.io/random-menu/'
          code='https://github.com/bomvomsss/random-menu'
          features={[
            "json 파일로 데이터 불러오기",
            "간단한 게임 형식"
          ]}/>
        <PersonalProject
          title='Task Manager'
          link='http://nunukiki.dothome.co.kr'
          code='https://github.com/bomvomsss/task-manager'
          features={[
            "CRUD",
            "Supabase를 이용한 데이터 테이블 연동",
            "Next.js",
            "Typescript",
            "React-Bootstrap",
            "드래그 앤 드롭, 카테고리 및 해시태그 설정, 날짜 지난 리스트에 경고문구 표시",
          ]}
        />
        <PersonalProject
          title='TodoList'
          link='https://bomvomsss.github.io/todolist/'
          code='https://github.com/bomvomsss/study/tree/main/todolist'
          features={["CRUD", "로컬스토리지에 데이터 저장"]}
        />
        <PersonalProject
          title='맛집지도'
          link='https://bomvomsss.github.io/projects/matjip'
          code='https://github.com/bomvomsss/projects/tree/main/matjip'
          features={[
            "React-Bootstrap",
            "카카오맵 API - 검색, 추가",
            "로컬스토리지에 데이터 저장",
          ]}
        />
      </motion.div>
      <motion.div
        transition={{ type: "spring" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.5 },
        }}
        className='projectItem'
      >
        <strong className="miniTit">| 클론코딩</strong>
        <h3>Responsible</h3>
        <ProjectItems
          imgSrc="https://bomvomsss.github.io/first_portfolio/img/dongbuLogo.png"
          imgAlt="동부건설"
          link="https://bomvomsss.github.io/first_portfolio/dongbu/"
          onClick={(e) => {
            e.preventDefault(); // 기본 링크 이동을 막음
            openPopup('https://bomvomsss.github.io/first_portfolio/dongbu/');
          }}
          features={[
            "메인비주얼 슬라이드",
            "마우스오버 이벤트",
            "모달 팝업"
          ]}
        />
        <ProjectItems
          imgSrc="https://www.glovis.net/Kor/common/images/logo.png"
          imgAlt="현대글로비스"
          link="https://bomvomsss.github.io/first_portfolio/hyundai/"
          onClick={(e) => {
            e.preventDefault(); // 기본 링크 이동을 막음
            openPopup('https://bomvomsss.github.io/first_portfolio/hyundai/');
          }}
          features={[
            "메인비주얼 동영상",
            "공지사항 슬라이드",
            "스크롤 애니메이션"
          ]}
        />
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
        <h3>Web</h3>
        <ProjectItems
          imgSrc="https://www.dlenc.co.kr/static/images/ico/ico_daelim.png"
          imgAlt="daelim"
          link="https://bomvomsss.github.io/first_portfolio/daelim/"
          onClick={(e) => {
            e.preventDefault(); // 기본 링크 이동을 막음
            openPopup('https://bomvomsss.github.io/first_portfolio/daelim/');
          }}
          features={[
            "2단 메뉴, 전체메뉴",
            "메인 슬라이드",
            "동영상 팝업"
          ]}
        />
        <ProjectItems
          imgSrc="https://shop-phinf.pstatic.net/20240116_126/1705391548190HN7cs_PNG/%BA%EA%B7%A3%B5%E5%BD%BA%C5%E4%BE%EE_%C7%CF%B4%DC_%B7%CE%B0%ED.png"
          imgAlt="monami"
          link="https://bomvomsss.github.io/first_portfolio/monami/"
          onClick={(e) => {
            e.preventDefault(); // 기본 링크 이동을 막음
            openPopup('https://bomvomsss.github.io/first_portfolio/monami/');
          }}
          features={[
            "2단 메뉴, 전체메뉴",
            "모달 팝업",
            "동영상, 제품 탭 슬라이드"
          ]}
        />
        <ProjectItems
          imgSrc="https://bomvomsss.github.io/first_portfolio/img/samyangLogo.png"
          imgAlt="삼양"
          link="https://bomvomsss.github.io/first_portfolio/samyang/"
          onClick={(e) => {
            e.preventDefault(); // 기본 링크 이동을 막음
            openPopup('https://bomvomsss.github.io/first_portfolio/samyang/');
          }}
          features={[
            "2단 메뉴, 전체메뉴",
            "제품 탭 슬라이드",
            "iframe 삽입",
            "비주얼 슬라이드"
          ]}
        />
        <ProjectItems
          imgSrc="https://bomvomsss.github.io/first_portfolio/img/phomeinLogo.png"
          imgAlt="포메인"
          link="http://bomvomsss.dothome.co.kr/phomein/index.html"
          onClick={(e) => {
            e.preventDefault(); // 기본 링크 이동을 막음
            openPopup('http://bomvomsss.dothome.co.kr/phomein/index.html');
          }}
          features={[
            "2단 메뉴, 전체메뉴",
            "풀페이지",
            "메인 슬라이드 애니메이션"
          ]}
        />
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
        <h3>Mobile</h3>
        <ProjectItems
          imgSrc="https://bomvomsss.github.io/first_portfolio/img/subwayLogo.png"
          imgAlt="subway"
          link="https://bomvomsss.github.io/first_portfolio/subway(mobile)/"
          onClick={(e) => {
            e.preventDefault(); // 기본 링크 이동을 막음
            openPopup('https://bomvomsss.github.io/first_portfolio/subway(mobile)/');
          }}
          features={[
            "비주얼 슬라이드",
            "모바일 사이드 메뉴",
            "2단 메뉴"
          ]}
        />
        <ProjectItems
          imgSrc="https://directcdn.lghellovision.net/web/images/global/hv-logo.png"
          imgAlt="헬로비전"
          link="https://bomvomsss.github.io/first_portfolio/lg(mobile)/"
          onClick={(e) => {
            e.preventDefault(); // 기본 링크 이동을 막음
            openPopup('https://bomvomsss.github.io/first_portfolio/lg(mobile)/');
          }}
          features={[
            "메인비주얼 슬라이드",
            "제품 슬라이드",
            "모바일 사이드 메뉴",
            "3단 메뉴"
          ]}
        />
      </motion.div>
    </div>
  );
}

export default Project;
