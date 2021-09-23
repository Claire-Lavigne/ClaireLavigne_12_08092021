import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Score = (props) => {
  const score = props.objective;
  console.log("score", score);

  const CustomizedLegend = () => {
    return <p className="custom-legend">Score</p>;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      {/* score moyen - RadialBarChart */}
      <RadialBarChart data={score}>
        <RadialBar
          minAngle={15}
          label={{ fill: "#000", position: "insideStart" }}
          background
          clockWise={true}
          dataKey="todayScore"
        />
        <Legend
          content={<CustomizedLegend />}
          wrapperStyle={{
            top: 10,
            left: 10,
            fontSize: 15,
            color: "black",
            width: 50,
          }}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default Score;
