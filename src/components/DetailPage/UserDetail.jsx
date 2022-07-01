import React from "react";

function UserDetail({ title, value, color, textColor, marginBottom }) {
  return (
    <div
      className="user-detail__div"
      style={{
        backgroundColor: color,
        color: textColor,
        marginBottom: marginBottom,
      }}
    >
      <div className="user-detail__div__container">
        <div className="user-detail__div__inner-div">
          <p className="user-detail__div__inner-div__title">{title}</p>
          <div className={textColor ? "white-help" : "help"}></div>
        </div>
        <p className="user-detail__div__value">{value}</p>
      </div>
    </div>
  );
}

export default UserDetail;
