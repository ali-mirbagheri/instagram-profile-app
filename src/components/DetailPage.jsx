import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import UserDetail from "./DetailPage/UserDetail";
import { useSelector, useDispatch } from "react-redux";
import { addUserData } from "../features/userDataSlice";

function DetailPage(props) {
  let id = useParams();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userData.value);
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      const data = await axios
        .get(`https://new-api.coco.gl/dashboard/intw/detail/${id.id}`)
        .catch(function (error) {
          navigate("*");
        });
      dispatch(addUserData(data.data));
    };
    getData();
  }, [dispatch, id.id, navigate]);

  return user.instagramId ? (
    <div className="container">
      <div className="user-profile">
        <img
          className="user-profile__image"
          src={user.profilePic}
          alt="profilePic"
          onError={(e) => {
            e.target.src = require("../icons8-male-user-96.png");
          }}
        />
        <div className="user-profile__name-and-id">
          <p className="user-profile__name-and-id__id">@{user.instagramId}</p>
          <h2>{user.fullName}</h2>
        </div>
      </div>
      <div className="user-details">
        <div className="user-details__div">
          <UserDetail
            title="Followers"
            value={
              user.followerCount > 1000
                ? user.followerCount > 1000000
                  ? (user.followerCount / 1000000).toFixed(2) + "M"
                  : (user.followerCount / 1000).toFixed(2) + "K"
                : user.followerCount
            }
            color="#086dd7"
            textColor="white"
            marginBottom="20px"
          />
          <UserDetail
            title="Following"
            value={
              user.followingCount > 1000
                ? user.followingCount > 1000000
                  ? (user.followingCount / 1000000).toFixed(2) + "M"
                  : (user.followingCount / 1000).toFixed(2) + "K"
                : user.followingCount
            }
          />
        </div>
        <div className="user-details__div">
          <UserDetail
            title="Period Eng Rate"
            value={`${(user.engagement * 100).toFixed(2)}%`}
            marginBottom="20px"
          />
          <UserDetail
            title="Total Eng Rate"
            value={`${(user.totalEngagement * 100).toFixed(2)}%`}
            color="#fed244"
          />
        </div>
        <div className="user-details__div">
          <div className="user-detail__div-two">
            <div className="user-detail__div-two-first__container">
              <p className="user-detail__div-two-first__value">
                {user.postPerDay}
              </p>
              <div className="user-detail__div-two__inner-div">
                <p className="user-detail__div-two__inner-div__title">
                  post per day
                </p>
                <div className="help"></div>
              </div>
            </div>
            <div className="user-detail__div-two-second__container">
              <div className="user-detail__div-two__inner-div">
                <p className="user-detail__div-two__inner-div__title">
                  total posts
                </p>
                <div className="help"></div>
              </div>
              <p className="user-detail__div-two-second__value">
                {user.totalPost}
              </p>
            </div>
          </div>
        </div>
        <div className="user-details__div">
          <UserDetail
            title="Avg Likes"
            value={
              user.avgLike > 1000
                ? user.avgLike > 1000000
                  ? (user.avgLike / 1000000).toFixed(2) + "M"
                  : (user.avgLike / 1000).toFixed(2) + "K"
                : user.avgLike
            }
            color="#ef4f43"
            marginBottom="5%"
          />
          <UserDetail
            title="Avg Comments"
            value={
              user.avgComment > 1000
                ? user.avgLike > 1000000
                  ? (user.avgComment / 1000000).toFixed(2) + "M"
                  : (user.avgComment / 1000).toFixed(2) + "K"
                : user.avgComment
            }
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
}

export default DetailPage;
