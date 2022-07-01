import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./ListPage/UserCard";
import { addUsersTE } from "../features/usersTopEngagementsSlice";
import { addUsersTF } from "../features/usersTopFollowersSlice";

function ListPage(props) {
  const usersTopFollowers = useSelector(
    (state) => state.usersTopFollowers.value
  );
  const usersTopEngagements = useSelector(
    (state) => state.usersTopEngagements.value
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const getDataF = async () => {
      const data = await axios.get(
        "https://new-api.coco.gl/dashboard/intw/top/engaged"
      );
      dispatch(addUsersTE(data.data));
    };
    getDataF();
  }, [dispatch]);
  useEffect(() => {
    const getDataT = async () => {
      const data = await axios.get(
        "https://new-api.coco.gl/dashboard/intw/top/followers"
      );
      dispatch(addUsersTF(data.data));
    };
    getDataT();
  }, [dispatch]);
  return (
    <div className="list-page">
      <div className="list-page__titles">
        <div className="list-page__titles__div">
          <h2>Leaders in Engagement</h2>
          <p>The top ten influencers in terms of Engagement</p>
        </div>
        <div className="list-page__titles__div">
          <h2>Leaders in Followers</h2>
          <p>The top ten influencers in terms of Followers</p>
        </div>
      </div>
      <div className="list-page__cards">
        <div className="list-page__cards__div">
          {usersTopEngagements.map((user, index) => {
            return <UserCard user={user} key={index} />;
          })}
        </div>
        <div className="list-page__cards__div">
          {usersTopFollowers.map((user, index) => {
            return <UserCard user={user} key={index} />;
          })}
        </div>
      </div>
      <div className="message"></div>
    </div>
  );
}

export default ListPage;
