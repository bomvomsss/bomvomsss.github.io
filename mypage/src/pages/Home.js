import { DiReact,DiHtml5,DiCss3Full,DiJsBadge,DiJqueryLogo,DiPhotoshop,DiIllustrator,DiBootstrap,DiMarkdown,DiSass,DiGit,DiPhp,DiMysql } from "react-icons/di";

function Home(){

  return (
    <div className="wrap home">
      <div className="top">Front-end Developer</div>
      <h1 className="main">
        <p>Ga Yeong</p>
        <p>Portfolio</p>
      </h1>
      <div className="about">
        <h2>김가영</h2>
        <b>1998.05.05</b>
        <p>
          안녕하세요. 성장과 도전을 즐기는 개발자 김가영 입니다.
          <br/>
          할수있셔!
        </p>
      </div>
      <div className="skill">
        <h2>SKILLS ABILITY</h2>
        <p>익숙해요</p>
        <div className="bestSkill">
          <span><DiHtml5 color="#e34f26"/>HTML5</span>
          <span><DiCss3Full color="#1672b6"/>CSS3</span>
          <span><DiSass color="#cc6699"/>SASS</span>
          <span><DiJsBadge color="#f7df2b"/>JavaScript</span>
          <span><DiJqueryLogo color="#0769ad"/>JQuery</span>
          <span><DiReact color="#00ffff"/>React</span>
          <span><DiMarkdown/>Markdown</span>
          <span>Notion</span>
          <span><DiPhotoshop color="#01a4f6"/>adobe photoshop</span>
          <span><DiIllustrator color="#f8971a"/>adobe illustrator</span>
          <span>phpstorm</span>
        </div>
        <p>어느정도 사용할 수 있어요</p>
        <div className="normalSkill">
          <span>typescript</span>
          <span><DiGit color="#f05032"/>Git</span>
          <span>Slack</span>
          <span>Figma</span>
          <span><DiBootstrap color="#7952b3"/>BootStrap</span>
        </div>
        <p>사용해봤어요</p>
        <div className="canSkill">
          <span><DiPhp color="#4d598f"/>php</span>
          <span>Eidt Plus</span>
          <span>Redux</span>
          <span><DiMysql color="#7b9cb5"/>MySQL</span>
        </div>
      </div>
      <div className="license">
        <h2>CERTIFICATE</h2>
        <div className="licenseBox">
          <p>웹디자인 기능사</p>
          <ul>
            <li>한국산업인력공단</li>
            <li>2022.09</li>
          </ul>
        </div>
        <div className="licenseBox">
          <p>컴퓨터 그래픽스 운용기능사</p>
          <ul>
            <li>한국산업인력공단</li>
            <li>2022.09</li>
          </ul>
        </div>
        <div className="licenseBox">
          <p>GTQ 포토샵 1급</p>
          <ul>
            <li>한국생산성본부</li>
            <li>2022.06</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home;