import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { SiVelog } from "react-icons/si";

function Contact(){
  
  return (
    <div>
      <div className="wrap">
        <h2>Contact</h2>
        <ul className="conBox">
          <li>
            <p>GitHub</p>
            <FaGithub />
            <span>bomvomsss</span>
          </li>
          <li>
            <p>E-mail</p>
            <AiOutlineMail color="#fff"/>
            <span>doit772@naver.com</span>
          </li>
          <li>
            <p>velog</p>
            <SiVelog color="#fff"/>
            <span>
              <a href="https://velog.io/@bomvomsss/posts" alt="velog">crescent</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact;