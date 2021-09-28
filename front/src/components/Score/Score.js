import React from "react";
import PropTypes from "prop-types";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import "./score.css";

const Score = (props) => {
  const score = props.objective.todayScore || props.objective.score;
  const percent = Math.round(score * 100);
  console.log("score", score);
  console.log("score", percent);

  const data = [
    {
      value: percent,
      maxValue: 100,
    },
  ];

  const CustomizedLegend = () => {
    return <p className="custom-legend">Score</p>;
  };

  return (
    <div className="Score">
      <ResponsiveContainer width="100%" height="100%">
        {/* score moyen - RadialBarChart */}
        <RadialBarChart
          innerRadius="90%"
          outerRadius="80%"
          startAngle={90}
          endAngle={450}
          barSize={10}
          data={data}
        >
          <PolarAngleAxis type="number" tick={false} />
          <RadialBar
            clockWise={false}
            cornerRadius={50}
            label={{ fill: "#000", position: "insideEnd" }}
            dataKey="value"
            fill="#FF0000"
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

Score.propTypes = {
  objective: PropTypes.shape({
    todayScore: PropTypes.number,
    score: PropTypes.number,
  }),
};
export default Score;
