import React from "react";
import classes from "./Character.module.css";

const Character = ({ data }) => {
  return (
    <>
      <div className={classes.card}>
        <div className={classes["card-inner"]}>
          <div className={classes["card-front"]}>
            <img src={`${data.img}`} alt="" />
          </div>
          <div className={classes["card-back"]}>
            <h1>{`${data.name}`}</h1>
            <ul>
              <li>
                <strong>Actor Name:</strong> {data.portrayed}
              </li>
              <li>
                <strong>Nickname:</strong> {data.nickname}
              </li>
              <li>
                <strong>Birthday:</strong> {data.birthday}
              </li>
              <li>
                <strong>Status:</strong> {data.status}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Character;
