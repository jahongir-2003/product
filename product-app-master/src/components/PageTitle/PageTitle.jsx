import React from "react";
import "./PageTitle.css";
const PageTitle = ({ imgUrl, title, textClassName = "" }) => {
  return (
    <section className="page-title d-flex align-items-center justify-content-center text-center  my-5 ">
      <span className={` me-3 ${textClassName}`}>{title}</span>
      <img src={imgUrl} alt={title} className="page-title-img" />
    </section>
  );
};

export default React.memo(PageTitle);
