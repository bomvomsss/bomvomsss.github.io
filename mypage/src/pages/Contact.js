import { FaGithub, FaRegCopy } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { SiVelog } from "react-icons/si";
import { motion } from "framer-motion";

function Contact(){
  // const handleCopyClipBoard = async (text: string) => {
  //   try {
  //     await navigator.clipboard.writeText(text);
  //     alert("복사되었습니다.");
  //   } catch (e) {
  //     alert("복사에 실패하였습니다.");
  //   }
  // };

  const handleCopyClick = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('텍스트가 복사되었습니다.');
      })
      .catch((error) => {
        console.error('복사 실패:', error);
      });
  }

  return (
    <div>
      <div className="wrap">
      <motion.div
      transition={{ type: "spring" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.5 },
      }}
      >
          <h2>Contact</h2>
          <ul className="conBox">
            <li>
              <p>GitHub</p>
              <FaGithub />
              <span><a href="https://github.com/bomvomsss" alt="github" target="blank">bomvomsss <img src="https://cdn-icons-png.flaticon.com/512/7794/7794669.png" alt="" /></a></span>
            </li>
            <li>
              <p>E-mail</p>
              <AiOutlineMail color="#fff"/>
              <span onClick={()=>{handleCopyClick("doit772@naver.com")}}>doit772@naver.com <FaRegCopy color="#fff"/>
              </span>
            </li>
            <li>
              <p>Velog</p>
              <SiVelog color="#fff"/>
              <span>
                <a href="https://velog.io/@bomvomsss/posts" alt="velog" target="blank">crescent <img src="https://cdn-icons-png.flaticon.com/512/7794/7794669.png" alt="" /></a>
              </span>
            </li>
          </ul>
        </motion.div>
        </div>
    </div>
  )
}

export default Contact;