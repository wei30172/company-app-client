import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import membersApi, { MemberType } from "../../api/membersApi";
import "./team.scss";

type Ref = HTMLDivElement;
type Props = {};

const Team = React.forwardRef<Ref, Props>((props, ref) => {
  const { data, loading, error } = useFetch<MemberType>(membersApi);
  const [members, setMembers] = useState([] as MemberType[]);

  useEffect(() => {
    if (data) setMembers(data);
  }, [data]);

  return (
    <div ref={ref} className="team">
      <div className="team_container">
        {/* title */}
        <div className="team_title">
          <p>Our Team</p>
        </div>

        {/* team menbers */}
        <div className="team_menbers">
          {/* menber */}
          {error ? (
            <p>{error}</p>
          ) : loading ? (
            <p>loading...</p>
          ) : !members.length ? (
            <p>No Data to display.</p>
          ) : (
            members.map((member) => (
              <div
                key={member._id}
                className="team_menbers_menber cursor-pointer"
              >
                <img
                  className="shadow-md"
                  src={require(`../../assets/members/${member.url}.png`)}
                  alt="member"
                />
                <p>{member.name},</p>
                <p>{member.title}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
});

export default Team;
