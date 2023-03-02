import React from "react";
import { Link } from "react-router-dom";

export default function HeaderNav(props) {
  const menu = props.item ? props.item : null;
  return (
    <div className="d-flex align-items-stretch" id="kt_header_nav">
      <div className="header-menu align-items-stretch">
        <div className="menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-600 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold fs-6 my-5 my-lg-0 align-items-stretch">
          {menu
            ? menu.map((v,index) => (
                <div className="menu-item menu-lg-down-accordion me-lg-1" key={v.ID}>
                  <Link to={v.PathUri} className="menu-link py-3">
                    <span className="menu-title">{v.Name}</span>
                    <span className="menu-arrow d-lg-none"></span>
                  </Link>
                </div>
              ))
            : ""}
          
        </div>
      </div>
    </div>
  );
}
