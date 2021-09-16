import React from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const Performance = () => {
  return (
    <BarChart width={600} height={300}>
      <XAxis dataKey="name" tick={150} />
      <YAxis />
      <Bar dataKey="uv" barSize={30} fill="#8884d8" label={150} />
    </BarChart>
  );
};

export default Performance;
