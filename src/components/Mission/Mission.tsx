import React from "react";
import missionImg from "../../assets/mission.png";
import "./mission.scss";

type Ref = HTMLDivElement;
type Props = {};

const Mission = React.forwardRef<Ref, Props>((props, ref) => {
  return (
    <div ref={ref} className="mission">
      <div className="mission_image shadow-lg">
        <img src={missionImg} alt="mission" />
      </div>
      <div className="mission_text">
        <p>Mission</p>
        <p>There are many variations of passages of Lorem Ipsum available.</p>
      </div>
    </div>
  );
});

export default Mission;
