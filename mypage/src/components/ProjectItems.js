import React from "react";

function ProjectItems({imgSrc, imgAlt, link, onClick, features}){

  return(
    <div className="projectBox">
      <div className="imgBox">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <a href={link} onClick={onClick}>바로가기</a>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectItems;