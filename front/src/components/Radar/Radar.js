import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar as RadarRecharts,
  ResponsiveContainer,
} from "recharts";
import "./radar.css";

const Radar = (props) => {
  const activityType = props.type;
  console.log("activityType", activityType);
  const datas = activityType.data.map((elt) => {
    return {
      ...elt,
      activity: activityType.kind[elt.kind],
    };
  });
  console.log(datas);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="48%" outerRadius="60%" innerRadius="5%" data={datas}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="activity"
          stroke="white"
          axisLine={false}
          tickLine={false}
          tickSize={12}
        />
        <RadarRecharts dataKey="value" fill="red" fillOpacity={0.8} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Radar;
