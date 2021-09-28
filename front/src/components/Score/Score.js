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
  console.log("score", score, percent);

  const data = [
    {
      value: percent,
      maxValue: 100,
    },
  ];

  const CustomizedLegend = () => {
    return (
      <p className="custom-legend">
        <span>{percent}%</span> de votre objectif
      </p>
    );
  };

  return (
    <div className="Score">
      <h2>Score</h2>
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
            dataKey="value"
            fill="#FF0000"
          />
          <Legend
            content={<CustomizedLegend />}
            wrapperStyle={{
              top: 90,
              left: 80,
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
