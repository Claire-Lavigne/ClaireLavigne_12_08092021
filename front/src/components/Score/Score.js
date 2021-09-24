import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./score.css";

const Score = (props) => {
  console.log(props);
  const score = Math.round(props.objective * 100);
  console.log("score", score);

  const CustomizedLegend = () => {
    return <p className="custom-legend">Score</p>;
  };

  return (
    <div className="Score">
      <ResponsiveContainer width="100%" height="100%">
        {/* score moyen - RadialBarChart */}
        <RadialBarChart data={props.objective}>
          <RadialBar
            minAngle={15}
            label={{ fill: "#000", position: "insideStart" }}
            clockWise={true}
            dataKey={score}
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
    </div>
  );
};

export default Score;
