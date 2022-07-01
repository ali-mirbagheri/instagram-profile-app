import React from "react";
import { useNavigate } from "react-router-dom";

function UserCard({ user }) {
  const navigate = useNavigate();
  const goToUser = () => {
    navigate(`/informations/${user.instagramId}`);
  };
  return (
    <div className="user-card" onClick={goToUser}>
      <div className="user-card__profile-pic-div">
        <img
          className="user-card__profile-pic-div__profile-pic"
          src={user.profilePic}
          alt="profilePic"
          onError={(e) => {
            e.target.src = require("../../icons8-male-user-96.png");
          }}
        />
      </div>
      <div className="user-card__name-and-id">
        <h3>@{user.instagramId}</h3>
        <p>{user.fullName}</p>
      </div>
      <div className="user-card__category">
        {user.category && (
          <p className="user-card__category__name">{user.category}</p>
        )}
      </div>
      <div className="user-card__other"></div>
    </div>
  );
}

export default UserCard;
