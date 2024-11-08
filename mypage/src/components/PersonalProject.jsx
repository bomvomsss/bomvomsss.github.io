import React from "react";

function PersonalProject({title, link, code, features}){

  return(
    <div className="projectBox">
      <div className="per">
        <h4 className="icon"><a target="_blank" rel="noreferrer" href={link} alt={title}>{title}<img src="https://cdn-icons-png.flaticon.com/512/7794/7794669.png" alt="" /></a></h4>
        <p className="icon code"><a href={code} alt="code" target="_blank" rel="noreferrer" >소스코드<img src="https://cdn-icons-png.flaticon.com/512/7794/7794669.png" alt="" /></a></p>
      </div>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default PersonalProject;