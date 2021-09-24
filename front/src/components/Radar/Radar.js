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
  const datas = props.type.data.map((elt) => {
    return {
      ...elt,
      activity: props.type.kind[elt.kind],
    };
  });
  console.log("activityType", datas);
  return (
    <div className="Radar">
      <ResponsiveContainer width="100%" height="100%">
        {/* type d’activité - radar chart */}
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
    </div>
  );
};

export default Radar;
