import React from "react";
import { SiNotion,SiPhpstorm,SiTypescript,SiSlack,SiFigma,SiRedux,SiBookstack, SiIntellijidea,SiNextdotjs } from "react-icons/si";
import { DiReact,DiHtml5,DiCss3Full,DiJsBadge,DiJqueryLogo,DiPhotoshop,DiIllustrator,DiBootstrap,DiMarkdown,DiSass,DiGit,DiPhp,DiMysql } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";

export function GroupBest(){
  return(
    <div className="bestSkill">
      <span><DiHtml5 color="#e34f26"/>HTML5</span>
      <span><DiCss3Full color="#1672b6"/>CSS3</span>
      <span><DiSass color="#cc6699"/>SASS</span>
      <span><DiJsBadge color="#f7df2b"/>JavaScript</span>
      <span><DiJqueryLogo color="#0769ad"/>JQuery</span>
      <span><DiReact color="#00ffff"/>React</span>
      <span><DiMarkdown/>Markdown</span>
      <span><SiNotion/>Notion</span>
      <span><DiPhotoshop color="#01a4f6"/>Adobe Photoshop</span>
      <span><DiIllustrator color="#f8971a"/>Adobe Illustrator</span>
      <span><BiLogoVisualStudio color="#22A5F1"/>VScode</span>
      <span><SiPhpstorm/>PhpStorm</span>
      <span><SiIntellijidea/>IntelliJ IDEA</span>
      <span><SiFigma/>Figma</span>
      <span><FaGithub/>GitHub</span>
    </div>
  );
}

export function GroupNormal(){
  return(
    <div className="normalSkill">
      <span><SiTypescript color="#3075c1"/>TypeScript</span>
      <span><DiGit color="#f05032"/>Git</span>
      <span><SiSlack color="#36b1da"/>Slack</span>
      <span><DiBootstrap color="#7952b3"/>React-BootStrap</span>
      <span><SiNextdotjs/>Next.js</span>
    </div>
  );
}
export function GroupCan(){
  return(
    <div className="canSkill">
      <span><DiPhp color="#4d598f"/>Php</span>
      <span><SiBookstack color="#e6786d"/>Eidt Plus</span>
      <span><SiRedux color="#764abc"/>Redux</span>
      <span><DiMysql color="#7b9cb5"/>MySQL</span>
      <span><i>JSP</i>JSP</span>
      <span><FaGitlab color="#E34124"/>GitLab</span>
    </div>
  );
}