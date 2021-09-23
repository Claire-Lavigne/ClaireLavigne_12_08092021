import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const Radar = (props) => {
  const activityType = props.type;
  console.log("activityType", activityType);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius={90} data={activityType.data}>
        {/* type d’activité - radar chart */}
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          dataKey={activityType.kind}
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Radar;
