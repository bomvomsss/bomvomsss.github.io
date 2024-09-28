function Project(){
  const openPopup = link => {
    // 팝업 window의 크기 지정
    const width = 500; 
    const height = 800; 
   
    // 팝업을 부모 브라우저의 정 중앙에 나열
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    const windowFeatures = `width=${width},height=${height},left=${left},top=${top}`;
   
    // 팝업을 열고 window 속성 지정
    window.open(link, 'subway', windowFeatures);
  };

  return (
    <div className="wrap project">
      <div className="web">
        <h2>Project</h2>
        <strong>개인 프로젝트</strong>
        <div className="projectBox">
          <h3 className="icon"><a href="https://bomvomsss.github.io/todolist/" alt="todolist">To Do List<img src="https://cdn-icons-png.flaticon.com/512/7794/7794669.png" alt="" /></a></h3>
          <ul>
            <li>CRUD</li>
            <li>로컬스토리지에 데이터 저장</li>
            <li className="icon"><a href="https://github.com/bomvomsss/study/tree/main/todolist" alt="code">소스코드 바로가기<img src="https://cdn-icons-png.flaticon.com/512/7794/7794669.png" alt="" /></a></li>
          </ul>
        </div>
        <strong>클론코딩</strong>
        <h3>Responsible</h3>
        <div className="projectBox">
          <div className="imgBox">
            <img src="https://bomvomsss.github.io/first_portfolio/img/dongbuLogo.png" alt="동부건설" />
          </div>
          <a href="javscript:;" onClick={()=>{openPopup('https://bomvomsss.github.io/first_portfolio/dongbu/')}}>바로가기</a>
          <ul>
            <li>메인비주얼 슬라이드</li>
            <li>마우스오버 이벤트</li>
            <li>모달 팝업</li>
          </ul>
        </div>
        <div className="projectBox">
          <div className="imgBox">
            <img src="https://www.glovis.net/Kor/common/images/logo.png" alt="현대글로비스"/>
          </div>
          <a href="javscript:;" onClick={()=>{openPopup('https://bomvomsss.github.io/first_portfolio/hyundai/')}}>바로가기</a>
          <ul>
            <li>메인비주얼 동영상</li>
            <li>공지사항 슬라이드</li>
            <li>스크롤 애니메이션</li>
          </ul>
        </div>
        <h3>Web</h3>
        <div className="projectBox">
          <div className="imgBox">
            <img src="https://i.namu.wiki/i/4eypF0rXCsOQDTv_GhoosbW9KDui46rag43lg0zI_-h-WSQTGeicUv09m4cuIuv4mT6bHpYwpfEzt_8FDnUwXd_OmxA0Y8IPSYuYtBrlsqQjsFkGPCBiX7vTwGiKPXrT5EFUbdl7CDJfTWgQDwMMUw.svg" alt="daelim" />
          </div>
          <a href="https://bomvomsss.github.io/first_portfolio/daelim/" alt="daelim">바로가기</a>
          <ul>
            <li>2단 메뉴, 전체메뉴</li>
            <li>메인 슬라이드</li>
            <li>동영상 팝업</li>
          </ul>
        </div>
        <div className="projectBox monami">
          <div className="imgBox">
            <img src="https://shop-phinf.pstatic.net/20240116_126/1705391548190HN7cs_PNG/%BA%EA%B7%A3%B5%E5%BD%BA%C5%E4%BE%EE_%C7%CF%B4%DC_%B7%CE%B0%ED.png" alt="monami" />
          </div>
          <a href="https://bomvomsss.github.io/first_portfolio/monami/" alt="monami">바로가기</a>
          <ul>
            <li>2단 메뉴, 전체 메뉴</li>
            <li>모달 팝업</li>
            <li>동영상, 제품 탭 슬라이드</li>
          </ul>
        </div>
        <div className="projectBox">
          <div className="imgBox">
            <img src="https://bomvomsss.github.io/first_portfolio/img/samyangLogo.png" alt="삼양"/>
          </div>
          <a href="https://bomvomsss.github.io/first_portfolio/samyang/" alt="삼양">바로가기</a>
          <ul>
            <li>2단 메뉴, 전체 메뉴</li>
            <li>제품 탭 슬라이드</li>
            <li>iframe 삽입</li>
            <li>비주얼 슬라이드</li>
          </ul>
        </div>
        <div className="projectBox">
          <div className="imgBox">
            <img src="https://bomvomsss.github.io/first_portfolio/img/phomeinLogo.png" alt="포메인"/>
          </div>
          <a href="http://bomvomsss.dothome.co.kr/phomein/index.html" alt="포메인">바로가기</a>
          <ul>
            <li>2단 메뉴, 전체 메뉴</li>
            <li>풀페이지</li>
            <li>메인 슬라이드 애니메이션</li>
          </ul>
        </div>
        
        <h3>Mobile</h3>
        <div className="projectBox">
          <div className="imgBox">
            <img src="https://bomvomsss.github.io/first_portfolio/img/subwayLogo.png" alt="subway" />
          </div>
          <a href="javscript:;" onClick={()=>{openPopup('https://bomvomsss.github.io/first_portfolio/subway(mobile)/')}}>바로가기</a>
          <ul>
            <li>비주얼 슬라이드</li>
            <li>모바일 사이드 메뉴</li>
            <li>2단 메뉴</li>
          </ul>
        </div>
        <div className="projectBox">
          <div className="imgBox">
            <img src="https://directcdn.lghellovision.net/web/images/global/hv-logo.png" alt="헬로비전" />
          </div>
          <a href="javscript:;" onClick={()=>{openPopup('https://bomvomsss.github.io/first_portfolio/lg(mobile)/')}}>바로가기</a>
          <ul>
            <li>메인비주얼 슬라이드</li>
            <li>제품 슬라이드</li>
            <li>모바일 사이드 메뉴</li>
            <li>3단 메뉴</li>
          </ul>
        </div>
        
      </div>
        
    </div>
  )
}

export default Project;