import React from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";
import datas from "../../data";

const Sessions = () => {
  const sessions = datas.USER_AVERAGE_SESSIONS[0].sessions;
  console.log("sessionsSessions", sessions);

  return (
    <BarChart width={600} height={300} data={sessions}>
      <XAxis dataKey="name" tick={150} />
      <YAxis />
      <Bar dataKey="uv" barSize={30} fill="#8884d8" label={150} />
    </BarChart>
  );
};

export default Sessions;
